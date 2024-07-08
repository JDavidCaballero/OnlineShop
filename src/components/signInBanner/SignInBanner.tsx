import React from "react";
import { useNavigate } from "react-router-dom";

const SignInBanner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="box-border flex h-[52] w-[550] bg-gray-200 rounded p-4 border-4">
      <div
        className={
          "left-section flex flex-row items-center justify-center w-full"
        }
      >
        <div className="flex flex-col items-start ">
          <h1 className="text-black text-center w-100 h-15">
            We Deliver to Your Doorstep
          </h1>
          <h2 className="text-black text-left w-80 [h-50px] overflow-hidden overflow-ellipsis">
            Sign in for the best experience
          </h2>
          <button
            onClick={() => navigate("/SignIn")}
            className="mt-4 bg-black-300 hover:bg-yellow-400 text-white font-bold rounded w-full"
          >
            Sign in
          </button>
        </div>
      </div>
      <div className="right-section flex items-center ">
        <img
          src="https://img.baba-blog.com/2024/05/Young-business-entrepreneur-sealing-a-box-with-tape.-Preparing-for-shipping-Packing-online-selling-e-commerce-concept.jpg?x-oss-process=style%2Ffull"
          alt="Box logoo"
          className="object-contain w-[800px] h-[200px] rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default SignInBanner;
