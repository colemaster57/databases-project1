import React from 'react';
import GameList from "../components/GameList";
function Store({ user }) {
    
    return(
    <div>
        <h1>Welcome to the store page!</h1>
        <GameList user={user} />
    </div>
    );
}
export default Store;