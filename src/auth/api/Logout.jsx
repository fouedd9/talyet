export const _api_logout = async () => {
  try {
    const request = await fetch("http://localhost:3000/api/auth/logout", {
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
