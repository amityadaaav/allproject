import React from 'react'

const Login = () => {
      const nameRef=React.useRef()
      const emailRef=React.useRef()
      const passwordRef=React.useRef()
      const genderRef=React.useRef()
      const countryRef  =React.useRef()
      const termsRef=React.useRef()

  const handleSubmit=(e)=>{
    e.preventDefault(); 
      //  alert("hello")  
       console.log(nameRef.current.value)
       console.log(emailRef.current.value)
       console.log(passwordRef.current.value)
       console.log(genderRef.current.value)
       console.log(termsRef.current.value)
       console.log(countryRef.current.value)
  }

  return (
    
    <div className="container mt-5">
    <h2>Uncontrolled Registration Form</h2>
    <form onSubmit={handleSubmit} className="shadow p-4">
      <div className="mb-3">
        <label>Name:</label>
        <input type="text" ref={nameRef} className="form-control" required />
      </div>

      <div className="mb-3">
        <label>Email:</label>
        <input type="email" ref={emailRef} className="form-control" required />
      </div>

      <div className="mb-3">
        <label>Password:</label>
        <input type="password" ref={passwordRef} className="form-control" required />
      </div>

      <div className="mb-3">
        <label>Gender:</label> <br />
        <input type="radio" name="gender" value="Male" ref={genderRef} /> Male
        <input type="radio" name="gender" value="Female" ref={genderRef} className="ms-3" /> Female
      </div>

      <div className="mb-3">
        <label>Country:</label>
        <select ref={countryRef} className="form-control">
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
        </select>
      </div>

      <div className="mb-3">
        <input type="checkbox" ref={termsRef} /> I accept the terms and conditions
      </div>

      <button type="submit" className="btn btn-primary w-100">Register</button>
    </form>
  </div>
);
}

  
export default Login
