import React from 'react'
import {useRef} from "react"

const Age = () => {
    const n1ref=React.useRef()
    const n2ref=React.useRef()
    const resref=React.useRef()
    const FnCal=()=>{
          console.log(n1ref.current.value)
          console.log(n2ref.current.value)
           const n1=n1ref.current.value
           const n2= n2ref.current.value
           const tipPert=(parseInt(n1)*parseInt(n2))/100
           const total=tipPert+parseInt(n1)
           console.log("total  "+total)
           resref.current.innerText=total


    }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4 shadow-lg" style={{ width: "22rem" }}>
      <div className="card-body text-center">
        <h2 className="card-title">Age Calculator</h2>
        <input type="number" ref={n1ref} className="form-control my-2" placeholder="Enter bill" />
        <input type="number" ref={n2ref} className="form-control my-2" placeholder="Enter bill" />
         <button className="btn btn-primary w-100 my-2" onClick={FnCal}> Calculate</button>
        <h4 className="mt-3"><span ref={resref}>0</span></h4>
      </div>
    </div>
  </div>
  )
}

export default Age
