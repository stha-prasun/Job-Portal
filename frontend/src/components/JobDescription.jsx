import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "../redux/jobSlice";
import { APPLICATION_API_ENDPOINT, JOB_API_ENDPOINT } from "../utils/constants";
import Navbar from "./shared/Navbar";
import toast from "react-hot-toast";

const JobDescription = () => {
  const params = useParams();
  const jobID = params.id;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedInUser } = useSelector((store) => store.auth);
  if (!loggedInUser) {
    navigate("/login");
    toast.error("Login Please");
  }

  const { singleJob } = useSelector((store) => store.job);

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobID}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobID, dispatch, loggedInUser?._id]);
  

  const handleApply = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${jobID}`,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200 p-6 flex justify-center">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-box p-6 space-y-6">
          {/* Job Title & Company Info */}
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-bold">{singleJob?.title}</h1>
            <p className="text-gray-600">
              at{" "}
              <span className="font-semibold">{singleJob?.company?.name}</span>
            </p>
            <div className="flex justify-center gap-2 mt-2">
              <div className="badge badge-primary">{singleJob?.jobType}</div>
              <div className="badge badge-secondary">{singleJob?.location}</div>
            </div>
          </div>

          {/* Job Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Job Description</h2>
            <p className="text-gray-700">{singleJob?.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Develop and maintain UI components using **React &
                TailwindCSS**.
              </li>
              <li>Collaborate with backend developers to integrate APIs.</li>
              <li>Ensure the application is **responsive and accessible**.</li>
              <li>Optimize performance for a smooth user experience.</li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Requirements</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Experience : {singleJob?.experienceLevel} years</li>
              <li>Education : {singleJob?.requirements}</li>
              <li>Understanding of **REST APIs and state management**.</li>
              <li>Strong problem-solving skills and attention to detail.</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Competitive salary with performance bonuses.</li>
              <li>Fully remote work with flexible hours.</li>
              <li>Health insurance & paid leave.</li>
              <li>Growth opportunities & skill development programs.</li>
            </ul>
          </div>

          {/* Apply Button */}
          <div className="text-center">
            <button onClick={handleApply} className="btn btn-primary w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
