import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(()=> {
    console.log(location);
  })
  function login(e) {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    fetch("http://localhost:3005/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json();
    }).then((data)=> {
      console.log(data);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate(location.state.url);
    }).catch((e)=>{
      console.log(e)
    });
  }

  return (
    <div className="w-full max-w-xs mx-auto my-6">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={login}
      >
        <div>
          <img
            src={require("../img/JoyfulBurgerLogo.webp")}
            alt=""
            className=" h-16 m-2 mx-auto mt-0"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className=" text-center">
          <button
            className="bg-rose-400 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 JoyfulBurger. All rights reserved.
      </p>
    </div>
  );
}
