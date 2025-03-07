import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Read() {
    const { id } = useParams();
    const [student, setStudent] = useState(null); // Initialize as null

    useEffect(() => {
        axios.get(`http://localhost:8080/read/${id}`)
            .then(res => {
                console.log(res);
                setStudent(res.data); // Assuming res.data is an object, not an array
            })
            .catch(err => console.log(err));
    }, [id]); // Add id as a dependency

    if (!student) {
        return <p>Loading...</p>; // Show loading state while fetching data
    }

    return (
        <div>
            <h2>Student Detail</h2>
            <h3>ID: {student.id}</h3>
            <h3>First Name: {student.firstname}</h3>
            <h3>Last Name: {student.lastname}</h3>
            <h3>Department: {student.department}</h3>
            <h3>Year: {student.year}</h3>
            <Link to="/" className="btn btn-primary">Back</Link>
            <Link to={`/edit/${student.id}`} className='btn btn-info'>Edit</Link>
        </div>
    );
}

export default Read;
