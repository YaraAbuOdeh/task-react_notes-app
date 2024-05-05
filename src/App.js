import React, { useState, useEffect } from "react";
import axios from "axios";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import NoteDialog from "./components/NoteDialog";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []); // Fetch notes when component mounts

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleSelectNote = (id) => {
    const note = notes.find((n) => n._id === id);
    setCurrentNote(note);
    setDialogOpen(true);
  };

  const handleSaveNote = async (id, title, content) => {
    try {
      await axios.patch(`http://localhost:3000/notes/${id}`, {
        title,
        content,
      });
      fetchNotes(); // Refresh notes after update
    } catch (error) {
      console.error("Error updating note:", error);
    }
    setDialogOpen(false);
  };

  const handleAddNote = async ({ title, content }) => {
    try {
      await axios.post("http://localhost:3000/notes", {
        title,
        content,
      });
      fetchNotes(); // Refresh notes after addition
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);
      fetchNotes(); // Refresh notes after deletion
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleSearchNote = async (query) => {
    try {
      const response = await axios.get(`http://localhost:3000/notes/search?query=${query}`);
      setNotes(response.data);
    } catch (error) {
      console.error("Error searching notes:", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={handleSearchNote} />
      <NotesList
        notes={notes}
        handleAddNote={handleAddNote}
        handleDeleteNote={deleteNote}
        handleSelectNote={handleSelectNote}
      />
      {currentNote && (
        <NoteDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          note={currentNote}
          onSave={handleSaveNote}
        />
      )}
    </div>
  );
};

export default App;
