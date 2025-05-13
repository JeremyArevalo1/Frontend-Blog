import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3000/blogdeaprendizaje/v1",
    timeout: 5000,
    headers: {"cache-Control": "no-cache, no-store, must-revalidate"}
});

export const getPublications = async () => {
    try {
        const response = await apiClient.get("/publications/");
        return response.data;
    } catch (error) {
        return {
            error: true,
            message: error.response?.data?.msg || "Error al obtener publicaciones",
        };
    }
};