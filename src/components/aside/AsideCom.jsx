import React, { useState, useEffect } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { DownOutlined } from "@ant-design/icons";
import { LuPlus } from "react-icons/lu";

import { RiWechatLine } from "react-icons/ri";
import { Dropdown, Space } from "antd";
import axios from "axios";

const items = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <LuPlus className="text-blue-500 text-xl" />
        Create group
      </a>
    ),
    key: "0",
  },
  {
    key: "2",
    label: "sub menu",
    children: [
      {
        key: "2-1",
        
        label: "username",
      },
      {
        key: "2-2",
        label: "password",
      },
    ],
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const btn = {};
const AsideCom = () => {
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   axios
  //     .get("https://nt-shopping-list.onrender.com/api/groups", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setGroups(res.data);
  //       console.log("Groups Data:", res.data);
  //     })
  //     .catch((err) => {
  //       setError("Failed to fetch groups.");
  //       console.error("Error:", err);
  //     });
  // }, []);

  const fetchProfile = () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      console.error("No token found in localStorage");
      setError("Authentication token is missing.");
      return;
    }
    axios
      .get("https://nt-shopping-list.onrender.com/api/groups", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGroups(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          console.error("Token invalid or expired. Redirecting to login...");
          localStorage.removeItem("token");
          window.location.href = "/login";
        } else {
          console.error("Error Response:", err.response || err.message);
          setError("Failed to fetch groups.");
        }
      });
  };

  return (
    <div className=" p-2 h-screen">
      <div className="max-w-[520px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 w-60">
            <button
              onClick={fetchProfile}
              className="bg-[#f8f9fa] flex items-center gap-2 py-1 w-full px-2 rounded-md"
            >
              <IoPersonSharp className="text-blue-500 text-xl" />
              <h3>Profile</h3>
            </button>
          </div>
          <div>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="bg-[#f8f9fa] flex items-center gap-2 py-1 w-full px-2 rounded-md">
                  <RiWechatLine className="text-blue-500 text-xl" />
                  Groups
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideCom;
