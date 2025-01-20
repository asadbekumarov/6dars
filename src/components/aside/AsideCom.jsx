import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { DownOutlined } from "@ant-design/icons";
import { LuPlus } from "react-icons/lu";
import { RiWechatLine } from "react-icons/ri";
import { Dropdown, Space } from "antd";

const AsideCom = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    groupName: "",
    password: "",
    confirmPassword: "",
  });
  const [items, setItems] = useState([
    {
      label: (
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 text-blue-500"
        >
          <LuPlus className="text-xl" />
          Create group
        </button>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          xondamir's chat
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          xondamirxonn
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          eeee{" "}
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          best{" "}
        </a>
      ),
      key: "1",
    },
  ]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateGroup = () => {
    if (formData.groupName && formData.password) {
      const newItem = {
        label: formData.groupName,
        key: `${items.length + 1}`,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setFormData({ groupName: "", password: "" });
      setShowForm(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ groupName: "", password: "" });
  };

  return (
    <div className="p-2 h-screen">
      <div className="max-w-[520px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 w-60">
            <button className="bg-[#f8f9fa] flex items-center gap-2 py-1 w-full px-2 rounded-md">
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
              placement="bottomRight" // o'ng tarafda chiqarish
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="bg-[#f8f9fa] flex items-center gap-2 py-1 w-full px-2 rounded-md">
                  <RiWechatLine className="text-blue-500 text-xl" />
                  Groups
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        {showForm && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-bold mb-2">Create Group</h3>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="groupName"
                placeholder="Group Name"
                className="border p-2 rounded-md outline-none"
                value={formData.groupName}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border p-2 rounded-md outline-none"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="flex gap-2">
                <button
                  onClick={handleCreateGroup}
                  className="bg-green-500 text-white py-1 px-4 rounded-md"
                >
                  Create
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-red-500 text-white py-1 px-4 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AsideCom;
