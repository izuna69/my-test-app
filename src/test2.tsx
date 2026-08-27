import { useState, useEffect } from "react"

const TestComponent = (() => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("dddd")
  }, [count]);
  return (
    <div>

    </div >
  )

})

export default TestComponent;