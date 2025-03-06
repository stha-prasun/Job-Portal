import React from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";

const Job = () => {
  return (
    <div class="card w-72 bg-base-100 card-md shadow-sm">
      <div class="card-body">
        <div className="flex justify-around items-center">
          <button className="btn btn-square">
            <FaGoogle />
          </button>
          <div className="ml-2">
            <div className="w-52 flex justify-between">
              <h2 class="card-title">Company Name</h2>
              <CiBookmarkPlus className="h-7 w-7" />
            </div>
            <p>Nepal</p>
          </div>
        </div>
        <div>
            <h1 className="font-bold text-lg">Title</h1>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum obcaecati dolorum pariatur odio atque. Pariatur nesciunt quos minus quis cumque?</p>
        </div>
        <div class="justify-end card-actions">
          <button class="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
