import logo from "../../assets/Auth/login.svg";
import "./Login.css";
import fes from "../../assets/Auth/fes.svg";
import go from "../../assets/Auth/go.svg";
import { CiLock, CiMail } from "react-icons/ci";
const Login4 = () => {
  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow-lg h-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-24 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          welcome to PillMate!
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
        <div className="mt-4">
            <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none text-xl font-bold text-neutral-500">
        <CiMail />
        </div>
        <input placeholder="Enter your email"
                  type="email"
                  name="email" id="phone-input" aria-describedby="helper-text-explanation" className="w-full py-4 px-4 pl-10 focus:ring-cyan-400 bg-slate-50 rounded-lg " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
    </div>
            </div>
          <div>
            <div className="flex items-center justify-between"></div>
            <div className="mt-4">
            <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-nonetext-xl font-bold text-neutral-500">
        <CiLock />
        </div>
        <input placeholder="Enter your password"
                  type="password"
                  name="password" id="password" aria-describedby="helper-text-explanation" className="w-full py-4 px-4 pl-10 focus:ring-cyan-400 bg-slate-50 rounded-lg " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
    </div>
            </div>
          </div>
          <div className="text-sm text-end">
            <a href="#" className="text-1">
              Forgot password?
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn-3 flex w-full justify-center p-3 rounded-xl"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-5 flex justify-center">
          <hr/>
          <div>or login with</div>
          <hr/>
        </div>
        <div className="mt-5">
          <div className="login-1 flex justify-centare items-center p-1">
            <img src={fes} alt="fest" className="mx-auto h-auto" />
            <div className="p-2 md:pr-16"> Continue with Facebook </div>
          </div>
          <div className="login-1 flex justify-centare items-center p-1 mt-5">
            <img src={go} alt="fest" className="mx-auto h-auto" />
            <div className="p-2 md:pr-16"> Continue with Google </div>
          </div>
          <div className="mt-5 text-neutral-400">
          have an account ?  <a className="font-bold" style={{ color: "#224a46" }}> register </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login4;
