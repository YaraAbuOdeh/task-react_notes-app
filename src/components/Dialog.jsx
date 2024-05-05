const Dialog = ({ isOpen, onClose, onConfirm }) => {
    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>Are you sure you want to delete this note?</p>
                        <button className="modal-buttons" onClick={onConfirm}>Delete</button>
                        <button className="modal-buttons" onClick={onClose}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dialog;