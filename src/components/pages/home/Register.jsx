import React from "react";
import Logo from "../../../assets/img/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(5, "Kamida 5 ta harf")
    .max(10, "10 tadan ko'p bo'lmasligi kerak")
    .required("Nomni to'ldirish shart!"),
  name: Yup.string()
    .min(5, "Kamida 5 ta harf")
    .max(10, "10 tadan ko'p bo'lmasligi kerak")
    .required("Nomni to'ldirish shart!"),
  password: Yup.string()
    .min(5, "Kamida 5 ta belgi")
    .required("Parolni to'ldirish shart!"),
});

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await axios.post(
          "https://nt-shopping-list.onrender.com/api/auth",
          values
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
      } finally {
        setSubmitting(false);
      }
    },
  });

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
            Create an Account
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-[560px] gap-4"
          >
            <input
              name="name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              placeholder="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
            <input
              name="username"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${
                formik.touched.username && formik.errors.username
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-sm">
                {formik.errors.username}
              </div>
            )}

            <input
              name="password"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : ""
              }`}
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              <NavLink to="/asideCom">Sign Up</NavLink>
            </button>
          </form>
          <div className="mt-4 text-start">
            <p className="text-gray-600">
              No account yet?{" "}
              <NavLink to="/login" className="text-blue-600 hover:underline">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
