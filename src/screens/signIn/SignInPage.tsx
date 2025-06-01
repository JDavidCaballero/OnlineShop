import React, { useState } from "react"
import amazonLogo from "../../assets/amazon_logo.png"
import postCreateUser, { userModel } from "../../api/user/CreateUser"
import { useMutation } from "react-query"
import RegistrationForm from "./RegisterForm"
import LoginForm from "./LoginForm"
import loginUser, { loginUserModel } from "../../api/user/LoginUser"
import { useDispatch } from "react-redux"
import { userActions } from "../../store/userSlice"
import { useNavigate } from "react-router-dom"
import loader from "../../components/loader/Loader"

const SignInPage: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("login")
  //register ep
  const { mutate, isLoading: loadingRegister } = useMutation(postCreateUser, {
    onSuccess: (data) => {
      alert(data.message + " you can now login with your credentials.")
    },
    onError: () => {
      alert("An error occurred while creating the user. Please try again.")
    },
  })

  const handleRegister = (registerValues: userModel) => {
    mutate(registerValues)
  }
  //sign in ep
  const { mutate: signInMutate, isLoading: loadingSignIn } = useMutation(
    loginUser,
    {
      onSuccess: (data) => {
        if (!(data instanceof Error)) {
          alert(data.user.name + " has been authenticated successfully.")
          dispatch(userActions.loginUser(data))
          navigate("/")
        } else {
          alert("User not found. Please try again.")
        }
      },
      onError: () => {
        alert(
          "An error occurred while authenticate the user. Please try again."
        )
      },
    }
  )

  const handleSignIn = (signInValues: loginUserModel) => {
    signInMutate(signInValues)
  }

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
  )
}

export default SignInPage
