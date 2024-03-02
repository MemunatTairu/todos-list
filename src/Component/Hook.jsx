import React, { useState } from 'react'

function Hook() {
    const [count, setCount] = useState(1)
  return (
    <div>
      <button onClick={() =>setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default Hook
