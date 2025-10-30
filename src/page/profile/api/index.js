import { authFetch } from "../../dashboard/api";

const apiUrl = import.meta.env.VITE_API_URL;
export const getMyProfileData = async (id) => {
  const res = await authFetch(`${apiUrl}/api/me?id=${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
  console.log(res);
  return res.json();
};
