import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Navbar from "../components/Navbar";
import ToastUI from "../components/Toast";
import {GET_DATA} from "../resolvers/data";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  useEffect(()=>{
    if(!token){
      navigate("/login");
    }
  },[navigate,token])

  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { token },
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold">Home</h1>
        <p>Welcome to your home page.</p>
        {loading?<p>Loading...</p>:<p>{data?.getData?.protectedData}</p>}
        {error && <ToastUI openToast={true} message={error.message} success={false} />}
      </div>
    </>
  );
};

export default Home;
