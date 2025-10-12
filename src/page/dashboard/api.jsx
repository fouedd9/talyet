import React from "react";

import { _api_logout } from "../../auth/api/Logout";
// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000" ;
const apiUrl = import.meta.env.VITE_API_URL;
export const authFetch = async (url, options = {}) => {
  let storage = JSON.parse(localStorage.getItem("login"));
  let accessToken = storage?.accessToken;

  let headers = options.headers || {};
  if (accessToken) {
    headers = { ...headers, Authorization: `Bearer ${accessToken}` };
  }

  // Première tentative
  let res = await fetch(url, { ...options, headers, credentials: "include" });

  if (res.status === 401) {
    try {
      // Access token expiré → on tente refresh
      const refreshRes = await fetch(`${apiUrl}/api/auth/refresh`, {
        method: "POST",
        credentials: "include",
      });
      // const refreshRes = await fetch("http://localhost:3000/api/auth/refresh", {
      //   method: "POST",
      //   credentials: "include",
      // });
      const refreshData = await refreshRes.json();
      console.log("Nouveau token obtenu:", refreshData);

      // if (!refreshRes.ok || !refreshData.accessToken) {
      //   // Refresh échoué → redirection login
      //   window.location.href = "/login";
      //   return;
      // }
      // refresh échoué → on force logout direct
      if (!refreshRes.ok) {
        _api_logout();
        return res;
      }
      // pas de nouveau token → logout
      if (!refreshData?.accessToken) {
        _api_logout();
        return res;
      }

      // Met à jour le localStorage et retry avec le nouveau token
      storage = { ...storage, accessToken: refreshData.accessToken };
      localStorage.setItem("login", JSON.stringify(storage));
      headers = {
        ...headers,
        Authorization: `Bearer ${refreshData.accessToken}`,
      };
      res = await fetch(url, { ...options, headers, credentials: "include" });
    } catch (error) {
      console.log("error lors de la refresh token:", error);
      localStorage.removeItem("login");
      window.location.href = "/login";
    }
  }

  return res;
};

export const fetchUserData = async () => {
  // const res = await authFetch("http://localhost:3000/api/auth/dashboard");
  const res = await authFetch(`${apiUrl}/api/auth/dashboard`);
  if (res && res.ok) {
    const users = await res.json();
    console.log(users);
    return users;
  } else {
    console.log("Erreur ou non autorisé");
  }
};
