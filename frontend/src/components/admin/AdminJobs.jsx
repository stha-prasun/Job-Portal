import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import useGetAdminJobs from "../../hooks/useGetAdminJobs";
import { setSerchJobByText } from "../../redux/jobSlice";

const AdminJobs = () => {
  useGetAdminJobs();
  const navigate = useNavigate();

  const [input, setinput] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSerchJobByText(input));
  }, [input])
  

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Filter by role"
            className="input input-bordered w-64"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />

          <button
            onClick={() => navigate("/admin/jobs/create")}
            className="btn btn-neutral"
          >
            New Job
          </button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  );
};

export default AdminJobs;
