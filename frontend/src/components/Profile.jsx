import React from "react";
import Navbar from "./shared/Navbar";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import AppliedJobsTable from "./AppliedJobsTable";
import UpdateProfile from "./updateProfile";
import { useSelector } from "react-redux";

// const skills = ["Html", "CSS", "JavaScript", "ReactJs"];

const Profile = () => {
  const haveResume = true;
  const {loggedInUser} = useSelector((store)=>store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div
              tabIndex={0}
              role="button"
              className="avatar hover:cursor-pointer"
            >
              <div className="h-[40px] w-[40px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>

            <div>
              <h1 className="font-medium text-xl">{loggedInUser?.fullname}</h1>
              <p>
                {loggedInUser?.profile?.bio?.trim() ? loggedInUser.profile.bio : "NA"}
              </p>
            </div>
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <MdOutlineEdit size={25}/>
          </button>
          <dialog id="my_modal_1" className="modal">
            <UpdateProfile/>
          </dialog>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <MdOutlineEmail size={20} />
            <span>{loggedInUser?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <RiContactsLine size={20} />
            <span>{loggedInUser?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="font-medium text-xl my-2">Skills</h1>
          <div className="flex items-center gap-1">
            {loggedInUser?.profile?.skills.length !== 0 ? (
              loggedInUser?.profile.skills.map((item, index) => (
                <div key={index} className="badge badge-outline badge-neutral">
                  {item}
                </div>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label className="text-md font-bold">Resume</label>
          {haveResume ? (
            <a
              className="text-blue-500 w-fit hover:underline cursor-pointer"
              target="blank"
              href={loggedInUser?.profile?.resume}
            >
              {loggedInUser?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobsTable />
      </div>
    </div>
  );
};

export default Profile;
