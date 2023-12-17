import verification from "../../assets/Auth/Verification.svg";
const Verification = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
      <div className="flex justify-center">
        <img
          className=" w-80"
          src={verification}
          alt="Your Company"
        />
        </div>
        <div>
          <h1 className="text-center pt-5">VERIFICATION</h1>
          <p className="text-center pt-2 text-sm">Enter the code sent to <span style={{ color: "#3d605d" }}> moam***@gmail.com</span></p>
        </div>
        <div></div>
        <div>
          <p className="text-center pt-2 text-sm text-stone-400">00:120 Sec</p>
          <p className="text-center pt-2 text-sm text-slate-400"> Don’t receive code ?  <span className="font-bold" style={{ color: "#3d605d" }}> Re-send</span></p>
        </div>
        <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="btn-3 py-2 px-4 rounded-xl w-full md:w-auto my-5 false"
              >
                Submit
              </button>
            </div>
      </div>
    </div>
  );
};

export default Verification;
