import React from "react";
import Navbar from "../shared/Navbar";
import CompaniesTable from "./CompaniesTable";

const Companies = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Filter by name"
            className="input input-bordered w-64"
          />

          <button className="btn btn-neutral">New Company</button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;
