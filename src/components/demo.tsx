import { FC, useState } from "react"
import Button from "./button"

const Demo: FC = () => {
  const [count, setCount] = useState<number>(0)

  const handleCount = () => {
    setCount((pre) => pre + 1)
  }

  return (
    <div className="flex flex-col items-center">
      <h1>this is demo</h1>
      <Button text="click me" onClick={handleCount} isRed />
      <p>{count}</p>
    </div>
  )
}

export default Demo
