import React, { useState } from "react";
import { usePublications } from "../../shared/hooks/usePublicationsView";
import { CommentForm } from "../comment/CommentForm";

export const ViewPractica = ({ courseName }) => {
  const { publications, loading, error } = usePublications({ courseName });

  // Estado para manejar qué comentarios están abiertos (por ID)
  const [openComments, setOpenComments] = useState({});

  const toggleComments = (pubId) => {
    setOpenComments((prevState) => ({
      ...prevState,
      [pubId]: !prevState[pubId],
    }));
  };

  if (loading) {
    return <div className="loading-practicaView">Cargando publicaciones...</div>;
  }

  if (error) {
    return <div className="error-practicaView">Error: {error}</div>;
  }

  return (
    <div className="container-practicaView">
      <h1 className="text-practicaView text-blue-600">Practica Supervisada</h1>

      {publications.length === 0 ? (
        <p className="no-pubs-practicaView">Aun no se suben publicaciones</p>
      ) : (
        <div className="container-publications-practicaView">
          {publications.map((publication) => (
            <div key={publication._id} className="pub-card-practicaView">
              <h2 className="pub-title-practicaView">{publication.title}</h2>
              <p className="pub-desc-practicaView">{publication.descriptionoftheactivity}</p>
              <CommentForm publicationId={publication._id} />
              <div className="pub-dates-practicaView">
                <span>
                  Creado: {new Date(publication.creationDate).toLocaleDateString()}
                </span>
              </div>

              {publication.comments && publication.comments.length > 0 && (
                <div className="comments-section-practicaView">
                  <h3
                    className="comments-title-practicaView"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleComments(publication._id)}
                  >
                    Comentarios {openComments[publication._id] ? "▲" : "▼"}
                  </h3>

                  {openComments[publication._id] && (
                    <ul className="comments-list-practicaView">
                      {[...publication.comments]
                        .sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
                        .map((comment) => (
                          <li key={comment._id} className="comment-item-practicaView">
                            <p className="comment-user-practicaView">{comment.nameUser}</p>
                            <p className="comment-text-practicaView">{comment.comment}</p>
                            <p className="comment-date-practicaView">
                              {new Date(comment.creationDate).toLocaleDateString()}
                            </p>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
