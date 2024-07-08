import React, { useState } from "react";
import amazonLogo from "../../assets/amazon_logo.png";
import postCreateUser, {
  userModel,
  userResponse,
} from "../../api/user/CreateUser";
import { useMutation } from "react-query";
import RegistrationForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import loginUser, { loginUserModel } from "../../api/user/LoginUser";

const SignInPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("login");

  const { mutate, isLoading: loadingRegister } = useMutation(postCreateUser, {
    onSuccess: (data) => {
      alert(data.message);
    },
    onError: () => {
      alert("An error occurred while creating the user. Please try again.");
    },
  });

  const handleRegister = (registerValues: userModel) => {
    mutate(registerValues);
  };

  const { mutate: signInMutate, isLoading: loadingSignIn } = useMutation(
    loginUser,
    {
      onSuccess: (data) => {
        if (!(data instanceof Error)) {
          alert(data.user.name + " has been authenticated successfully.");
        } else {
          // Handle the error case
          alert("User not found. Please try again.");
        }
      },
      onError: () => {
        alert(
          "An error occurred while authenticate the user. Please try again."
        );
      },
    }
  );

  const handleSignIn = (signInValues: loginUserModel) => {
    signInMutate(signInValues);
  };

  const loader = (
    <div className="mt-20">
      <svg
        aria-hidden="true"
        className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  );

  return (
    <div className="signInContainer rounded bg-yellow-400 h-[680px] w-[500px] flex-col p-5 shadow-2xl">
      <img
        src={amazonLogo}
        alt="Amazon Logo"
        className="w-[150px] bg-white rounded"
      />
      <div className="flex justify-start space-x-4 mt-5">
        <div>
          <button
            className={`py-2 px-4 ${
              activeTab === "login"
                ? "bg-transparent font-bold text-white"
                : "bg-transparent text-black"
            } border-none outline-none`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          {activeTab === "login" && (
            <div className="border-b-4 border-white mt-1"></div>
          )}
        </div>
        <div>
          <button
            className={`py-2 px-4 ${
              activeTab === "register"
                ? "bg-transparent font-bold text-white"
                : "bg-transparent text-black"
            } border-none outline-none`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
          {activeTab === "register" && (
            <div className="border-b-4 border-white mt-1"></div>
          )}
        </div>
      </div>
      {activeTab === "login" ? (
        <div>
          <h2 className="text-4xl text-white font-bold text-start mt-[20px]">
            Sign In
          </h2>
          <h1 className="text-lg text-black justify-start mt-5 mb-[25px] text-start">
            Authenthicate with your user to get the best experience to the
            online shop!
          </h1>

          <div>
            {loadingSignIn ? loader : <LoginForm onSubmit={handleSignIn} />}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl text-white font-bold text-start mt-[20px]">
            Register
          </h2>
          <h1 className="text-lg text-black justify-start mt-5 mb-[10px] text-start">
            Create an account to get the best experience to the online shop!
          </h1>

          <div>
            {loadingRegister ? (
              loader
            ) : (
              <RegistrationForm onSubmit={handleRegister} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
