import { store } from "../../store"
import { userActions } from "../../store/userSlice"

const BASE_URL = import.meta.env.VITE_API_URL

export async function customFetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> {
  const state = store.getState()
  const accessToken = state.user.accessToken
  const refreshToken = state.user.refreshToken

  const authHeaders = {
    ...(init?.headers || {}),
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  }

  const response = await fetch(`${BASE_URL}${input}`, {
    ...init,
    headers: authHeaders,
  })

  if (response.status === 401 && refreshToken) {
    const newAccessToken = await refreshAccessToken(refreshToken)

    if (newAccessToken) {
      store.dispatch(userActions.updateAccessToken(newAccessToken))

      const retryResponse = await fetch(`${BASE_URL}${input}`, {
        ...init,
        headers: {
          ...authHeaders,
          Authorization: `Bearer ${newAccessToken}`,
        },
      })

      return retryResponse
    } else {
      store.dispatch(userActions.logoutUser())
      throw new Error("Session expired, please log in again.")
    }
  }

  return response
}

async function refreshAccessToken(
  refreshToken: string
): Promise<string | null> {
  try {
    const response = await fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    })

    if (!response.ok) return null

    const data = await response.json()
    return data.accessToken
  } catch (error) {
    return null
  }
}
