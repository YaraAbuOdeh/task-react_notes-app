import {MdDeleteForever} from 'react-icons/md'
const Note =({id ,title ,content,date })=>{
    return(
        <div className="note">
            <span>{title}</span>
            <p>{content}</p>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className ='delete-icon' size='1.3em'/>
            </div>
        </div>
    );
};
export default Note;