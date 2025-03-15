import React from "react";
import { useSelector } from "react-redux";

const AppliedJobsTable = () => {
  const { appliedJobs } = useSelector((store) => store.job);
  return (
    <div>
      <div className="overflow-x-auto rounded-box">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Job Role</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {appliedJobs?.map((item, index) => (
              <tr key={index} className="hover:bg-base-300">
                <td>{item?.updatedAt.split("T")[0]}</td>
                <td>{item?.job?.title}</td>
                <td>{item?.job?.company?.name}</td>
                <td>{item?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobsTable;
