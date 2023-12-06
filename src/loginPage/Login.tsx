/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Alert from "@mui/material/Alert";
import axios, { AxiosResponse } from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
import Swal from "sweetalert2";

interface ApiResponse {
  success: boolean;
  data: {
    expiration: number;
    expiration_at: string;
    fname: string;
    lname: string;
    name: string | null;
    token: string;
    type: string;
  };
  message: string;
}

interface Error {
  success: boolean;
  message: string;
}

export default function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const redirectPath = location.state?.path || "/";

  const navigateLogin = () => {
    if (auth.isLogged) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      navigate(redirectPath, { replace: true });
    } else navigate(redirectPath, { replace: true });
  };
  const successLogin: () => Promise<void> = async () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    await Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post("https://test-api.b-touch.store/public/w/screens/customers/login", {
        email: email,
        password: password,
      })
      .then((data: AxiosResponse<ApiResponse>) => {
        const Token: string = data.data.data.token;
        const fname: string = data.data.data.fname;
        auth.login(Token, fname);
        auth.isLogedIn(data.data.success);
        console.log(email);
        setErrorMsg("");
        navigateLogin();
        successLogin();
      })
      .catch((error: Error) => {
        console.error("Error retrieving product data:", error);
        // setErrorMsg(error.message);
        console.log(error);
        setErrorMsg("username or password is incorrect");
      });
  }

  return (
    <section className="login-section myContainer py-6 lg:mb-0 ">
      <div className="lg:w-2/5 md:w-3/5 mx-auto lg:p-6 rounded-lg lg:border-2 lg:border-black">
        <h1 className="login__header font-orelega md:text-xl text-base text-start">
          Login
        </h1>
        <form className="px-8" onSubmit={handleSubmit}>
          <div className="login__email flex flex-col my-2">
            <label htmlFor="email" className="font-orelega md:text-lg text-sm ">
              Email Address
            </label>
            <input
              className="login__inputEmail  my-0.5 ms-3 border border-black  text-black  rounded-lg p-1 "
              id="email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login__password flex flex-col my-2">
            <label
              htmlFor="Password"
              className="text-black font-orelega md:text-lg text-sm"
            >
              Password
            </label>
            <div className="ms-3 border border-black rounded-lg p-1 flex justify-between items-center border border-black rounded-lg sm:px-2 px-0.5 sm:p-1 p-0.5">
              <input
                className="login__inputPassword  my-0.5  focus:border-0 focus-within:border-0 focus-visible:outline-0  my-0.5 max-w-[85%] grow"
                type={showPassword ? "text" : "password"}
                id="Password"
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

          {errorMsg && (
            <Alert className="ms-3 rounded-lg" severity="error">
              {errorMsg}
            </Alert>
          )}
          <div className="flex justify-center">
            <button
              className="carousel__btn rounded-full  capitalize hover:bg-primary bg-buttonColor text-white md:text-base text-xs md:px-5 font-orelega  px-3 py-1 mt-6 mb-5"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        {/* <div className="text-center mx-auto relative my-2 ">
          <p
            className=" after:w-2/5 after:bg-black after:h-1 after:rounded-full after:-translate-y-0.5 after:top-1/2 after:absolute after:me-3 after:right-0 
          before:w-2/5 before:bg-black before:h-1 before:rounded-full before:-translate-y-0.5 before:top-1/2 before:absolute before:ms-3 before:left-0 "
          >
            Or
          </p>
        </div> */}
        <div className="font-orelega text-center md:text-lg text-sm">
          <span>Don&apos;t have an account ? </span>
          <Link to="/register" className="text-primary capitalize">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}
