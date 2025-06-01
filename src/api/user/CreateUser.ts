import { customFetch } from "../utils/customFetch"

export type userModel = {
  name: string
  email: string
  password: string
}

export type userResponse = {
  message: string
  user?: userModel
}

async function postCreateUser(user: userModel): Promise<userResponse | Error> {
  try {
    const response = await customFetch("/users/register", {
      method: "POST",
      body: JSON.stringify(user),
    })

    if (!response.ok) {
      throw new Error("Failed to create user")
    }
    const data = await response.json()
    return data
  } catch (error) {
    return new Error("An error occurred, please try again later")
  }
}

export default postCreateUser
