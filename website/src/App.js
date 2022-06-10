import ReactLoading from 'react-loading';
import React from "react";
import { useState,useEffect } from "react";
import Aside from "./components/Aside";
import Content from "./components/Content";

function App() {

const [done , setDone] = useState(false);

useEffect(()=>
{
  setTimeout(()=>{
    setDone(true);
  },2000)
},[])

  return (
    !done ?
    <div className=' h-screen flex justify-center items-center bg-black'>
      <ReactLoading type='cylon' color='#374151' delay={200}/>
    </div>
    : <>
    <div className="sm:flex sm:flex-col">
    <Aside/>
    <Content/>
    </div>
    </>
  );
}

export default App;
