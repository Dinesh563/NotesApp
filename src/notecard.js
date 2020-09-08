import React from "react";
function NoteCard(props){

function handleDEL(){
  props.onDEL(props.id);
  fetch("http://localhost:5000/delete",{
    method:"post",
    headers:{"content-Type":"application/json"
  },
  body:JSON.stringify({
    id:props.id
  })
})
}


  return <div className="note">
  <h1>{props.title}</h1>
  <p>{props.content}</p>
  <button onClick={handleDEL}>DEL</button>
  </div>
}
export default NoteCard;
