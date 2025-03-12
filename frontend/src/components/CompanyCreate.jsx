import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { useNavigate } from "react-router-dom";
import { COMPANY_API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../redux/companySlice";
import axios from "axios";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setcompanyName] = useState("");

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_ENDPOINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if(res?.data?.success){
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyID = res?.data?.company?._id;
        navigate(`/admin/companies/${companyID}`);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? You can change this
            later
          </p>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Company Name</legend>
          <input
            value={companyName}
            onChange={(e) => setcompanyName(e.target.value)}
            type="text"
            className="input my-2"
            placeholder="Microsoft, Google, etc"
          />
        </fieldset>

        <div className="flex items-center gap-2 my-5">
          <button
            onClick={() => navigate("/admin/companies")}
            className="btn btn-outline btn-error"
          >
            Cancel
          </button>
          <button
            onClick={registerNewCompany}
            className="btn btn-outline btn-warning"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
