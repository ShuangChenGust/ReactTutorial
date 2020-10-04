import React, {useState} from 'react'

function HookCounter() {
  const initialCount = 0
  const [count, setCount] = useState(0)
  

  const incrementFive = () => {
      for(let i =0; i<5; i++){
        setCount(prevCount => prevCount + 1);
      }
  }
  return (
    <div>
      <button onClick={ () => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setCount(prevCount => prevCount -1)}>Decrease</button>
      <button onClick={incrementFive}>Increment5</button>
    </div>
  )
}

export default HookCounter

//call hooks at the top level.
//only in react functions.