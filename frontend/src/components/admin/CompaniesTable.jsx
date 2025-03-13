import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector((store) => store.company);
  const [filteredCompany, setFilteredCompany] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!searchCompanyByText) {
      setFilteredCompany(companies);
    } else {
      const filtered = companies?.filter((company) =>
        company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())
      );
      setFilteredCompany(filtered);
    }
  }, [companies, searchCompanyByText]);

  return (
    <div className="mt-5">
      <h1 className="text-lg font-bold mb-4">
        List of your recent registered companies
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Company ID</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompany?.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">No Companies Found</td>
              </tr>
            ) : (
              filteredCompany?.map((company) => (
                <tr key={company?._id}>
                  <td>{company?._id}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={company?.logo} alt="Company Logo" />
                      </div>
                    </div>
                  </td>
                  <td>{company?.name}</td>
                  <td>{company?.createdAt.split("T")[0]}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-neutral"
                      onClick={()=>navigate(`/admin/companies/${company?._id}`)}
                    >
                      Edit
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

export default CompaniesTable;
