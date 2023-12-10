import login from "../../assets/Auth/login2.svg";
import login2 from "../../assets/Auth/f1login.svg";
export const Login2 = () => {
  return (
    <div className="shadow-lg mt-28">
      <div>
        <div className="flex justify-center">
          <img src={login} alt="logo" />
        </div>
        <div className="flex justify-center">
          <img src={login2} alt="logo" />
        </div>
        <div className="text-center">
          <h1 className="w-1/2 mx-auto">
            you can easily order your medications online and have them delivered
            right to your doorstep.
          </h1>
        </div>
        <div className="p-4">
          <button className="py-2 px-4 rounded-xl w-full md:w-auto" style={{ backgroundColor: "#8BC4B5" }}>
          Next
          </button>
        </div>
      </div>
    </div>
  );
};
