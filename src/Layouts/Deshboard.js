import React from "react";
import { Route, Routes } from "react-router-dom";
import MainMenu from "./MainMenu/MainMenu";
import { About, ServicesPage } from "../Pages";

export default function Deshboard() {
  return (
    <div>
      <div>
        <MainMenu />
      </div>
      <Routes>
        <Route exect path="/" component={MainMenu} />
        
      </Routes>
    </div>
  );
}
