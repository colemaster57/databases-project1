import React, { useEffect, useState } from 'react';

function Library({ user }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3001/library/${user.user_id}`)
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error("Failed to load library:", err));
  }, [user]);

  if (!user) return <p>Please log in to view your library.</p>;

  return (
    <div>
      <h1>{user?.username}'s Library</h1>
      <ul>
        {games.length === 0 ? (
          <li>No games in your library.</li>
        ) : (
          games.map((game) => (
            <li key={game.id}>{game.title}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Library;