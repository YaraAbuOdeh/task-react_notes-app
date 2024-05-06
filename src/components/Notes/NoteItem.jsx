import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import DeleteNoteDialog from "./DeleteNoteDialog";

const NoteItem = ({ id, title, content, date, onSelect, handleDeleteNote }) => {
  const [hovered, setHovered] = useState(false);
  const [showDialog, setshowDialog] = useState(false);

  const openDialog = () => {
    setshowDialog(true);
  };

  const closeDialog = () => {
    setshowDialog(false);
  };

  const confirmDelete = (e) => {
    e.stopPropagation();
    handleDeleteNote(id);
    closeDialog();
  };

  return (
    <div
      className="note"
      onClick={() => onSelect(id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{title}</span>
      <p>{content}</p>
      <div className="note-footer">
        <small>{date}</small>
        {hovered && (
          <>
            <MdDeleteForever
              onClick={(e) => {
                e.stopPropagation();
                openDialog();
              }}
              className="delete-icon"
              size="1.3em"
            />
            <DeleteNoteDialog
              isOpen={showDialog}
              onClose={closeDialog}
              onConfirm={confirmDelete}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NoteItem;
