import login from "../../assets/Auth/logien3.svg";
import login2 from "../../assets/Auth/f1login.svg";
import "./Login.css";
const Login3 = () => {
  return (
    <div className="shadow-lg mt-24">
      <div>
        <div className="flex justify-center">
          <img src={login} alt="logo" />
        </div>
        <div className="flex justify-center">
          <img src={login2} alt="logo" />
        </div>
        <div className="text-center">
          <h1 className="w-1/2 mx-auto">
            Create Your Profile: To get started with PillMate
          </h1>
        </div>
        <div className="p-4 grid grid-cols-1">
          <div className="flex justify-center">
            <button className="btn py-2 px-4 rounded-xl w-full md:w-2.3">
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <button className="btn-2 py-2 px-4 rounded-xl w-full md:w-auto my-5">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login3;
