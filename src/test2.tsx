import { useState, useEffect } from "react"

const TestComponent = (() => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("dddd")
  }, [count]);
  return (
    <div>
      <button onClick={() =>
        setCount(count + 1)
      }>
        asdfgh
      </button>

    </div >
  )

})

export default TestComponent;