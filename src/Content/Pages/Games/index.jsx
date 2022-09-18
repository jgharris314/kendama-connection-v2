import React from "react";
import NavBar from "./components/NavBar";
import Content from "./Content";

export default function Games() {
  return (
    <div className="flex flex-col md:flex-row">
      <NavBar />
      <Content />
    </div>
  );
}
