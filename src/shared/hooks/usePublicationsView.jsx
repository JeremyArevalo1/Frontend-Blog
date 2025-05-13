import { useState, useEffect } from "react";
import { getPublications } from "../../services";

export const usePublications = (initialFilters = {}) => {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState(initialFilters);

    const fetchPublications = async (currentFilters = filters) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await getPublications(currentFilters);
            
            if (response.success) {
                setPublications(response.publications);
            } else {
                setError(response.msg || "Error al obtener publicaciones");
            }
        } catch (err) {
            setError("Error de conexión al servidor");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPublications();
    }, [filters]);

    return {
        publications,
        loading,
        error,
        setFilters,
        fetchPublications
    };
};