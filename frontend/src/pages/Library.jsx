import React from 'react';
import UserLibrary from '../components/UserLibrary';

function Library({ user }) {
    if (!user) {
        return <p>Please log in to view your library.</p>;
    }

    return (
        <div>
            <h3>{user.username}'s Library</h3>
            <UserLibrary user={user} />
        </div>
    );
}

export default Library;