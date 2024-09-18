const baseUrl = 'https://localhost:5001/api';

export const getAllApprovedPosts = () => {
    return fetch(`${baseUrl}/Post`).then(res => res.json());
}

export const getAllApprovedUserPosts = (id) => {
    return fetch(`${baseUrl}/post/getallbyuserid/${id}`).then(res => res.json())
}