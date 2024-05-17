import { useState } from "react";
import styles from "./AddNote.module.css"
const AddNote = ({ handleAddNote }) => {
    const [expanded, setExpanded] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');
    
    const handleExpand = () => {
        setExpanded(true);
    };

    const handleCancel = () => {
        setExpanded(false);
        setNoteTitle('');
        setNoteContent('');
        setTitleError('');
        setContentError('');
    };

    const handleSaveClick = () => {
        let valid = true;
        if (noteTitle.trim().length === 0) {
            setTitleError('Title is required');
            valid = false;
        } else {
            setTitleError('');
        }
        if (noteContent.trim().length === 0) {
            setContentError('Content is required');
            valid = false;
        } else {
            setContentError('');
        }
        if (valid) {
            handleAddNote({
                title: noteTitle,
                content: noteContent
            });
            handleCancel();
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
                    {titleError && <div className="error">{titleError}</div>}
                    <textarea
                        rows='4'
                        cols='5'
                        placeholder="Type to add note content.."
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                    ></textarea>
                    {contentError && <div className="error">{contentError}</div>}
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
