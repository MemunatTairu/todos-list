import React, {useState}from 'react'

function HookCounterTwo() {
    const  initialCount = 0
    const [count, setCount] = useState(initialCount)
    function IncrementFive(){
        for(let i = 0; i < 5; i++){
            
        }
    }
  return (
    <div>
      Count: {count}
      <button onClick={()=> setCount(initialCount)}>Reset</button>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <button onClick={()=> setCount(count - 1)}>Decrement</button>
      <button onClick={IncrementFive}>Increment 5</button>
    
    </div>
  )
}

export default HookCounterTwo
