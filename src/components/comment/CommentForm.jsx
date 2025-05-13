import React from "react";
import { useCommentForm } from "../../shared/hooks/useCommentForm";

export const CommentForm = ({ publicationId, onCommentAdded }) => {
  const {
    formData,
    loading,
    error,
    successMsg,
    handleChange,
    handleSubmit,
  } = useCommentForm(onCommentAdded);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(publicationId);
  };

  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="nameUser"
        placeholder="Tu nombre"
        value={formData.nameUser}
        onChange={handleChange}
        maxLength={30}
        required
      />
      <textarea
        name="comment"
        placeholder="Escribe tu comentario"
        value={formData.comment}
        onChange={handleChange}
        maxLength={150}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Agregar Comentario"}
      </button>
      {error && <p className="error-msg">{error}</p>}
      {successMsg && <p className="success-msg">{successMsg}</p>}
    </form>
  );
};
