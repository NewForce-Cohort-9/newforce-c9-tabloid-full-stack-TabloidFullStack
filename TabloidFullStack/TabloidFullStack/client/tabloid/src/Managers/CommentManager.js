const baseUrl = "https://localhost:5001/api/Comment";

export const getCommentsByPostId = (id) => {
  return fetch(`${baseUrl}?id=${id}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching comments:", error);
    });
};
