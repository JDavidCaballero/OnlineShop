export type getUserProps = {
  id: string;
  accessToken: string;
};

export type getUserResponse = {
  name: string;
  email: string;
  id: string;
  accessToken: string;
};

async function getUserInfo(
  props: getUserProps
): Promise<getUserResponse | Error> {
  try {
    const response = await fetch(`http://localhost:3000/api/user/${props.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to get user Info");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error("An error occurred try again later");
  }
}

export default getUserInfo;
