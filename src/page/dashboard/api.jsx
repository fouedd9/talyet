import React from "react";
import { _api_logout } from "../../auth/api/Logout";

// export const fetchUserData = async (state) => {
//   if (!state.accessToken)
//     return console.log("access Token invalide ou inexistant");
//   console.log(state);
//   const url = "http://localhost:3000/api/auth/profile";
//   try {
//     const response = await fetch(url, {
//       method: "GET", // Spécifie la méthode GET
//       headers: {
//         // L'en-tête crucial pour l'authentification
//         Authorization: `Bearer ${state.accessToken}`,
//         // L'en-tête Content-Type n'est pas strictement nécessaire pour un GET simple,
//         // mais bonne pratique si l'API est stricte.
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.status === 401) {
//       const res = await fetch("http://localhost:3000/api/auth/refresh", {
//         method: "POST",
//         credentials: "include",
//       });
//       if (!res.ok) {
//         localStorage.removeItem("accessToken");
//         return null;
//       }
//       const data = await res.json();
//       localStorage.setItem("accessToken", data.accessToken);
//       return data.accessToken;
//     }

//     // 1. Vérifier la réponse HTTP
//     if (!response.ok) {
//       // Lance une erreur pour les codes d'état 4xx ou 5xx
//       //   window.location.href = "/login";
//       throw new Error(
//         `Erreur HTTP: ${response.status} - Échec de l'authentification ou du serveur`
//       );
//     }

//     // 2. Traiter la réponse JSON
//     const data = await response.json();
//     console.log("Les données de l'utilisateur connecté sont:", data);
//     return data;
//   } catch (error) {
//     console.error("Problème lors de la récupération des utilisateurs:", error);
//     // Gérer l'erreur (ex: afficher un message à l'utilisateur)
//     throw error;
//   }
// };
// from here
// async function refreshToken() {
//   const res = await fetch("http://localhost:3000/api/auth/refresh", {
//     method: "POST",
//     credentials: "include", // 🔑 pour envoyer le cookie refreshToken
//   });

//   if (!res.ok) {
//     localStorage.removeItem("login"); // Nettoie le localStorage si refresh échoue
//     return null;
//   }

//   const data = await res.json();
//   console.log("Nouveau token obtenu:", data);
//   return data.accessToken; // c’est ce que ton back renvoie
// }

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
      const refreshRes = await fetch("http://localhost:3000/api/auth/refresh", {
        method: "POST",
        credentials: "include",
      });
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
  const res = await authFetch("http://localhost:3000/api/auth/dashboard");
  if (res && res.ok) {
    const users = await res.json();
    console.log(users);
    return users;
  } else {
    console.log("Erreur ou non autorisé");
  }
};
