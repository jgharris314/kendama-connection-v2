import React from "react";
import { useNavigate } from "react-router-dom";

export default function GamesNav({ setDisplayNav }) {
  const seeYaLaterNavigator = useNavigate();

  const afterWhileClickadile = (path) => {
    seeYaLaterNavigator(`games/${path}`);
    setDisplayNav(false);
  };
  const navItemStyles =
    "h-16 w-full bg-blue-200 flex items-center justify-center border-2 border-red-200 uppercase text-center cursor-pointer";

  return (
    <div className="flex flex-col w-full bg-red-50 items-center">
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
        className={navItemStyles}
      >
        freestyle
      </div>

      <div
        onClick={() => afterWhileClickadile("speedladder")}
        className={navItemStyles}
      >
        speed ladder
      </div>
    </div>
  );
}
