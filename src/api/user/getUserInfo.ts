import { customFetch } from "../utils/customFetch"

export type getUserProps = {
  id: string
  accessToken: string
}

export type getUserResponse = {
  name: string
  email: string
  id: string
  accessToken: string
}

async function getUserInfo(): Promise<getUserResponse | Error> {
  try {
    const response = await customFetch("/user/info", {
      method: "GET",
    })
    if (!response.ok) {
      throw new Error("Failed to get user Info")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return new Error(
      "An error occurred retrieving user information, please try again later"
    )
  }
}

export default getUserInfo
