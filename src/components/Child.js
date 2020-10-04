import React from 'react'

function Child(props ) {
    return (
        <div>
            <button onClick ={() => props.greetHandler('son')}>Greet parent </button>
        </div>
    )
}

export default Child
