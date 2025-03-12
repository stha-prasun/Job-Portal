import React from "react";

const CompaniesTable = () => {
  return (
    <div className="mt-5">
      <h1 className="text-lg font-bold mb-4">
        List of your recent registered companies
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>1</td>
              <td>
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      alt="Company Logo"
                    />
                  </div>
                </div>
              </td>
              <td>Company Name</td>
              <td>2005-12-14</td>
              <td>
                <button
                  className="btn btn-sm btn-neutral"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Edit
                </button>
              </td>
            </tr>
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
