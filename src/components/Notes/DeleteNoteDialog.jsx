const DeleteNoteDialog = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <div className="dialog-background">
      <div className="dialog">
        <h3>Note Deletion</h3>
        <p>Are you sure you want to delete this note?</p>
        <div className="note-footer">
          <button className="modal-buttons" onClick={onConfirm}>
            Delete
          </button>
          <button className="modal-buttons" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteNoteDialog;
