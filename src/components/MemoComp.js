import React from 'react'

function MemoComp({name}) {
    console.log("render")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
