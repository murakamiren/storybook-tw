import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import Button from "../components/button"

export default { component: Button } as ComponentMeta<typeof Button>

export const Index: ComponentStoryObj<typeof Button> = {
  args: {
    text: "hello storybook"
  }
}
