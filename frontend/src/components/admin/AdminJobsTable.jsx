import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const {searchJobByText} = useSelector((store)=>store.job);
  const {allAdminJobs} = useSelector((store)=>store.job);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!searchJobByText) {
      setFilteredJobs(allAdminJobs);
    } else {
      const filtered = allAdminJobs?.filter((job) =>
        job?.title?.toLowerCase().includes(searchJobByText.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  }, [allAdminJobs, searchJobByText]);

  return (
    <div className="mt-5">
      <h1 className="text-lg font-bold mb-4">
        List of your recent posted jobs
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Role</th>
              <th>Description</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs?.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">No Companies Found</td>
              </tr>
            ) : (
              filteredJobs?.map((job) => (
                <tr key={job?._id}>
                  <td>{job?._id}</td>
                  <td>{job?.title}</td>
                  <td>{job?.description}</td>
                  <td>{job?.createdAt.split("T")[0]}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-neutral"
                      onClick={()=>navigate(`/admin/companies/${company?._id}`)}
                    >
                      Edit
                    </button>
                    <button
                    onClick={()=>navigate(`/admin/jobs/${job._id}/applicants`)}
                      className="btn btn-sm btn-neutral ml-2"
                    >
                      Applicants
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default AdminJobsTable;
