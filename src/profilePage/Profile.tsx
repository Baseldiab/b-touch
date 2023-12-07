/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../Auth/Auth";
import Alert from "@mui/material/Alert";
import { useLocation, useNavigate } from "react-router-dom";
import loadImg from "../../public/images/loading.gif";

interface UserData {
  success: boolean;
  data: {
    addresses: [];
    email: string;
    fname: string;
    id: number;
    lname: string;
    notificationCount: number;
    phone_1: string;
    phone_2: string;
    photo: string;
    type: string;
  };
  message: string;
}

export default function Profile() {
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState<UserData | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  const auth = useAuth();
  // const token = auth.token;
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(token);

  const fetchData = async () => {
    try {
      if (token) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          "https://test-api.b-touch.store/public/w/screens/customers/auth/info",
          config
        );
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMsg("Failed to load profile data");
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    auth.logout();
    navigateLogin();
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const redirectPath = location.state?.path || "/profile";

  const navigateLogin = () => {
    if (auth.isLogged) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      navigate(redirectPath, { replace: true });
    } else navigate(redirectPath, { replace: true });
  };

  return (
    <section className="profile-section myContainer py-6 lg:mb-0 mb-14">
      <div className=" lg:w-4/6 md:w-4/6 mx-auto rounded-lg lg:border-2 lg:border-bgHeadRegister lg:pb-4">
        <h1 className="profile__header lg:bg-bgHeadRegister  font-orelega md:text-xl text-base text-black lg:text-white text-start md:px-8 px-5">
          Account details
        </h1>

        {!loading ? (
          <form className="md:px-8 px-5 md:mt-8 mt-5" onSubmit={handleSubmit}>
            <div className="first-line my-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
              <div className="profile__fname flex sm:flex-row flex-col sm:justify-between justify-start lg:mb-0 mb-2">
                <label
                  htmlFor="fname"
                  className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
                >
                  first name
                </label>
                <input
                  className="grow sm:ms-0 ms-1
                  profile__inputFName  my-0.5  border border-black rounded-lg p-1 px-2"
                  type="text"
                  name="fName"
                  value={data?.data.fname}
                  disabled
                />
              </div>
              <div className="profile__lname flex sm:flex-row flex-col sm:justify-between justify-start">
                <label
                  htmlFor="lname"
                  className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
                >
                  last name
                </label>
                <input
                  className="sm:ms-0 ms-1 grow profile__inputlName  my-0.5  border border-black rounded-lg px-2 p-1 "
                  id="lname"
                  type="text"
                  name="lName"
                  value={data?.data.lname}
                  disabled
                />
              </div>
            </div>

            <div className="profile__username my-2 flex sm:flex-row flex-col sm:justify-center justify-between ">
              <label
                htmlFor="username"
                className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
              >
                user name
              </label>
              <input
                className="sm:ms-0 ms-1 grow px-2 profile__inputUserame  my-0.5 border border-black rounded-lg p-1 "
                id="username"
                type="text"
                name="userame"
                value={data?.data.fname + " " + data?.data.lname}
                disabled
              />
            </div>

            <div className="first-line my-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
              <div className="profile__phone1 flex sm:flex-row flex-col sm:justify-between justify-start  lg:mb-0 mb-2">
                <label
                  htmlFor="Phone1"
                  className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
                >
                  phone 1
                </label>
                <input
                  className="sm:ms-0 ms-1 grow profile__inputConPassword  my-0.5  border border-black rounded-lg px-2 p-1 "
                  type="tel"
                  id="Phone1"
                  name="phone"
                  value={data?.data.phone_1}
                  disabled
                />
              </div>
              <div className="profile__phone2 flex sm:flex-row flex-col sm:justify-between justify-start">
                <label
                  htmlFor="Phone2"
                  className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
                >
                  phone 2
                </label>
                <input
                  className="sm:ms-0 ms-1 grow profile__inputConPassword  my-0.5  border border-black rounded-lg px-2 p-1 "
                  type="tel"
                  id="Phone2"
                  name="phone"
                  value={data?.data.phone_2}
                  disabled
                />
              </div>
            </div>

            <div className="profile__email my-2 flex sm:flex-row flex-col sm:justify-between justify-start">
              <label
                htmlFor="email"
                className="sm:w-40 font-orelega md:text-lg text-sm"
              >
                Email Address
              </label>
              <input
                className="sm:ms-0 ms-1 grow profile__inputEmail  my-0.5  border border-black rounded-lg px-2 p-1 "
                id="email"
                type="email"
                name="email"
                value={data?.data.email}
                disabled
              />
            </div>
            {errorMsg && (
              <Alert className="rounded-lg" severity="error">
                {errorMsg}
              </Alert>
            )}
            <div className="flex justify-center">
              <button
                className="carousel__btn rounded-full  capitalize hover:bg-primary bg-buttonColor text-white md:text-base text-xs md:px-5  px-3 py-1 md:mt-6 mt-4 mb-5 font-orelega"
                type="submit"
              >
                Logout
              </button>
            </div>
          </form>
        ) : (
          <div className="flex justify-center items-center my-6 mx-auto">
            <img className="w-16 h-16" src={loadImg} alt="loadin..." />
          </div>
        )}
      </div>
    </section>
  );
}
