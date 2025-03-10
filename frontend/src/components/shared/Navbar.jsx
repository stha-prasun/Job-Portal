import React from "react";
import { RxAvatar } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { USER_API_ENDPOINT } from "../../utils/constants";
import { setLoggedInUser } from "../../redux/authSlice";

const Navbar = () => {
  const { loggedInUser } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = async () =>{
    try {
      const res = await axios.get(
        `${USER_API_ENDPOINT}/logout`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setLoggedInUser(null));
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong!");
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  }
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div>
            <Link to="/">
              <h1 className="text-2xl font-bold text-[#1A1A1A] hover:cursor-pointer">
                Work<span className="text-[#FFC107]">Hive</span>
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-10 hover:cursor-pointer">
            <ul className="flex font-medium items-center gap-5">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/jobs">
                <li>Jobs</li>
              </Link>
              <Link to="/browse">
                <li>Browse</li>
              </Link>
            </ul>

            {!loggedInUser ? (
              <div>
                <Link to="/login">
                  <button className="btn btn-outline mr-5">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="btn btn-outline btn-warning">
                    Signup
                  </button>
                </Link>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar hover:cursor-pointer"
                >
                  <div className="h-[40px] w-[40px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={loggedInUser?.profile?.profilePicture} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white shadow-lg rounded-md w-52 p-3 z-50 flex flex-col items-center text-center gap-y-3 hover:cursor-default"
                >
                  <li className="w-full font-medium">Prasun Shrestha</li>
                  <li className="text-sm text-gray-500">
                    {loggedInUser?.profile?.bio}
                  </li>
                  <div className="text-gray-600 flex flex-col gap-3">
                    <div className="flex items-center gap-5">
                      <RxAvatar size={30} />
                      <Link to="/profile">
                        <a className="link link-hover">View Profile</a>
                      </Link>
                    </div>
                    <div className="flex items-center gap-5">
                      <IoIosLogOut size={30} />
                      <a onClick={handleLogOut} className="link link-hover">Logout</a>
                    </div>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
