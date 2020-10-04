//shortcut:rfce

import React from 'react'

function functionClick() {

    function clickHandler(){
        console.log("button clickted")
    }
//加不加（）代表function call: 会不会一开始就initial click handlehaer
    return (
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}

export default functionClick
