import React from "react";
import axios from "axios";
import triangle from "./assets/triangle.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          userName,
          password,
        }
      );
      const data = await response.data;
      if(data.success) {
        localStorage.setItem("token", response.data.token); // save JWT
        navigate("/home");
      } else {
        alert(data.message || "Login Failed.");
      }
      console.log("Login Success:", response.data);
      alert("Login successful!");
      // redirect or navigate to dashboard here if needed
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col items-center p-12 bg-white rounded-2xl shadow-lg w-[500px] overflow-hidden">
        <img
          src={triangle}
          alt="triangle"
          className="absolute left-14 top-0 h-full w-[100%] object-cover z-0"
          style={{ transform: "translateX(-40%)" }}
        />

        <div className="relative z-10 w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold">Login</h1>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center mt-5 w-full"
          >
            <input
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border-2 bg-white border-gray-300 rounded-2xl p-2 m-2 w-full"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 border-gray-300 p-2 m-2 w-full"
            />
            <button
              type="submit"
              className="bg-purple-400 text-white rounded-xl p-3 m-2 w-full cursor-pointer"
            >
              Login
            </button>
            <button className="bg-purple-300 border-2 border-purple-300 rounded-3xl p-2 m-2">
              Forgot Password?
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
