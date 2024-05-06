import React, { useState, useEffect } from "react";
import axios from "axios";
import NotesList from "./NotesList";
import Search from "./Search";
import UpdateNoteDialog from "./UpdateNoteDialog";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleSelectNote = (id) => {
    const note = notes.find((note) => note._id === id);
    setCurrentNote(note);
    setDialogOpen(true);
  };

  const handleSaveNote = async (id, title, content) => {
    try {
      await axios.patch(`http://localhost:3000/notes/${id}`, {
        title,
        content,
      });
      fetchNotes();
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
      fetchNotes();
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleSearchNote = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/notes/search?query=${query}`
      );
      setNotes(response.data);
    } catch (error) {
      console.error("Error searching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="container">
      <h1>Notes</h1>
      <Search handleSearchNote={handleSearchNote} />
      <NotesList
        notes={notes}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
        handleSelectNote={handleSelectNote}
      />
      {currentNote && (
        <UpdateNoteDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          note={currentNote}
          onSave={handleSaveNote}
        />
      )}
    </div>
  );
};

export default Notes;
