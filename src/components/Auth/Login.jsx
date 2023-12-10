import login from "../../assets/Auth/login.svg";
const Login = () => {
  return (
    <div className="shadow-lg mt-28">
      <div className="flex justify-center">
        <img src={login} alt="logo" />
      </div>
      <div className="text-center">
        <h1>PillMate</h1>
      </div>
    </div>
  );
};

export default Login;
