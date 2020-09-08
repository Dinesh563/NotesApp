import React,{useState} from "react";



function CreateArea(props){
const [note,setnote]=useState({title:"",content:""});

function handleChange(event){
  var {name,value}=event.target;
  setnote(prev=>{
    return {
      ...prev,
      [name]:value
    }
  });

}

function handleAdd(event){
  
  props.onAdd(note);
     setnote({
       title: "",
       content: ""
     });
     event.preventDefault();
}


  return(<div>
    <form>
<input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>
<textarea name="content"onChange={handleChange} placeholder="Take a note..." value={note.content} rows="4" cols="5"/>
<button name="addbutton" onClick={handleAdd}>add</button>
</form>
  </div>
);
}
export default CreateArea;
