import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Components/Header/header";

export default function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
