const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const PORT = 3001;


app.use(cors());

const db = new sqlite3.Database('project1.db');
app.get('/games',(req, res) => {
    db.all('SELECT * FROM Games', [], (err, rows) => {
        if(err){
            res.status(500).json({error: err.message});
            return;
        }
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});