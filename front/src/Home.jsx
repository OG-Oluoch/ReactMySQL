import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },
  [])
  return (
    <>
    <div>
      <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Department</th>
            <th>Year of study</th>
          </tr>
        </thead>
        <tbody>
         {data.map((students,index)=>{
          return <tr key ={index}>
             <td>{students.id}</td>
             <td>{students.firstname}</td>
             <td>{students.lastname}</td>
             <td>{students.department}</td>
             <td>{students.year}</td> 

             <button>Edit</button>
             <button>Delete</button>
          </tr>
         })}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Home