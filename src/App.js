import React,{useState} from 'react';
import TimedButton from "./timer.js"
import CreateArea from "./notesarea.js";
import NoteCard from "./notecard.js";
import './App.css';

function App() {
const [notes,addnotes]=useState([]);
  function createcard(note){
  addnotes(prev=>{
    return [...prev,note];
  })
  }
function deletenote(id){
addnotes(prev=>{return prev.filter((item,index)=>{
  return index!==id;
})});
}

  return (
    <div className="test">
  <TimedButton/>
<CreateArea onAdd={createcard}/>
{notes.map((item,index)=>{
  return <NoteCard key={index} id={index} title={item.title} content={item.content} onDEL={deletenote}/>
})}

    </div>
  );
}

export default App;
