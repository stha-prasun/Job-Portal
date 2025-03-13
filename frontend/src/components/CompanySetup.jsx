import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "../utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import useGetCompanyById from "../hooks/useGetCompanyById";

const CompanySetup = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  useGetCompanyById(params.id);

  const [input, setinput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const {singleCompany} = useSelector((store)=>store.company);

  const handleForm = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setinput({ ...input, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.put(
        `${COMPANY_API_ENDPOINT}/update/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    setinput({
    name: singleCompany?.name || "",
    description: singleCompany?.description || "",
    website: singleCompany?.website || "",
    location: singleCompany?.location || "",
    file: null,
    })
  }, [singleCompany])
  

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-5 p-8">
            <button onClick={()=>navigate("/admin/companies")} className="btn text-gray-500 font-semibold">
              <FaArrowLeft />
              Back
            </button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Company Name</legend>
            <input
              value={input.name}
              onChange={handleForm}
              type="text"
              className="input"
              name="name"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Description</legend>
            <input
              value={input.description}
              onChange={handleForm}
              type="text"
              className="input"
              name="description"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Website</legend>
            <input
              value={input.website}
              onChange={handleForm}
              type="text"
              className="input"
              name="website"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Location</legend>
            <input
              value={input.location}
              onChange={handleForm}
              type="text"
              className="input"
              name="location"
              placeholder="Type here"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Logo</legend>
            <input
              onChange={handleFile}
              type="file"
              className="input"
              accept="image/*"
              placeholder="Type here"
            />
          </fieldset>
          <button type="submit" className="btn btn-outline btn-warning mt-3">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
