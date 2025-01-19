import React from "react";
import Logo from "../../assets/img/logo.png";
import { GoPlus } from "react-icons/go";
import { FiRefreshCw } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const HeaderCom = () => {
  const handleRedirect = () => {
    window.location.href = "/login";
  };
  return (
    <div>
      <div className="max-w-[1920px] m-auto px-3 ">
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-2 items-center">
            <img className="w-20" src={Logo} alt="Logo" />
            <button className="bg-[#0d6efd] py-1 px-4 rounded-2xl text-white flex items-center gap-2">
              <GoPlus />
              New
            </button>
          </div>
          <input
            className="w-[800px] p-2 outline-none border"
            placeholder="Search group and join..."
            type="text"
          />
          <div className="flex gap-3 items-center">
            <FiRefreshCw />
            <FaRegBell />
            <button
              className="flex gap-1 items-center"
              onClick={handleRedirect}
            >
              <IoSettingsSharp />
              <IoMdArrowDropdown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCom;
