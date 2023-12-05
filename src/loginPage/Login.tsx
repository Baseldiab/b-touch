/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Alert from "@mui/material/Alert";
import axios from "axios";
import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/Auth";

interface Error {
  success: boolean;
  message: string;
}

export default function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const redirectPath = location.state?.path || "/";

  const navigateLogin = () => {
    if (auth.isAdmin) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      navigate(redirectPath, { replace: true });
    } else navigate(redirectPath, { replace: true });
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post("https://test-api.b-touch.store/public/w/screens/customers/login", {
        email: email,
        password: password,
      })
      .then((data) => {
        console.log(data);
        console.log(email);
        setErrorMsg("");
        navigateLogin();
      })
      .catch((error: Error) => {
        console.error("Error retrieving product data:", error);
        // setErrorMsg(error.message);
        console.log(error);
        setErrorMsg("username or password is incorrect");
      });
  }

  return (
    <section className="login-section myContainer my-12 ">
      <div className="w-2/5 mx-auto p-6 rounded-lg border-2 border-black">
        <h1 className="login__header  font-orelega text-xl text-black text-start">
          Login
        </h1>
        <form className="px-8" onSubmit={handleSubmit}>
          <div className="login__email flex flex-col my-1">
            <label htmlFor="email" className="font-orelega text-lg">
              Email Address
            </label>
            <input
              className="login__inputEmail  my-0.5 ms-3 border border-black rounded-lg p-1 "
              id="email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login__password flex flex-col my-1">
            <label htmlFor="Password" className="font-orelega text-lg">
              Password
            </label>
            <input
              className="login__inputPassword  my-0.5 ms-3 border border-black rounded-lg p-1 "
              type="password"
              id="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
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
              className="carousel__btn rounded-full  capitalize hover:bg-primary bg-buttonColor text-white md:text-base text-xs md:px-4 font-bold md:py-2 px-2 py-1 mt-6 mb-5"
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
        <div className="text-center">
          <span>Don&apos;t have an account ? </span>
          <Link
            to="/register"
            className="text-primary capitalize font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}
