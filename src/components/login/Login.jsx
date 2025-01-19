import React from "react";
import Logo from "../../assets/img/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let username = e.target[0].value;
      let password = e.target[1].value;

      if (!username || !password) {
        return alert("Maydonlarni to'ldiring!");
      }

      let res = await axios.post(
        "https://nt-shopping-list.onrender.com/api/auth",
        {
          username,
          password,
        }
      );

      if (res.status === 200) {
        alert("Login successful!");
        localStorage.setItem("token", res.data.token);
        navigate("/AsideCom");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Noma'lum xato yuz berdi!");
    }
  };

  return (
    <div className="bg-[#6c757d] h-screen flex justify-center items-center">
      <div className="flex bg-white rounded-xl shadow-lg">
        <div className="bg-[#212529] flex flex-col items-center justify-center px-[200px] py-12 rounded-l-xl">
          <img className="w-32" src={Logo} alt="Logo" />
          <p className="text-white mt-4 text-lg">Welcome back to</p>
          <h1 className="text-white text-5xl font-light mt-2">Shopping List</h1>
        </div>

        <div className="flex flex-col justify-center px-16 py-12">
          <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
            Sign In
          </h1>
          <form onSubmit={onSubmit} className="flex flex-col w-[560px] gap-4">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Username"
            />
            <input
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Sign In
            </button>
          </form>
          <div className="mt-4 text-start">
            <p className="text-gray-600">
              No account yet?{" "}
              <NavLink to="/register" className="text-blue-600 hover:underline">
                Create One
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
