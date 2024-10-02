import React from "react";
import { Routes, Route } from "react-router-dom";
import { SidePanel } from "./SidePanel";

function RouteWrapper() {
  return (
    <Routes>
      <Route path="/" element={<SidePanel />} />
    </Routes>
  );
}

export default RouteWrapper;
