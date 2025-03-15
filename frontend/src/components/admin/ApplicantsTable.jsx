import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ApplicantsTable = () => {
  const { allApplicants } = useSelector((store) => store.application);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Fullame</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Resume</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allApplicants?.application?.map((item) => (
            <tr key={item?._id}>
              <td>{item?.applicant?.fullname}</td>
              <td>{item?.applicant?.email}</td>
              <td>{item?.applicant?.phoneNumber}</td>
              <td>
                {item?.applicant?.profile?.resume ? (
                  <Link
                    className="text-blue-400"
                    to={item?.applicant?.profile?.resume}
                  >
                    Resume
                  </Link>
                ) : (
                  <span>NA</span>
                )}
              </td>
              <td>
                <button className="btn btn-sm btn-neutral">Accept</button>
                <button className="btn btn-sm btn-neutral ml-2">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantsTable;
