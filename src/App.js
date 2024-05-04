import { useState } from "react";
import {nanoid} from 'nanoid'
import NotesList from "./components/NotesList";

const App =()=>{
  const [notes,setNotes ]=useState([
    {
    id:nanoid(),
    title:"this is my first note",
    content:"this is my first note",
    date:"15/4/2023"  
  },
  {
    id:nanoid(),
    title:"this is my secound note",
    content:"this is my first note",
    date:"15/4/2023"  
  },
  {
    id:nanoid(),
    title:"this is my third note",
    content:"this is my first note",
    date:"15/4/2023"
  }
]);
const handleAddNote = ({ title, content }) => {
  const date = new Date();
  const newNote = {
      id: nanoid(),
      title: title,
      content: content,
      date: date.toLocaleDateString()
  };
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

return (
  <div className="container">
      <NotesList notes={notes} handleAddNote={handleAddNote} />
  </div>
);
};
export default App;