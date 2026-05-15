import { Link, Outlet } from "react-router";

export const PageLayout = () => {
  return (
    <div className="flex flex-col">
      <header className="h-14 overflow-hidden flex items-center justify-between px-4">
        <span>Yash Kamble</span>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};
