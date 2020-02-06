import React, { useState } from 'react'

function Counter({ value = 0 }) {
  const [count, setCount] = useState(value)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Counter
