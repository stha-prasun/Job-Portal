import React from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobID = "kwj";

  return (
    <div class="card w-72 bg-base-100 card-md shadow-sm">
      <div class="card-body">
        <div className="flex justify-around items-center">
          <button className="btn btn-square">
            <FaGoogle />
          </button>
          <div className="ml-2">
            <div className="w-52 flex justify-between items-center">
              <div>
                <h2 class="card-title">Company Name</h2>
                <p>Nepal</p>
              </div>
              <CiBookmarkPlus className="h-7 w-7" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg">Title</h1>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            obcaecati dolorum pariatur odio atque. Pariatur nesciunt quos minus
            quis cumque?
          </p>
        </div>
        <div class="justify-end card-actions">
          <button class="btn btn-primary" onClick={()=>navigate(`/description/${jobID}`)}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
