import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  children?: JSX.Element;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const activeLink = "bg-blue-200  mb-1 text-gray-500";
  return (
    <div className="wrapper h-screen w-screen flex flex-col overflow-hidden">
      <div className="header h-14 bg-blue-400 flex items-center px-3 font-semibold text-2xl text-white font-dancing shadow-inner">
        Masak apa
      </div>
      <div className="body overflow-hidden flex-1 flex bg-gray-200">
        <div className="sidebar w-60 flex-none shadow-2xl bg-gray-100">
          <ul className="my-12 px-2 font-dancing text-lg font-semibold">
            <li
              className={`py-1 px-3 hover:opacity-60  ${
                location.pathname === "/" || location.pathname === "/detail"
                  ? activeLink
                  : null
              }`}
            >
              <Link to="/">Beranda</Link>
            </li>
            <li
              className={`py-1 px-3 hover:opacity-60  ${
                location.pathname === "/favorite" ? activeLink : null
              }`}
            >
              <Link to="/favorite">Favoritku</Link>
            </li>
          </ul>
        </div>
        {children}
      </div>
      <div className="footer h-8 flex justify-center items-center font-dancing bg-blue-400 text-white">
        Made with love
      </div>
    </div>
  );
};

export default MainLayout;
