import React from "react";
import { usePublications } from "../../shared/hooks/usePublicationsView";
import { CommentForm } from "../comment/CommentForm";

export const ViewTaller = ({ courseName }) => {
    const { publications, loading, error } = usePublications({ courseName });

    if (loading) {
        return <div className="loading-tallerView">Cargando publicaciones...</div>;
    }

    if (error) {
        return <div className="error-tallerView">Error: {error}</div>;
    }

    return (
        <div className="container-tallerView">
            <h1 className="text-tallerView text-blue-600">Taller</h1>
            
            {publications.length === 0 ? (
                <p className="no-pubs-tallerView">Aun no se suben publicaciones</p>
            ) : (
                <div className="container-publications-tallerView">
                    {publications.map((publication) => (
                        <div 
                            key={publication._id} 
                            className="pub-card-tallerView"
                        >
                            <h2 className="pub-title-tallerView">{publication.title}</h2>
                            <p className="pub-desc-tallerView">{publication.descriptionoftheactivity}</p>
                            <CommentForm publicationId={publication._id}/>
                            <div className="pub-dates-tallerView">
                                <span>
                                    Creado: {new Date(publication.creationDate).toLocaleDateString()}
                                </span>
                            </div>
                            {publication.comments && publication.comments.length > 0 && (
                                <div className="comments-section-tallerView">
                                    <h3 className="comments-title-tallerView">Comentarios:</h3>
                                    <ul className="comments-list-tallerView">
                                        
                                        {publication.comments.map((comment) => (
                                            <li key={comment._id} className="comment-item-tallerView">
                                                <p className="comment-user-tallerView">{comment.nameUser}</p>
                                                <p className="comment-text-tallerView">{comment.comment}</p>
                                                <p className="comment-date-tallerView">
                                                    {new Date(comment.creationDate).toLocaleDateString()}
                                                    
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};