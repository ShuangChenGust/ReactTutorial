import React from 'react'
//refactor into separate components
function nameList() {
    const names = ['ash', 'gustavo', 'shawn'];
    const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default nameList
