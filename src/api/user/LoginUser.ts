export type loginUserModel = {
  email: string;
  password: string;
};

export type userInfoResponse = {
  name: string;
  email: string;
  id: string;
  accessToken: string;
};

export type userLoginResponse = {
  user: userInfoResponse;
};

async function loginUser(
  user: loginUserModel
): Promise<userLoginResponse | Error> {
  try {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error("An error occurred try again later");
  }
}

export default loginUser;
