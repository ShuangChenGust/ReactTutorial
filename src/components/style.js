// 1.use CSS StyleSheet
// 2.inline styling
// 3.CSS modules
// 4.CSS in JS library
import './mystyle.css'
import React from 'react'

const styew ={
    fontWeight : "bold"
}

function style() {
    return (
        <div className="primary font-xl">
            <h2 style={styew}>css file</h2>
        </div>
    )
}

export default style
