import React, { useState } from 'react'


const LoginC = () => {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [gender,setGender]=useState("")
    const [country, setCountry] = useState("");  // ✅ Added state for country
    const [acceptTerms, setAcceptTerms] = useState(false); // ✅ Added state for checkbox
    
    const handleSubmit=(e)=>{
        e.preventDefault();
    console.log("Submitted Data:", { name, email,password,gender,country,acceptTerms });     
    }
  return (
    <div className="container mt-5">
    <h2>controlled Registration Form</h2>
    <form onSubmit={handleSubmit} className="shadow p-4">
      <div className="mb-3">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" required />
      </div>

      <div className="mb-3">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" required />
      </div>


      <div className="mb-3">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" required />
      </div>

      <div className="mb-3">
        <label>Gender:</label> <br />
        <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /> Male
        <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} className="ms-3" /> Female

      </div>
      

      <div className="mb-3">
        <label>Country:</label>
        <select  value={country} onChange={(e) => setCountry(e.target.value)} className="form-control">
        <option value="" >option select</option>
          <option value="USA" >USA</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
        </select>
      </div>
      <div className="mb-3">
        <input type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} /> I accept the terms and conditions
      </div>

      <button type="submit"  className="btn btn-primary w-100" disabled={!acceptTerms}>Register</button> 
    </form>
  </div>
);
}

export default LoginC
