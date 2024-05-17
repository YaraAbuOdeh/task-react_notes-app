import React, { useState, useEffect } from "react";
import axios from "axios";
import NotesList from "../NoteList/NotesList";
import Search from "../Search/Search";
import UpdateNoteDialog from "../UpdateNoteDialog/UpdateNoteDialog";
import styles from "./Notes.module.css";

const REACT_APP_BASE_API_URL = axios.create({
  baseURL: "http://localhost:3000",
});

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);

  const fetchNotes = async () => {
    try {
      const response = await REACT_APP_BASE_API_URL.get("/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleEditNote = (id) => {
    const note = notes.find((note) => note._id === id);
    setEditNote(note);
    setIsEditDialogOpen(true);
  };
  //back //
  const handleSaveNote = async (id, data) => {
    try {
      await REACT_APP_BASE_API_URL.patch(`/notes/${id}`, data);
      fetchNotes();
    } catch (error) {
      console.error("Error updating note:", error);
    }
    setIsEditDialogOpen(false);
  };

  const handleAddNote = async ({ title, content }) => {
    try {
      await REACT_APP_BASE_API_URL.post("/notes", {
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
      await REACT_APP_BASE_API_URL.delete(`/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleSearchNote = async (query) => {
    try {
      const response = await REACT_APP_BASE_API_URL.get(
        `/notes/search?query=${query}`
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
    <div className={styles.container}>
      <h1>Notes</h1>
      <Search onSearch={handleSearchNote} />
      <NotesList
        notes={notes}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
        handleEditNote={handleEditNote}
      />
      {editNote && (
        <UpdateNoteDialog
          open={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          note={editNote}
          onSave={handleSaveNote}
        />
      )}
    </div>
  );
};

export default Notes;
