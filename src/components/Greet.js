import React from "react";
//传递props, props is immutable
const Greet = (props) =>
    <div>
        <h1>
            hello {props.name}, {props.firstName};
        </h1>
        {props.children} //this is used to render the child parts in the close tag.
    </div>
//ES5:
// function Greet(){
//     return <h1>
//         helloworld
//     </h1>
// }

export default Greet;


//Destructuring props and state:
// const Greet = ({name, firstName}) =>
//     <div>
//         <h1>
//             hello {name}, {firstName};
//         </h1>
//         {/* {props.children} //this is used to render the child parts in the close tag. */}
//     </div>

// Second way of destructuring:
// const Greet = props =>{
//     const {name, fisrtname} = props

// }
