const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("C:/Users/Cole/Documents/College/CS/CS665/Project1/project1.db", (err) => {
    if (err) {
        console.error("Could not open database", err.message);
    } else {
        console.log("Connected to the existing SQLite database.");
    }
});

app.get('/games', (req, res) => {
    db.all('SELECT * FROM Games', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});



app.get('/login', (req, res) => {
    const { username, password } = req.query;
  
    db.get('SELECT * FROM Users WHERE username = ? AND password = ?', [username, password], (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (row) {
        res.json({ message: 'Login successful', user: row });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    });
  });
  
app.get('/library/:userId', (req, res) => {
    const userId = req.params.userId;
    db.all(`
        SELECT Games.* FROM Games
        JOIN Library ON Games.game_id = Library.game_id
        WHERE Library.user_id = ?
    `, [userId], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});