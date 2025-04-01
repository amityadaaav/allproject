
"use client"
import React from 'react'
import { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);
    const fnInct = () => setCount(count + 1);
    const fnDint = () => setCount(count - 1);
    const fnReset = () => setCount(0);
  return (
    
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4 shadow-lg text-center" style={{ width: "22rem" }}>
      <div className="card-body">
        <h2 className="card-title">Simple Counter</h2>
        <h1 className="display-4 my-3">{count}</h1>
        <button className="btn btn-success m-2" onClick={fnInct}>Increment</button>
        <button className="btn btn-danger m-2" onClick={fnDint}>Decrement</button>
        <button className="btn btn-warning m-2" onClick={fnReset}>Reset</button>
      </div>
    </div>
  </div>
  )
}

export default Counter

