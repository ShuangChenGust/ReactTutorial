import React from 'react';
//create the key value pairs

const Hello = () => {
    return React.createElement(
        'div',
        {id:'hello', className:'dummy'},
        React.createElement(`h1`, null, 'HelloShuang')
    )
}

export default Hello;