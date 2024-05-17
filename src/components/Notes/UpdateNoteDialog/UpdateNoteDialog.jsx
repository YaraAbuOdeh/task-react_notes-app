import React from "react";
import styles from "./UpdateNoteDialog.module.css"
const UpdateNoteDialog = ({ isOpen, onClose, note, onSave }) => {
  const [title, setTitle] = React.useState(note.title);
  const [content, setContent] = React.useState(note.content);

  const handleSave = () => {
    onSave(note._id, title, content);
    onClose();
  };

  const handleClose = () => {
    setTitle("");
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.dialogBackground}>
      <div className="dialog">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="note-footer">
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleSave}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateNoteDialog;
