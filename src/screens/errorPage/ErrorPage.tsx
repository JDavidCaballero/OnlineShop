import errorLogo from "../../assets/errorLogo.png";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={errorLogo} alt="Error Logo" className="w-20" />
      <h1 className="text-black">404</h1>
      <p className="text-black font-bold">Page not found</p>
    </div>
  );
};

export default ErrorPage;
