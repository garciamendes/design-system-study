import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@lord-ui/react'


const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    )
  ]
}

export default meta