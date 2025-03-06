import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_ENDPOINT } from "../../utils/constants";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [input, setinput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/login`,
        {
          email: input.email,
          password: input.password,
          role: input.role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if(res.data.success){
        toast.success(res.data.message);
        navigate("/");
      }else{
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong!");
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center text-[#00796B]">
            Login <span className="text-[#FFCA28]">Now</span>
          </h1>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              value={input.email}
              onChange={handleChange}
              type="text"
              placeholder="something@domain.com"
              className="input input-bordered w-full focus:outline-none focus:ring-0"
            />
          </div>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              value={input.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex items-center gap-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                className="radio radio-warning"
                value="candidate"
                checked={input.role === "candidate"}
                onChange={handleChange}
              />
              <span>Candidate</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                className="radio radio-warning"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={handleChange}
              />
              <span>Recruiter</span>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-outline btn-warning mt-5 w-full mb-5"
          >
            Log In
          </button>
          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
