import { authFetch } from "../../dashboard/api";

const apiUrl = import.meta.env.VITE_API_URL;
export const getMyProfileData = async (id) => {
  const res = await authFetch(`${apiUrl}/api/me?id=${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  console.log(res);
  return res.json();
};

export const _api_Validate_new_Phone = async (newPhone, userId) => {
  const res = await authFetch(`${apiUrl}/api/me`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: userId,
      phone: newPhone,
    }),
    // cache: "no-store",
  });
  return res.json();
};
