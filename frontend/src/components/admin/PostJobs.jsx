import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import { JOB_API_ENDPOINT } from "../../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PostJobs = () => {
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);

  const [input, setinput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: 0,
    location: "",
    jobType: "",
    experienceLevel: 0,
    openings: 0,
    company: "",
  });

  const handleInput = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    setinput({ ...input, company: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/job/post`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        navigate("/admin/jobs");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center my-5">
        <form
          onSubmit={handleSubmit}
          className="p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md"
        >
          <div className="grid grid-cols-2 gap-5">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Title</legend>
              <input
                type="text"
                className="input"
                name="title"
                placeholder="Type here"
                value={input.title}
                onChange={handleInput}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Description</legend>
              <input
                type="text"
                className="input"
                name="description"
                placeholder="Type here"
                value={input.description}
                onChange={handleInput}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Requirements</legend>
              <input
                type="text"
                className="input"
                name="requirements"
                placeholder="Type here"
                value={input.requirements}
                onChange={handleInput}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Salary</legend>
              <input
                type="number"
                className="input"
                name="salary"
                placeholder="Type here"
                value={input.salary}
                onChange={handleInput}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Location</legend>
              <input
                type="text"
                className="input"
                name="location"
                placeholder="Type here"
                value={input.location}
                onChange={handleInput}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Job Type</legend>
              <input
                type="text"
                className="input"
                name="jobType"
                placeholder="Type here"
                value={input.jobType}
                onChange={handleInput}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Experience Level</legend>
              <input
                type="number"
                className="input"
                name="experienceLevel"
                placeholder="Type here"
                value={input.experienceLevel}
                onChange={handleInput}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Number of Openings</legend>
              <input
                type="number"
                className="input"
                name="openings"
                placeholder="Type here"
                value={input.openings}
                onChange={handleInput}
              />
            </fieldset>
          </div>
          {companies.length > 0 && (
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Company</legend>
              <select
                onChange={handleSelect}
                value={input.company}
                className="select"
              >
                <option value="">Select a Company</option>
                {companies.map((company) => (
                  <option value={company._id} key={company._id}>
                    {company.name}
                  </option>
                ))}
              </select>
            </fieldset>
          )}
          <button className="btn btn-outline btn-warning w-full mt-5">
            Post Job
          </button>
          {companies.length === 0 && (
            <p className="text-xs text-red-600 font-bold text-center my-3">
              Please Register A Company Before Posting A Job
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostJobs;
