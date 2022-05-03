import { FC } from "react"

type ButtonProps = {
  text: string
  onClick?: () => void
  isRed: boolean
}

const Button: FC<ButtonProps> = ({ text, onClick, isRed }) => (
  <div>
    <button
      type="button"
      className={`py-2 px-4 font-semibold text-black rounded ${
        isRed ? "bg-red-500" : "bg-cyan-500"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  </div>
)

export default Button
