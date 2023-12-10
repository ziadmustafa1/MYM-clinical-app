import { UserCircleIcon } from '@heroicons/react/24/solid'
import './Login.css'
import { CiLocationOn, CiLock, CiMail, CiUser } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
const Register = () => {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">

        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3 justify-center">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>
            <div className="mt-4">
            <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none text-xl font-bold text-neutral-500">
        <CiUser />
        </div>
        <input type="text"
                  placeholder="Enter your name"
                  name="name" id="phone-input" aria-describedby="helper-text-explanation" className="w-full py-4 px-4 pl-10 focus:ring-cyan-400 bg-slate-50 rounded-lg " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
    </div>
            </div>
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
            <div className="mt-4">
            <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-nonetext-xl font-bold text-neutral-500">
        <FiPhone />
        </div>
        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="w-full py-4 px-4 pl-10 focus:ring-cyan-400 bg-slate-50 rounded-lg " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter your phone" required />
    </div>
            </div>
            <div className="mt-4">
            <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-nonetext-xl font-bold text-neutral-500">
        <CiLocationOn />
        </div>
        <input type="location" id="location" aria-describedby="helper-text-explanation" className="w-full py-4 px-4 pl-10 focus:ring-cyan-400 bg-slate-50 rounded-lg " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter your location" required />
    </div>
            </div>
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
                Register
              </button>
            </div>
            <div className=" text-neutral-400">
            already have an account ?   <a className="font-bold" style={{ color: "#224a46" }}> login </a>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
