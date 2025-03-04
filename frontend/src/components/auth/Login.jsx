import React from "react";
import Navbar from "../shared/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5 text-center text-[#00796B]">
            Login <span className="text-[#FFCA28]">Now</span>
          </h1>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
              type="password"
              placeholder="Password"
              className="input input-bordered w-full focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex items-center gap-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radio-8"
                className="radio radio-warning"
                value="candidate"
              />
              <span>Candidate</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radio-8"
                className="radio radio-warning"
                value="recruiter"
              />
              <span>Recruiter</span>
            </label>
          </div>

          <button className="btn btn-outline btn-warning mt-5 w-full mb-5">Log In</button>
          <span className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
