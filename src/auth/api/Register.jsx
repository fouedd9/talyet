export const _api_Register = async (data) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  // 1. ATTENDRE la réponse de l'appel fetch
  const response = await fetch(`${apiUrl}/api/auth/register`, {
    // ^^^ Correction : 'registessr' remplacé par 'register'
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // 2. Vérifier si la réponse HTTP est un succès (statut 200-299)
  if (!response.ok) {
    // Si la réponse n'est pas OK, on extrait le corps pour l'erreur
    const errorData = await response.json();
    // Et on lance une erreur pour la propager à `useMutation` (dans onError)
    console.log(errorData);
    throw new Error(errorData.status, "Failed");
  }

  // 3. ATTENDRE la conversion du corps en JSON et le retourner.
  return response.json();
};
