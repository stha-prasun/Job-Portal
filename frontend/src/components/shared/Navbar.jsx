import React from "react";
import { RxAvatar } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";


const Navbar = () => {
    const user = false;
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A1A]">
              Work<span className="text-[#FFC107]">Hive</span>
            </h1>
          </div>
          <div className="flex items-center gap-10">
            <ul className="flex font-medium items-center gap-5">
              <li>Home</li>
              <li>Jobs</li>
              <li>Browse</li>
            </ul>

            {
                !user ? (
                    <div>
                        <Link to="/login"><button className="btn btn-outline mr-5">Login</button></Link>
                        <Link to="/signup"><button className="btn btn-outline btn-warning">Signup</button></Link>
                    </div>
                ) : (
                    <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="avatar hover:cursor-pointer"
                    >
                      <div className="h-[40px] w-[40px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-white shadow-lg rounded-md w-52 p-3 z-50 flex flex-col items-center text-center gap-y-3 hover:cursor-default"
                    >
                      <li className="w-full font-medium">Prasun Shrestha</li>
                      <li className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet.
                      </li>
                      <div className="text-gray-600 flex flex-col gap-3">
                        <div className="flex items-center gap-5">
                        <RxAvatar size={30}/>
                          <a className="link link-hover">View Profile</a>
                        </div>
                        <div className="flex items-center gap-5">
                        <IoIosLogOut size={30}/>
                          <a className="link link-hover">Logout</a>
                        </div>
                      </div>
                    </ul>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
