import React from "react";

const LatestJobCards = ({job}) => {
  return (
    <div>
      <div className="card w-96 shadow-xl border border-gray-100 cursor-pointer">
        <figure>
          <img src="/img.jpg" alt="img" className="w-96 object-fill" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">
            {job?.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h2 className="text-base">{job?.company?.name}</h2>
          <p>Nepal</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{job?.openings} Openings</div>
            <div className="badge badge-outline">{job?.jobType}</div>
            <div className="badge badge-outline">{job?.salary} LPA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;
