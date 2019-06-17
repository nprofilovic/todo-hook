import React, { useState } from 'react'
import ResourecList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [resource, setResource] = useState('posts')
    return (
        <div>
            <UserList />
            <div>
                <button onClick={() => setResource('posts')}> Posts</button>
                <button onClick={() => setResource('todos ')}>Todos</button>
                
            </div>
            <ResourecList resource = {resource} />
        </div>
    )
}

export default App
