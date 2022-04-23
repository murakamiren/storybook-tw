import { FC } from "react"

type ButtonProps = {
  text: string
}

const Button: FC<ButtonProps> = ({ text }) => (
  <div>
    <button type="button">{text}</button>
  </div>
)

export default Button
