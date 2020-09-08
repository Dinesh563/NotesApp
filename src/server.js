
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

const cors=require("cors");
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/NotesDB",{useNewUrlParser:true,useUnifiedTopology:true});
const NoteSchema=mongoose.Schema({
  title:String,
  content:String
});
const Notes=mongoose.model("note",NoteSchema);




app.get("/",function(req,res){

Notes.find(function(err,notes){
  if(err)
  console.log(err);
  else {

    res.json(notes);
  }

});


});
app.post("/",function(req,res){
const note=new Notes({
  title:req.body.title,
  content:req.body.content
});
note.save();
res.json("Inserted");

});

app.post("/delete",function(req,res){
  const id=req.body.id;

});

app.listen(5000,function(){
  console.log("sever started on port 5000");
});
