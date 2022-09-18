import React, { useState } from "react";
import GamesNav from "components/GamesNav";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Hamburger } from "./assets/hamburger.svg";
import { ReactComponent as Close } from "./assets/close-symbol.svg";

export default function NavBar() {
  const location = useLocation();
  const { pathname } = location;

  const [displayNav, setDisplayNav] = useState(true);
  const seeYaLaterNavigator = useNavigate();

  const afterWhileClickadile = (path) => {
    seeYaLaterNavigator(`${path}`);
    setDisplayNav(false);
  };

  const navItemStyles =
    "h-16 md:w-36 bg-blue-200 flex items-center justify-center border-2 border-red-200 uppercase text-center cursor-pointer";

  return (
    <div className="flex flex-col md:flex-row fixed bg-green-200 h-screen w-screen md:w-auto">
      <div
        className="h-16 w-full md:w-16 flex items-center py-4 pl-4 cursor-pointer"
        onClick={() => setDisplayNav(!displayNav)}
      >
        {displayNav ? (
          <Close height={25} className="ml-1" />
        ) : (
          <Hamburger height={25} />
        )}
      </div>
      {displayNav && (
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col">
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
              onClick={() => seeYaLaterNavigator("games")}
              className={navItemStyles}
            >
              games
            </div>
          </div>
          {pathname.includes("games") && (
            <div className="w-full flex justify-center ">
              <div className="flex flex-col md:w-36 w-3/4">
                <GamesNav setDisplayNav={setDisplayNav} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
