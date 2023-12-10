import { CiLock } from "react-icons/ci";
import npas from "../../assets/Auth/npas.svg";
const NewPassword = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <div className="flex justify-center">
          <img className=" w-80" src={npas} alt="Your Company" />
        </div>
        <div>
          <h1 className="text-center pt-5"> New password </h1>
        </div>
        <div>
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
            <div className="mt-4">
            <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-nonetext-xl font-bold text-neutral-500">
        <CiLock />
        </div>
        <input placeholder="Confirm your password"
                  type="password"
                  name="password_confirmation" id="confirmation" aria-describedby="helper-text-explanation" className="w-full py-4 px-4 pl-10 focus:ring-cyan-400 bg-slate-50 rounded-lg " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
    </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="btn-3 py-2 px-4 rounded-xl w-full md:w-auto my-5 false"
              >
                Reset
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
