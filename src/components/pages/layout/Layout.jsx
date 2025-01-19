import React from "react";
import { Outlet } from "react-router-dom";
import HeaderCom from "../../header/HeaderCom";
import Aside from "../aside/Aside";
import "./Layout.css";
import HeroCom from "../../hero/HeroCom";

const Layout = () => {
  return (
    <div>
      <HeaderCom />
      <main className="layout-main">
        <Aside />
        <Outlet />
        <HeroCom />
      </main>
    </div>
  );
};

export default Layout;
