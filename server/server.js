import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.message);
        return;
    }
    console.log("Connected to MySQL database");
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM students";
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error in the server" });
        return res.json(result);
    });
});

app.post('/students', (req, res) => {
    const sql = "INSERT INTO students(`firstname`, `lastname`, `department`, `year`) VALUES (?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.department,
        req.body.year
    ];

    db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM students WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error in the server" });
        if (result.length === 0) return res.json({ Message: "Student not found" });

        return res.json(result[0]); // Return first student object
    });
});

app.put('/edit/:id', (req, res) => {
    const sql = "UPDATE students SET firstname = ?, lastname = ?, department = ?, year = ? WHERE id = ?";
    const values = [req.body.firstname, req.body.lastname, req.body.department, req.body.year];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, result) => {
        if (err) return res.json({ Message: "Error updating student" });
        return res.json({ Message: "Student updated successfully" });
    });
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
