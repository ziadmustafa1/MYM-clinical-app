/* eslint-disable react/no-unknown-property */
import login from "../../assets/Auth/login.svg";
import DashboardSearch from "./DashboardSearch";
import not from "../../assets/notfidash.svg";
import { FiEdit } from "react-icons/fi";
const DashboardNav = () => {
  return (
    <div className="flex justify-between p-5">
      <div className="flex justify-between items-center">
        <img src={login} alt="logo" className="w-14 h-14" />
        <div className="pl-2">
          <h1 className="text font-bold text-lg"> PillMate </h1>
          <p className="text">Admin Board</p>
        </div>
      </div>
      <div>
        <h1 className="text font-bold text-lg"> Good Morning </h1>
        <p className="text"> A preview of your business </p>
      </div>
      <div className="flex justify-start">
        <DashboardSearch />
        <img src={not} alt="logo" className="w-8 h-8 mt-3" />
      </div>
      <div className="flex justify-between items-center text">
        <svg
          width="2"
          height="70"
          viewBox="0 0 2 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.75"
            y1="3.27835e-08"
            x2="0.749997"
            y2="78"
            stroke="#F5F5F5"
            stroke-opacity="0.62"
            stroke-width="1.5"
          />
        </svg>
        <div className="px-2">
          <FiEdit />
        </div>
        <h1>Edit </h1>
      </div>
    </div>
  );
};

export default DashboardNav;
