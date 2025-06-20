export const storeRecentRead = async (newsId) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
        await fetch("https://newsportal-juir.onrender.com/api/recent-reads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ newsId })
        });
    } catch (error) {
        console.error("Error storing recent read:", error);
    }
};

export const getRecommendations = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("https://newsportal-juir.onrender.com/api/recommendations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;  // Return the recommended news articles
    } else {
        console.error("Failed to fetch recommendations");
        return [];
    }
};
