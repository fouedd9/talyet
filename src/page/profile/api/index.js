import { authFetch } from "../../dashboard/api";

const apiUrl = import.meta.env.VITE_API_URL;
export const getMyProfileData = async (id) => {
  const res = await authFetch(`${apiUrl}/api/me?id=${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

export const _api_Validate_new_Phone = async (newPhone, userId) => {
  const res = await authFetch(`${apiUrl}/api/me/newphone`, {
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
export const _api_Validate_new_bio = async (newBio, userId) => {
  console.log({ newBio, userId });
  const res = await authFetch(`${apiUrl}/api/me/newbio`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: userId,
      newBio: newBio,
    }),
    // cache: "no-store",
  });
  return res.json();
};

export const _api_getAllRoles = async () => {
  const res = await authFetch(`${apiUrl}/api/me/roles`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};
export const _api_changeMyRole = async (newRole, userId) => {
  const request = await authFetch(`${apiUrl}/api/me/roles/change_user_role`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      newRole: newRole.id,
      userId: userId,
    }),
  });
  request.json();
  return console.log(newRole, userId);
};
