import Alert from "@mui/material/Alert";
import axios from "axios";
import { FormEvent, SetStateAction, useState } from "react";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((data) => {
        console.log(data);
        console.log(username);
      })
      .catch((error: { response: { data: SetStateAction<null> } }) => {
        console.error("Error retrieving product data:", error);
        setErrorMsg(error.response.data);
      });
  }

  return (
    <section className="login-section myContainer my-12 ">
      <div className="w-2/5 mx-auto p-6 rounded-lg border-2 border-black">
        <h1 className="login__header  font-orelega text-xl text-black text-start">
          Login
        </h1>
        <form className="px-8" onSubmit={handleSubmit}>
          <div className="login__username flex flex-col my-1">
            <label htmlFor="Username" className="font-orelega text-lg">
              Username Or Email Address
            </label>
            <input
              className="login__inputName  my-0.5 ms-3 border border-black rounded-lg p-1 "
              type="text"
              name="userName"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="login__password flex flex-col my-1">
            <label htmlFor="Password" className="font-orelega text-lg">
              Password
            </label>
            <input
              className="login__inputPassword  my-0.5 ms-3 border border-black rounded-lg p-1 "
              type="text"
              name="userName"
              onChange={(e) => setPassword(e.target.value)}
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
        <div className="text-center mx-auto relative my-2 ">
          <p
            className=" after:w-2/5 after:bg-black after:h-1 after:rounded-full after:-translate-y-0.5 after:top-1/2 after:absolute after:me-3 after:right-0 
          before:w-2/5 before:bg-black before:h-1 before:rounded-full before:-translate-y-0.5 before:top-1/2 before:absolute before:ms-3 before:left-0 "
          >
            Or
          </p>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}
