import React, { useState, useEffect } from 'react';

function GameList({ user }) {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/games')
            .then(res => res.json())
            .then(data => setGames(data))
            .catch(err => console.error(err));
    }, []);

    const handleAddToLibrary = (gameId) => {
        if (!user) {
            alert("You need to log in to add games to your library.");
            return;
        }
        console.log("Adding game to library for user:", user.user_id);

        fetch('http://localhost:3001/library', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: user.user_id,  // Assuming user_id is available in `user` prop
                game_id: gameId,
            }),
        })
            .then(res => {
                if (!res.ok) throw new Error("Failed to add game");
                return res.json();
            })
            .then(data => {
                alert(data.message);  // Success message
            })
            .catch(err => {
                console.error("Error:", err.message);
            });
    };

    return (
        <div>
            <h2>Games List</h2>
            <ul>
                {games.length === 0 ? (
                    <li>No games available</li>
                ) : (
                    games.map((game) => (
                        <li key={game.game_id}>
                            <strong>{game.title}</strong> — {game.genre}  
                            <br />
                            Price: ${game.price}  
                            <br />
                            Released: {game.release_date}
                            <br />
                            <button onClick={() => handleAddToLibrary(game.game_id)}>
                                Add to Library
                            </button>
                            <hr />
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default GameList;