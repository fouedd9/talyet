import { useAuthStore } from "../../store/useAuthStore";

export const Auth = async (data) => {
  const { password } = data;
  //   console.log({ email, password });
  const email = data.email.toLowerCase().trim();
  const apiUrl = import.meta.env.VITE_API_URL;

  const res = await fetch(`${apiUrl}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include", // 🔑 pour accepter les cookies
  });
  const result = await res.json();

  if (result.success) {
    await useAuthStore.getState().setUser(result?.user); // ✅ met à jour le store et localStorage
  }
  if (!result.success) {
    throw result; // va déclencher onError dans React Query
  }
  return result;
};
