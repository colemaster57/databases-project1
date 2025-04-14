import React, { useState } from 'react';


function Home({ user }){
    const [balance, setBalance] = useState(0);

    const handleAddMoney = async () => {
        try {
          const response = await fetch('http://localhost:3001/update-balance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.user_id, amount: 10 }), 
          });
      
          if (response.ok) {
            const data = await response.json();
            setBalance(data.newBalance);
          } else {
            console.log('Failed to update balance');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    return (
    <div>
        <h1>Steam 2.0</h1>
        <h3>Balance</h3>
        <h3>Balance: ${balance}</h3>
        <button onClick={handleAddMoney}>+ Add Money</button>
    </div>
    
    );
}
export default Home