import React, { useState, useEffect } from 'react';

function GameList(){
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/games')
        .then(res => res.json())
        .then(data => setGames(data))
        .catch(err => console.error(err));
    
    }, []);
    // useEffect(() => {
    //     //This is just static data for testing.
    //     const fetchedGames = [
    //         { id: 1, name: "Game 1" },
    //         { id: 2, name: "Game 2" },
    //         { id: 3, name: "Game 3" },
    //     ];
    //     setGames(fetchedGames);
    // }, []);
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
                            <hr />
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}
export default GameList;