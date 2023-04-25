/* eslint-disable no-lone-blocks */
import React from 'react'
import { useState } from "react";

function Counterfun() {
      //create a state
const[counter,setcounter]=useState(0)

function incrementCounter(){
  {
    setcounter(counter+1)
  }
}
function decrementCounter(){
  {

    if(counter!==0)
    {
      setcounter(counter-1)

    }

  }
}
function reset(){
  {
    setcounter(0)
  }
}

  return (
    <div style={{
        padding:'150px',
        color:'white',
      }}
      className=" dash App text-center m-5 border border-2" >
       <h3 className='hi '>Click Me...!!!!</h3>
        <h1>{counter}</h1>
        <button 
        style={{
          backgroundColor:'green',
          color:'white',
          padding:'10px',
          border:'2px solid green',
          margin:'4px',
          borderRadius:'10px'
        }} onClick={incrementCounter}>Add</button>
        <button
        style={{
          backgroundColor:'red',
          color:'white',
          padding:'10px',
          border:'2px solid red',
          margin:'4px',
          borderRadius:'10px'
        }}  onClick={decrementCounter}>Sub</button>
        <button 
        style={{
          backgroundColor:'grey',
          color:'white',
          padding:'10px',
          border:'2px solid grey',
          margin:'4px',
          borderRadius:'10px'
        }}  onClick={reset}>Reset</button>
    </div>
  )
}

export default Counterfun
