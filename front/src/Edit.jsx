import React from 'react'
import { useState } from 'react'

function Edit() {

    const[values,setValues]=useState({
        firstname:"",
        lastname:"",
        department:"",
        year:"",
    })

  return (
    <div className="container mt-5 d-flex justify-content-center">
    <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
      <h2 className="text-center mb-4">Update Student</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" placeholder="Enter First Name" className="form-control" onChange={e=>setValues({...values,firstname:e.target.value})}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" placeholder="Enter Last Name" className="form-control" onChange={e=>setValues({...values,lastname:e.target.value})} />
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <input type="text" placeholder="Enter Department" className="form-control" onChange={e=>setValues({...values,department:e.target.value})}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Year of Study</label>
          <input type="text" placeholder="Enter Year of Study" className="form-control" onChange={e=>setValues({...values,year:e.target.value})}/>
        </div>

        <button className="btn btn-success w-100">Update</button>
      </form>
    </div>
  </div>
  )
}

export default Edit