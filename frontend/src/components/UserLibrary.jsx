import React, { useEffect, useState } from 'react';

function UserLibrary({ user }) {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        if (!user) return;

        fetch(`http://localhost:3001/library/${user.user_id}`)
            .then(res => res.json())
            .then(data => setLibrary(data))
            .catch(err => console.error("Failed to fetch library:", err));
    }, [user]);

    if (!user) {
        return <p>Please log in to see your library.</p>;
    }

    return (
        <div>
            <h2>{user.username}'s Library</h2>
            <ul>
                {library.length === 0 ? (
                    <li>No games in your library.</li>
                ) : (
                    library.map(game => (
                        <li key={game.library_id}>
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

export default UserLibrary;