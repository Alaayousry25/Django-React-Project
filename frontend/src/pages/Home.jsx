import { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/Note";
import UserDropdown from "../components/UserDropdown";
import "../styles/Home.css";
import bgImage from "../assets/download.jpeg";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);
  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data), console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/note/delete/${id}`)
      .then((res) => {
        if (res.status === 204) alert("Note Deleted!");
        else alert("Failed to Delete Note.");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note Created!");
        else alert("Failed to Create Note.");
        getNotes();
      })
      .catch((err) => alert(err));
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "0 0 40px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "24px 32px 0 0",
        }}
      >
        <UserDropdown />
      </div>
      <div style={{ maxWidth: 700, margin: "32px auto 0 auto" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(25, 118, 210, 0.15)",
            padding: "32px 28px 28px 28px",
            marginBottom: 32,
          }}
        >
          <h2
            style={{
              color: "#1976d2",
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: 24,
              letterSpacing: "1px",
            }}
          >
            Notes
          </h2>
          {notes.length === 0 ? (
            <div style={{ color: "#888", fontStyle: "italic" }}>
              No notes yet.
            </div>
          ) : (
            notes.map((note) => (
              <Note note={note} onDelete={deleteNote} key={note.id} />
            ))
          )}
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 8px 32px rgba(255, 64, 129, 0.10)",
            padding: "32px 28px 28px 28px",
          }}
        >
          <h2
            style={{
              color: "#ff4081",
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: 24,
              letterSpacing: "1px",
            }}
          >
            Create a Note
          </h2>
          <form onSubmit={createNote}>
            <label
              htmlFor="title"
              style={{ fontWeight: "bold", color: "#1976d2" }}
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              style={{ marginBottom: 16 }}
            />
            <label
              htmlFor="content"
              style={{ fontWeight: "bold", color: "#1976d2" }}
            >
              Content:
            </label>
            <textarea
              id="content"
              name="content"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ marginBottom: 16, minHeight: 80 }}
            ></textarea>
            <input
              type="submit"
              value="Submit"
              style={{
                background: "#1976d2",
                color: "#fff",
                padding: "10px 24px",
                border: "none",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px #1976d2aa",
                transition: "all 0.2s",
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
