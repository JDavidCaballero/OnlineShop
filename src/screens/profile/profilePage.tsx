import { useQuery, useQueryClient } from "react-query";
import { userLoginResponse } from "../../api/user/LoginUser";
import getUserInfo from "../../api/user/getUserInfo";
import loader from "../../components/loader/Loader";
import close from "../../assets/close.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = location.state as { user: userLoginResponse };
  const { isLoading, data } = useQuery(
    "getUserInfo",
    () =>
      getUserInfo({
        id: user.user.id,
        accessToken: user.user.accessToken,
      }),
    { refetchOnWindowFocus: false }
  );
  const handleLogOut = () => {
    dispatch(userActions.logoutUser());
    queryClient.clear();
    navigate("/", { replace: true });
  };
  return (
    <>
      {isLoading ? (
        loader
      ) : (
        <div className="flex flex-col items-center bg-gray-200 rounded p-20 w-[500px] mx-auto">
          <button
            className="bg-transparent self-end border-none outline-none"
            title="Close"
            onClick={() => navigate(-1)}
          >
            <img src={close} alt="Close" className="w-[30px]" />
          </button>

          <h1 className="text-black mb-[70px]">Profile Page</h1>
          <div className="w-full flex justify-center mb-[70px]">
            <table>
              <tbody>
                <tr>
                  <td className="text-black font-bold pr-4 text-left">
                    User name:
                  </td>
                  <td className="text-black text-left">{data?.name}</td>
                </tr>
                {!(data instanceof Error) && (
                  <tr>
                    <td className="text-black font-bold pr-4 text-left">
                      Email:
                    </td>
                    <td className="text-black text-left">{data?.email}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <button className="bg-red-500 text-white" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
