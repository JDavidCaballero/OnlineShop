import { createSlice } from "@reduxjs/toolkit";
import { userLoginResponse } from "../api/user/LoginUser";

const userInitialState: userLoginResponse = {
  user: { email: "", name: "", id: "", accessToken: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
    },
    logoutUser: (state) => {
      state.user = { email: "", name: "", id: "", accessToken: "" };
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
