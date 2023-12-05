/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Alert from "@mui/material/Alert";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/Auth";

interface Error {
  success: boolean;
  message: string;
  data: {
    fname: [string];
    lname: [string];
    email: [string];
    password: [string];
    phone_1: [string];
  };
}

export default function Register() {
  const [errorMsg, setErrorMsg] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const redirectPath = location.state?.path || "/login";

  const navigateLogin = () => {
    if (auth.isAdmin) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      navigate(redirectPath, { replace: true });
    } else navigate(redirectPath, { replace: true });
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== conPassword) {
      setErrorMsg("Passwords do not match");
      return;
    } else setErrorMsg("");

    axios
      .post(
        "https://test-api.b-touch.store/public/w/screens/customers/register",
        {
          fname: fname,
          lname: lname,
          username: username,
          password: password,
          confirm_password: conPassword,
          phone_1: phone1,
          phone_2: phone2,
          email: email,
        }
      )
      .then((data) => {
        console.log(data);
        navigateLogin();
      })
      .catch((error: Error) => {
        console.error("Error retrieving product data:", error);
        setErrorMsg(
          `"first name ${error.data?.fname[0]} ,last name ${error.data?.lname[0]} ,password ${error.data?.password[0]} ,email ${error.data?.email[0]} and phone 1 ${error.data?.phone_1[0]}"`
        );
      });
  }

  return (
    <section className="register-section myContainer my-12 ">
      <div className=" mx-28 rounded-lg border-2 border-headRegister">
        <h1 className="register__header bg-headRegister  font-orelega text-xl text-white text-start px-8">
          Register
        </h1>
        <p className="text-bottomNavBorder px-8 text-sm mt-5">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>
        <form className="px-8 mt-8" onSubmit={handleSubmit}>
          <div className="first-line my-2 grid grid-cols-2 gap-8">
            <div className="register__fname flex justify-between  my-1 gap-8">
              <label
                htmlFor="fname"
                className="md:w-40 font-orelega text-lg capitalize"
              >
                first name
              </label>
              <input
                className="grow
                  register__inputfName  my-0.5  border border-black rounded-lg p-1 px-2 "
                type="text"
                name="fName"
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>
            <div className="register__lname flex justify-between  my-1 gap-8">
              <label
                htmlFor="lname"
                className="w-40 font-orelega text-lg capitalize"
              >
                last name
              </label>
              <input
                className="grow register__inputlName  my-0.5  border border-black rounded-lg p-1 "
                id="lname"
                type="text"
                name="lName"
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="register__username my-2 flex justify-between    gap-8">
            <label
              htmlFor="username"
              className="w-40 font-orelega text-lg capitalize"
            >
              user name
            </label>
            <input
              className="grow px-2 register__inputUserame  my-0.5 border border-black rounded-lg p-1 "
              id="username"
              type="text"
              name="userame"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="first-line my-2 grid grid-cols-2 gap-8">
            <div className="register__password flex justify-between  my-2 gap-8">
              <label
                htmlFor="Password"
                className="w-40 font-orelega text-lg capitalize"
              >
                Password
              </label>
              <input
                className="grow register__inputPassword  my-0.5  border border-black rounded-lg p-1 "
                type="password"
                id="Password"
                minLength={8}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="register__conPassword flex justify-between gap-8 my-2">
              <label
                htmlFor="ConPassword"
                className="w-40 font-orelega text-lg capitalize"
              >
                confirm Password
              </label>
              <input
                className="grow register__inputConPassword  my-0.5  border border-black rounded-lg p-1 "
                type="password"
                id="ConPassword"
                name="conPassword"
                minLength={8}
                onChange={(e) => setConPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="first-line my-2 grid grid-cols-2 gap-8">
            <div className="register__phone1 flex justify-between gap-8 my-1">
              <label
                htmlFor="Phone1"
                className="w-40 font-orelega text-lg capitalize"
              >
                phone 1
              </label>
              <input
                className="grow register__inputConPassword  my-0.5  border border-black rounded-lg p-1 "
                type="tel"
                id="Phone1"
                name="phone"
                minLength={10}
                onChange={(e) => setPhone1(e.target.value)}
                required
              />
            </div>
            <div className="register__phone2 flex justify-start gap-8 my-1">
              <label
                htmlFor="Phone2"
                className="w-40 font-orelega text-lg capitalize"
              >
                phone 2
              </label>
              <input
                className="grow register__inputConPassword  my-0.5  border border-black rounded-lg p-1 "
                type="tel"
                id="Phone2"
                name="phone"
                minLength={10}
                onChange={(e) => setPhone2(e.target.value)}
              />
            </div>
          </div>

          <div className="register__email my-2 flex justify-between    gap-8">
            <label htmlFor="email" className="w-40 font-orelega text-lg">
              Email Address
            </label>
            <input
              className="grow register__inputEmail  my-0.5  border border-black rounded-lg p-1 "
              id="email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {errorMsg && (
            <Alert className="ms-3 rounded-lg" severity="error">
              {errorMsg}
            </Alert>
          )}
          <div className="flex justify-center">
            <button
              className="carousel__btn rounded-full  capitalize hover:bg-primary bg-buttonColor text-white md:text-base text-xs md:px-6 font-bold md:py-2 px-2 py-1 mt-6 mb-5"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
