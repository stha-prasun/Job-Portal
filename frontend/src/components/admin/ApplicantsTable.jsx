import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { APPLICATION_API_ENDPOINT } from "../../utils/constants";

const ApplicantsTable = () => {
  const { allApplicants } = useSelector((store) => store.application);

  const handleAccept = async (id) =>{
    try {
        const res = await axios.put(`${APPLICATION_API_ENDPOINT}/status/${id}/update`, {
            "status" : "accepted"
        }, {withCredentials:true})
        if(res?.data?.success){
            toast.success(res?.data?.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    }
  }

  const handleReject = async (id) =>{
    try {
        const res = await axios.put(`${APPLICATION_API_ENDPOINT}/status/${id}/update`, {
            "status" : "rejected"
        }, {withCredentials:true})
        if(res?.data?.success){
            toast.success(res?.data?.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Fullname</th>
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
                <button onClick={()=>handleAccept(item?._id)} className="btn btn-sm btn-neutral">Accept</button>
                <button onClick={()=>handleReject(item?._id)} className="btn btn-sm btn-neutral ml-2">
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
