import React from "react";
import "../styles/Note.css";
function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
  return (
    <div
      style={{
        borderRadius: 16,
        border: "2px solid #1976d2",
        boxShadow: "0 4px 16px rgba(25, 118, 210, 0.15)",
        background: "#f9f9f9",
        padding: "18px 20px 16px 20px",
        marginBottom: 18,
        transition: "box-shadow 0.2s",
        position: "center",
      }}
    >
      <p
        className="note-title"
        style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 8 }}
      >
        {note.title}
      </p>
      <p className="note-content" style={{ marginBottom: 8 }}>
        {note.content}
      </p>
      <p
        className="note-date"
        style={{ color: "#888", fontSize: "0.9rem", marginBottom: 12 }}
      >
        {formattedDate}
      </p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
