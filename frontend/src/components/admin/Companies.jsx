import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "../../hooks/useGetAllCompanies";
import { useDispatch } from "react-redux";
import { setsearchCompanyByText } from "../../redux/companySlice";

const Companies = () => {
  const navigate = useNavigate();
  useGetAllCompanies();

  const [input, setinput] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setsearchCompanyByText(input));
  }, [input])
  

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Filter by name"
            className="input input-bordered w-64"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />

          <button
            onClick={() => navigate("/admin/companies/create")}
            className="btn btn-neutral"
          >
            New Company
          </button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;
