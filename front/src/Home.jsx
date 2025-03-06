import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Student Info</h3>
      <div className='d-flex justify-content-end'>
        <Link to="/create" className='btn btn-success'>Create +</Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Year of Study</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
                <td>
               <Link to={`/read/${student.ID}`} className="btn btn-primary btn-sm me-2">Read</Link>
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
