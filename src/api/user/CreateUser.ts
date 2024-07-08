export type userModel = {
  name: string;
  email: string;
  password: string;
};

export type userResponse = {
  message: string;
  user?: userModel;
};

async function postCreateUser(user: userModel): Promise<userResponse | Error> {
  try {
    const response = await fetch("http://localhost:3000/api/users/register", {
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

export default postCreateUser;
