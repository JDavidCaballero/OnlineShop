import { customFetch } from "../utils/customFetch"

export type loginUserModel = {
  email: string
  password: string
}

export type userInfoResponse = {
  name: string
  email: string
  id: string
  accessToken: string
  refreshToken: string
}

export type userLoginResponse = {
  user: userInfoResponse
}

async function loginUser(
  user: loginUserModel
): Promise<userLoginResponse | Error> {
  try {
    const response = await customFetch("/users/login", {
      method: "POST",
      body: JSON.stringify(user),
    })

    if (!response.ok) {
      throw new Error("Failed to login user")
    }

    const data = await response.json()
    return data
  } catch (error) {
    return new Error("An error occurred, please try again later")
  }
}
export default loginUser
