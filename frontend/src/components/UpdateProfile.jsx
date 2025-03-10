import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import toast from "react-hot-toast";
import { USER_API_ENDPOINT } from "../utils/constants";
import { setLoggedInUser } from "../redux/authSlice";

const UpdateProfile = () => {
  const [loading, setloading] = useState(false);
  const { loggedInUser } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [input, setinput] = useState({
    fullname: loggedInUser?.fullname,
    email: loggedInUser?.email,
    phoneNumber: loggedInUser?.phoneNumber,
    bio: loggedInUser?.profile?.bio,
    skills: loggedInUser?.profile?.skills?.map((skill) => skill),
    file: loggedInUser?.profile?.resume,
  });

  const handleChange = (e) =>{
    setinput({...input, [e.target.name] :e.target.value});
  }

  const handleFile = (e) =>{
    const file = e.target.files?.[0];
    setinput({...input, file});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if(input.file){
      formData.append("file", input.file);
    }

    try {
      const res = await axios.put(`${USER_API_ENDPOINT}/profile/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setLoggedInUser(res.data.user));
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div>
      <div className="modal-box w-[100vw]">
        <h3 className="font-bold text-lg">Update Profile</h3>
        <p className="text-gray-600">Fill in the details you want to edit</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          {/* Name */}
          <div>
            <label htmlFor="name" className="label text-gray-700 font-semibold">
              Name
            </label>
            <input
            value={input.fullname}
            onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              id="fullname"
              name="fullname"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="label text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
            value={input.email}
            onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              id="email"
              name="email"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="number"
              className="label text-gray-700 font-semibold"
            >
              Phone Number
            </label>
            <input
            value={input.phoneNumber}
            onChange={handleChange}
              type="number"
              placeholder="Enter your phone number"
              className="input input-bordered w-full"
              id="number"
              name="phoneNumber"
            />
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="bio" className="label text-gray-700 font-semibold">
              Bio
            </label>
            <input
            value={input.bio}
            onChange={handleChange}
              type="text"
              placeholder="Write a short bio"
              className="input input-bordered w-full"
              id="bio"
              name="bio"
            />
          </div>

          {/* Skills */}
          <div>
            <label
              htmlFor="skills"
              className="label text-gray-700 font-semibold"
            >
              Skills
            </label>
            <input
            value={input.skills}
            onChange={handleChange}
              type="text"
              placeholder="Enter your skills (comma-separated)"
              className="input input-bordered w-full"
              id="skills"
              name="skills"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="label text-gray-700 font-semibold">Resume</label>
            <input
            onChange={handleFile}
              type="file"
              accept="application/pdf"
              className="file-input file-input-bordered w-full"
              id="file"
              name="file"
            />
          </div>

          {!loading ? (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          ) : (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              Updating
            </button>
          )}
        </form>

        {/* Modal Actions */}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
