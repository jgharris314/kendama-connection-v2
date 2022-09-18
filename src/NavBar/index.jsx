import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const seeYaLaterNavigator = useNavigate();

  const afterWhileClickadile = (path) => {
    seeYaLaterNavigator(`/${path}`);
  };

  const navItemStyles =
    "h-16 w-24 md:w-auto bg-blue-200 flex items-center justify-center border-y-2 border-red-200 uppercase";

  return (
    <div className="flex md:flex-col md:w-1/6 max-w-sm bg-red-50 justify-between md:justify-start">
      <div
        onClick={() => afterWhileClickadile("home")}
        className={navItemStyles}
      >
        home
      </div>
      <div
        onClick={() => afterWhileClickadile("events")}
        className={navItemStyles}
      >
        events
      </div>
      <div
        onClick={() => afterWhileClickadile("games")}
        className={navItemStyles}
      >
        games
      </div>
    </div>
  );
}
