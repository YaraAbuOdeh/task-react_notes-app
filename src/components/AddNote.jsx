import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [expanded, setExpanded] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleCancel = () => {
        setExpanded(false);
        setNoteTitle('');
        setNoteContent('');
    };

    const handleSaveClick = () => {
        if (noteTitle.trim().length > 0 && noteContent.trim().length > 0) {
            handleAddNote({
                title: noteTitle,
                content: noteContent
            });
            setExpanded(false);
            setNoteTitle('');
            setNoteContent('');
        }
    };

    return (
        <div className={`new-note ${expanded ? 'new expanded' : ''}`}>
            {expanded ? (
                <>
                    <input
                        type="text"
                        placeholder="Enter title..."
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value)}
                    />
                    <textarea
                        rows='4'
                        cols='5'
                        placeholder="Type to add note content.."
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                    ></textarea>
                    <div className="note-footer">
                        <button className="cancel" onClick={handleCancel}>Cancel</button>
                        <button className="save" onClick={handleSaveClick}>Save</button>
                    </div>
                </>
            ) : (
                <input className="add-note" type="text" placeholder="Click to add a new note..." onClick={handleExpand}></input>
            )}
        </div>
    );
};

export default AddNote;
