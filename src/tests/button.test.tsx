import { render, screen } from "@testing-library/react"
import Button from "../components/button"

test("button render", () => {
  render(<Button text="test" isRed />)
  screen.debug()
  expect(screen.getByText("test")).toBeInTheDocument()
})
