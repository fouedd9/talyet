export const Auth = async (data) => {
  const { email, password } = data;
  //   console.log({ email, password });

  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include", // 🔑 pour accepter les cookies
  });
  const result = await res.json();
  console.log({ result });
  if (!result.success) {
    throw result; // va déclencher onError dans React Query
  }
  return result;
};
