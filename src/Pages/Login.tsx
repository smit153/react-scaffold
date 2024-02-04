import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto bg-gray-900">
        <LoginForm/>
      </div>
    </>
  );
};

export default Login;
