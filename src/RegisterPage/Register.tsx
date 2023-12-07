/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Alert from "@mui/material/Alert";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import axios from "axios";
import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
import Swal from "sweetalert2";

type ErrorData = Record<string, string[]>;

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

  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const redirectPath = location.state?.path || "/login";

  const successRegister: () => Promise<void> = async () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    await Toast.fire({
      icon: "success",
      title: "Registration successful!",
    });
  };

  const navigateLogin = () => {
    if (auth.isLogged) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      navigate(redirectPath, { replace: true });
    } else navigate(redirectPath, { replace: true });
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== conPassword) {
      setErrorMsg("Password and confirm password do not match");
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
        successRegister();
      })
      .catch((error) => {
        console.error("Error retrieving product data:", error);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const errorData: ErrorData = error.response.data.data;
        console.log(errorData);
        for (const key in errorData) {
          if (Array.isArray(errorData[key]) && errorData[key].length > 0) {
            const errorMessage = `${errorData[key][0]} `;
            setErrorMsg(errorMessage);
          }
        }
      });
  }

  return (
    <section className="register-section myContainer py-6 lg:mb-0 mb-14">
      <div className=" lg:w-4/6 md:w-4/6 mx-auto rounded-lg lg:border-2 lg:border-bgHeadRegister lg:pb-4">
        <h1 className="register__header lg:bg-bgHeadRegister  font-orelega md:text-xl text-base text-black lg:text-white text-start md:px-8 px-5">
          Register
        </h1>
        <p className=" ms-2 font-orelega text-bottomNavBorder md:px-8 px-5 md:text-sm text-xs mt-2 lg:mt-5">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>

        <form className="md:px-8 px-5 md:mt-8 mt-5" onSubmit={handleSubmit}>
          <div className="first-line my-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
            <div className="register__fname flex sm:flex-row flex-col sm:justify-between justify-start lg:mb-0 mb-2">
              <label
                htmlFor="fname"
                className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
              >
                first name
              </label>
              <input
                className="grow sm:ms-0 ms-1
                  register__inputFName  my-0.5  border border-black rounded-lg p-1 px-2"
                type="text"
                name="fName"
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>
            <div className="register__lname flex sm:flex-row flex-col sm:justify-between justify-start">
              <label
                htmlFor="lname"
                className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
              >
                last name
              </label>
              <input
                className="sm:ms-0 ms-1 grow register__inputlName  my-0.5  border border-black rounded-lg px-2 p-1 "
                id="lname"
                type="text"
                name="lName"
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="register__username my-2 flex sm:flex-row flex-col sm:justify-center justify-between ">
            <label
              htmlFor="username"
              className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
            >
              user name
            </label>
            <input
              className="sm:ms-0 ms-1 grow px-2 register__inputUserame  my-0.5 border border-black rounded-lg p-1 "
              id="username"
              type="text"
              name="userame"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="first-line my-2 grid lg:grid-cols-2 grid-cols-1 lg:gap-4">
            <div className="register__password flex sm:flex-row flex-col sm:justify-between justify-start lg:mb-0 mb-2">
              <label
                htmlFor="Password"
                className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
              >
                Password
              </label>
              <div className="sm:ms-0 ms-1 grow flex justify-between items-center border border-black rounded-lg sm:px-2 px-0.5 sm:p-1 p-0.5">
                <input
                  className="register__inputPassword grow focus:border-0 focus-within:border-0 focus-visible:outline-0  my-0.5 max-w-[85%]"
                  type={showPassword ? "text" : "password"}
                  id="Password"
                  minLength={8}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {showPassword ? (
                  <VisibilityOff
                    className="cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Visibility
                    className="cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>
            <div className="register__conPassword flex sm:flex-row flex-col sm:justify-between justify-start">
              <label
                htmlFor="ConPassword"
                className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
              >
                confirm Password
              </label>
              <div className="sm:ms-0 ms-1 grow flex justify-between items-center border border-black rounded-lg px-2 p-1">
                <input
                  className="register__inputConPassword grow focus:border-0 focus-within:border-0 focus-visible:outline-0  my-0.5 max-w-[85%]"
                  type={showConPassword ? "text" : "password"}
                  id="ConPassword"
                  name="conPassword"
                  minLength={8}
                  onChange={(e) => setConPassword(e.target.value)}
                  required
                />
                {showConPassword ? (
                  <VisibilityOff
                    className="cursor-pointer "
                    onClick={() => setShowConPassword(false)}
                  />
                ) : (
                  <Visibility
                    className="cursor-pointer"
                    onClick={() => setShowConPassword(true)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="first-line my-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
            <div className="register__phone1 flex sm:flex-row flex-col sm:justify-between justify-start  lg:mb-0 mb-2">
              <label
                htmlFor="Phone1"
                className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
              >
                phone 1
              </label>
              <input
                className="sm:ms-0 ms-1 grow register__inputConPassword  my-0.5  border border-black rounded-lg px-2 p-1 "
                type="tel"
                id="Phone1"
                name="phone"
                minLength={10}
                onChange={(e) => setPhone1(e.target.value)}
                required
              />
            </div>
            <div className="register__phone2 flex sm:flex-row flex-col sm:justify-between justify-start">
              <label
                htmlFor="Phone2"
                className="sm:w-40 font-orelega md:text-lg text-sm capitalize"
              >
                phone 2
              </label>
              <input
                className="sm:ms-0 ms-1 grow register__inputConPassword  my-0.5  border border-black rounded-lg px-2 p-1 "
                type="tel"
                id="Phone2"
                name="phone"
                minLength={10}
                onChange={(e) => setPhone2(e.target.value)}
              />
            </div>
          </div>

          <div className="register__email my-2 flex sm:flex-row flex-col sm:justify-between justify-start">
            <label
              htmlFor="email"
              className="sm:w-40 font-orelega md:text-lg text-sm"
            >
              Email Address
            </label>
            <input
              className="sm:ms-0 ms-1 grow register__inputEmail  my-0.5  border border-black rounded-lg px-2 p-1 "
              id="email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
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
              Save
            </button>
          </div>
        </form>
        <div className="font-orelega text-center md:text-lg text-sm">
          <span>Already have an account </span>
          <Link
            to="/login"
            className="lg:text-primary text-textHeadRegister capitalize "
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
