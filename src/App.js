import React,{useState} from 'react';
import TimedButton from "./timer.js"
import CreateArea from "./notesarea.js";
import NoteCard from "./notecard.js";
import './App.css';

function App() {
  const [notes,addnotes]=useState([]);

  fetch('http://localhost:5000')
    .then(response => response.json())
    .then(data => {
      addnotes(data);

    });


  function createcard(note){
    fetch("http://localhost:5000",{
      method:"post",
      headers:{"content-Type":"application/json"
    },
    body:JSON.stringify(
      note
    )
  }).then(res=>res.json()).then(console.log);
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
