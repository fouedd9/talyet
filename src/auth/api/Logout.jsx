export const _api_logout = async () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  try {
    const request = await fetch(`${apiUrl}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    // const response = request.json();
    // console.log({ request: request.ok });
    if (request.ok) {
      localStorage.removeItem("login");
      window.location.href = "/login";
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
