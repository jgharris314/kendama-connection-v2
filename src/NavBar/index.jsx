export default function NavBar() {
  const navItemStyles =
    "h-16 bg-blue-200 flex items-center justify-center border-y-2 border-red-200";
  return (
    <div className="flex md:flex-col md:w-1/6 max-w-sm bg-red-50">
      <div
        onClick={() => (window.location.href = "/home")}
        className={navItemStyles}
      >
        HOME
      </div>
      <div
        onClick={() => (window.location.href = "/events")}
        className={navItemStyles}
      >
        EVENTS
      </div>
      <div
        onClick={() => (window.location.href = "/games")}
        className={navItemStyles}
      >
        GAMES
      </div>
    </div>
  );
}
