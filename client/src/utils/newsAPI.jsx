import API_URL from "../config/api";

export const storeRecentRead = async (newsId) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    await fetch(`${API_URL}/api/recent-reads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ newsId }),
    });
  } catch (error) {
    console.error("Error storing recent read:", error);
  }
};

export const getRecommendations = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/api/recommendations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data.data; // Return the recommended news articles
  } else {
    console.error("Failed to fetch recommendations");
    return [];
  }
};
