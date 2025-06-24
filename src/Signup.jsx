import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 


const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          userName,
          password,
          email,
        }
      );

      const data = response.data;
      if (data.success) {
        alert("Signup successfull! You can now log in.");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-10 bg-white rounded-2xl shadow-lg w-[500px]">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border-2 rounded-xl p-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 rounded-xl p-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded-xl p-2"
          />
          <button className="bg-purple-500 text-white rounded-xl p-3 hover:bg-purple-600 cursor-pointer" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
