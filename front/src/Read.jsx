import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function Read() {
    const {id} = useParams();
    const [student,setStudent] = useState([])
    useEffect(()=>{
     axios.get('http://localhost:8080/read/'+id)
     .then(res=>{
        console.log(res)
        setStudent(res.data);
    })
     .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <div>
            <h2> Student Detail</h2>
            <h3>{student[0].id}</h3>
            <h3>{student[0].firstname}</h3>
            <h3>{student[0].lastname}</h3>
            <h3>{student[0].department}</h3>
            <h3>{student[0].year}</h3>
       <Link to="/" className='btn btn-primary'>Back</Link>
       <button className='btn btn-black'>Edit</button>
        </div>
    </div>
  )
}

export default Read