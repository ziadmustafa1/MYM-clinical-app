import { CiMail } from 'react-icons/ci';
import forget from '../../assets/Auth/forget.svg'
const ForgetPassword = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
<div className="flex justify-center">
        <img
          className=" w-80"
          src={forget}
          alt="Your Company"
        />
        </div>
        <h2 className="mt-6 text-center text-xl tracking-tight">
        Forget Password
        </h2>
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
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="btn-3 py-2 px-4 rounded-xl w-full md:w-auto my-5 false"
              >
                Login
              </button>
            </div>
            <div className=" text-neutral-400">
            remember your password ?   <a className="font-bold" style={{ color: "#224a46" }}> login </a>
          </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
