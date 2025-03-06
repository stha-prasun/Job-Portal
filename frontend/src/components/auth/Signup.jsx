import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_ENDPOINT } from "../../utils/constants";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/authSlice";

const Signup = () => {
  const {loading} = useSelector((store)=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setinput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setinput({ ...input, file: e.target.files?.[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally{
      dispatch(setLoading(false));
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
            Signup <span className="text-[#FFCA28]">Now</span>
          </h1>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              name="fullname"
              value={input.fullname}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full focus:outline-none focus:ring-0"
            />
          </div>

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
              <span className="label-text">Phone Number</span>
            </label>
            <input
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={handleChange}
              type="number"
              placeholder="9811111111"
              className="input input-bordered w-full focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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

          <div className="flex items-center gap-3 mt-5">
            <label className="label">Profile</label>
            <label className="input flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md cursor-pointer">
              <svg
                className="h-5 w-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                </g>
              </svg>
              <input
                name="file"
                accept="image/*"
                type="file"
                onChange={handleFile}
              />
            </label>
          </div>
          {
            loading? (
              <button
              className="btn btn-outline btn-warning mt-5 w-full mb-5"
              disabled="disabled"
            >
              <span className="loading loading-spinner"></span>
            </button>
            ) : (
              <button
              type="submit"
              className="btn btn-outline btn-warning mt-5 w-full mb-5"
            >
              Sign Up
            </button>
            )
          }
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
