import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote,handleSelectNote }) => {
    return (
        <>
            <AddNote handleAddNote={handleAddNote} />
            <div className="note-list">
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        id={note._id}
                        title={note.title}
                        content={note.content}
                        date={note.date}
                        onSelect={handleSelectNote}
                        handleDeleteNote={handleDeleteNote} 
                    />
                ))}
            </div>
        </>
    );
};

export default NotesList;
