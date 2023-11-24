import React, { useRef, useState } from 'react';

export default function App() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const inputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        const enteredUsername = inputRef.current.value;
        console.log('Потребителско име:', enteredUsername);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '20%', textAlign: 'center' }}>
                    <label>Потребителско име</label>
                    <input
                        type='text'
                        value={userName}
                        ref={inputRef}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label>Парола</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>Изпрати</button>
                </div>
            </form>
        </div>
    );
}