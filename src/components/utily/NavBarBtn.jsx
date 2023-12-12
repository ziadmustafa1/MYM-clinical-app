import "./nav.css";
import cart from "../../assets/cart.svg";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineAccountCircle } from "react-icons/md";
const NavBarBtn = () => {
  return (
    <div className="sticky bottom-0 navbar-btn z-50 md:px-8 text-center px-5">
      <div className="flex justify-between items-center">
        <button>
          <div className="active p-2 text-2xl text-emerald-950">
            <BiHomeAlt2 />
          </div>
          <p className=" text-emerald-950">Home</p>
        </button>
        <button>
          <div className="text-2xl text-emerald-950 pl-3">
          <MdFavoriteBorder />
          </div>
          <p className=" text-emerald-950">favorites</p>
        </button>
        <button>
          <div className="text-2xl text-emerald-950">
            <img src={cart} />
          </div>
          <p>cart</p>
        </button>
        <button>
          <div className="px-4 text-2xl text-emerald-950">
          <MdOutlineAccountCircle />
          </div>
          <p>account</p>
        </button>
      </div>
    </div>
  );
};

export default NavBarBtn;
