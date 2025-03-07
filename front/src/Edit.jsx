import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        department: "",
        year: "",
    });

    // Fetch student details
    useEffect(() => {
        axios.get(`http://localhost:8080/read/${id}`)
            .then(res => {
                console.log("API Response:", res.data);
                setStudent(res.data);
            })
            .catch(err => console.error("Error fetching student:", err));
    }, [id]);

    // Update `values` state after student is fetched
    useEffect(() => {
        if (student) {
            setValues({
                firstname: student.firstname || "",
                lastname: student.lastname || "",
                department: student.department || "",
                year: student.year || "",
            });
        }
    }, [student]);

    // Handle form submission
    const handleEdit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/edit/${id}`, values)
            .then(() => {
                console.log("✅ Student updated successfully!");
                navigate('/'); // Redirect to homepage
            })
            .catch(err => console.error("❌ Error updating student:", err));
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
                <h2 className="text-center mb-4">Update Student</h2>
                <form onSubmit={handleEdit}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            className="form-control"
                            value={values.firstname}
                            onChange={(e) => setValues({ ...values, firstname: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            className="form-control"
                            value={values.lastname}
                            onChange={(e) => setValues({ ...values, lastname: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Department</label>
                        <input
                            type="text"
                            placeholder="Enter Department"
                            className="form-control"
                            value={values.department}
                            onChange={(e) => setValues({ ...values, department: e.target.value })}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Year of Study</label>
                        <input
                            type="text"
                            placeholder="Enter Year of Study"
                            className="form-control"
                            value={values.year}
                            onChange={(e) => setValues({ ...values, year: e.target.value })}
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100">Update</button>
                </form>
            </div>
        </div>
    );
}

export default Edit;
