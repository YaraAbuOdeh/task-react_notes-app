import React from "react";

const UpdateNoteDialog = ({ open, onClose, note, onSave }) => {
  const [title, setTitle] = React.useState(note.title);
  const [content, setContent] = React.useState(note.content);
//   React.useEffect(() => {
//     if (note) {
//       setTitle(note.title);
//       setContent(note.content);
//     }
//   }, [note]);

  const handleSave = () => {
    onSave(note._id, title, content);
    onClose();
  };

  const handleClose = () => {
    setTitle("");
    setContent("");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="dialog-background">
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
