import React from "react";

const AppliedJobsTable = () => {
  return (
    <div>
      <div className="overflow-x-auto rounded-box">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Job Role</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {[1, 2, 3, 4].map((item, index) => (
              <tr className="hover:bg-base-300">
                <th>1</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>Accepted</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobsTable;
