import Note from "./Note";
import AddNote from "./AddNote"
const NotesList = ({ notes, handleAddNote }) => {
    return (
        <>
        <AddNote handleAddNote={handleAddNote} />
        <div className="note-list">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    date={note.date}
                />
            ))}
        </div>
        </>
    );
};

export default NotesList;