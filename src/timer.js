import React,{useState} from "react";



function TimedButton(){
  var options = { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric',hour:"numeric",minute:"numeric",second:"numeric",hour12:true };
var today  = new Date();
var now =today.toLocaleString("en-US", options);

const [nowtime,settime]=useState(now);
function refresh(){
  today=new Date();
  settime(today.toLocaleString("en-US", options));
}
setInterval(refresh,1000);

  return (
    <button className="btn btn-primary btn-lg">
    {nowtime}
</button>
);
}
export default TimedButton;
