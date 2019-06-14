import React, { useState } from 'react'
import ResourecList from './ResourceList';

const App = () => {
    const [resource, setResource] = useState('posts')
    return (
        <div>
            <div>
                <button onClick={() => setResource('posts')}> Posts</button>
                <button onClick={() => setResource('todos ')}>Todos</button>
                
            </div>
            <ResourecList resource = {resource} />
        </div>
    )
}

export default App
