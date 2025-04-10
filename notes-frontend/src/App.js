import React, { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    API.get("notes/")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Notes List</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}: {note.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
