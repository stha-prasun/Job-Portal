import React, { useState } from "react";

const UpdateProfile = () => {
  const [loading, setloading] = useState(false);

  return (
    <div>
      <div className="modal-box w-[100vw]">
        <h3 className="font-bold text-lg">Update Profile</h3>
        <p className="text-gray-600">Fill in the details you want to edit</p>

        {/* Form */}
        <form className="mt-4 space-y-3">
          {/* Name */}
          <div>
            <label htmlFor="name" className="label text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              id="name"
              name="name"
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
              type="text"
              placeholder="Enter your phone number"
              className="input input-bordered w-full"
              id="number"
              name="number"
            />
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="bio" className="label text-gray-700 font-semibold">
              Bio
            </label>
            <input
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
              type="file"
              accept="application/pdf"
              className="file-input file-input-bordered w-full"
              id="file"
              name="file"
            />
          </div>
        </form>

        {/* Modal Actions */}
        <div className="modal-action">
          {!loading ? (
              <button type="submit" className="btn btn-primary">Submit</button>
          ) : (
              <button className="btn">
              <span className="loading loading-spinner"></span>
              Updating
            </button>
          )}
        <form method="dialog">
          <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
