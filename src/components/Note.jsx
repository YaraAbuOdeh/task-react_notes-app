import { useState } from "react";
import { MdDeleteForever } from 'react-icons/md';
import Dialog from './Dialog';

const Note = ({ id, title, content, date, onSelect , handleDeleteNote }) => {
    const [hovered, setHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const confirmDelete = () => {
        console.log("Deleting note with id:", id);
        handleDeleteNote(id); 
        closeModal();
    };

    return (
        <div className="note" onClick={() => onSelect(id)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <span>{title}</span>
            <p>{content}</p>
            <div className="note-footer">
                <small>{date}</small>
                {hovered && (
                    <>
                        <MdDeleteForever
                        onClick={(e) => {
                            e.stopPropagation();
                            openModal();
                        }}
                            className='delete-icon'
                            size='1.3em'
                        />
                        <Dialog isOpen={showModal} onClose={closeModal} onConfirm={confirmDelete} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Note;
