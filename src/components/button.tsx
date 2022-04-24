import { FC } from "react"
import "./button.css"

type ButtonProps = {
  text: string
}

const Button: FC<ButtonProps> = ({ text }) => (
  <div>
    <button type="button">{text}</button>
  </div>
)

export default Button
