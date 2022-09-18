import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const seeYaLaterNavigator = useNavigate();

  const afterWhileClickadile = (path) => {
    seeYaLaterNavigator(`${path}`);
  };

  const navItemStyles =
    "h-16 w-20 md:w-auto bg-blue-200 flex items-center justify-center border-2 border-red-200 uppercase text-center";

  return (
    <div className="flex md:flex-col w-screen md:w-1/6 lg:w-1/8 max-w-sm bg-red-50 justify-between md:justify-start">
      <div
        onClick={() => afterWhileClickadile("open")}
        className={navItemStyles}
      >
        open
      </div>
      <div
        onClick={() => afterWhileClickadile("ken")}
        className={navItemStyles}
      >
        ken
      </div>
      <div
        onClick={() => afterWhileClickadile("freestyle")}
        className={`hidden md:flex ${navItemStyles}`}
      >
        freestyle
      </div>
      <div
        onClick={() => afterWhileClickadile("freestyle")}
        className={`md:hidden flex ${navItemStyles}`}
      >
        free
        <br />
        style
      </div>
      <div
        onClick={() => afterWhileClickadile("speedladder")}
        className={navItemStyles}
      >
        speed
        <br />
        ladder
      </div>
    </div>
  );
}
