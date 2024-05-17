import NoteItem from "../NoteItem/NoteItem";
import AddNote from "../AddNote/AddNote";
import styles from "./NoteList.module.css";

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  return (
    <>
      <AddNote handleAddNote={handleAddNote} />
      <div className={styles.noteList}>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note._id}
            title={note.title}
            content={note.content}
            date={note.date}
            onSelect={handleEditNote}
            onDelete={handleDeleteNote}
          />
        ))}
      </div>
    </>
  );
};

export default NotesList;
