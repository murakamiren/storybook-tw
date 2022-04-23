import { FC, useState } from "react"
import Button from "./components/button"

const App: FC = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((pre) => pre + 1)
  }

  return (
    <div>
      <p>aaaa</p>
      <button type="button" onClick={handleCount}>
        click
      </button>
      <p>{count}</p>
      <Button text="test" />
    </div>
  )
}

export default App
