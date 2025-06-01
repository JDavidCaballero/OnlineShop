import { createSlice } from "@reduxjs/toolkit"

export interface UserState {
  email: string
  name: string
  id: string
  accessToken: string
  refreshToken: string
  isLoggedIn: boolean
}

const userInitialState: UserState = {
  email: "",
  name: "",
  id: "",
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (state, action) => {
      const { id, name, email, accessToken, refreshToken } = action.payload.user
      state.id = id
      state.name = name
      state.email = email
      state.accessToken = accessToken
      state.refreshToken = refreshToken
      state.isLoggedIn = true
    },
    logoutUser: (state) => {
      state.id = ""
      state.name = ""
      state.email = ""
      state.accessToken = ""
      state.refreshToken = ""
      state.isLoggedIn = false
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
  },
})

export const userActions = userSlice.actions
export default userSlice.reducer
