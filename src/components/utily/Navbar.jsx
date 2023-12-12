import { CiLocationOn } from "react-icons/ci";
import Avatar from "../../assets/Avatar.svg";
import notif from "../../assets/notif.svg";
const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex justify-between">
        <img src={Avatar} alt="logo" />
        <div className="p-4">
          <h1> welcome ,asmaa. </h1>
          <div className="flex justify-start items-center text-gray-400">
            <div className="text-xl pr-1">
          <CiLocationOn />
          </div>
            <p>Mansoura</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <img src={notif} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
