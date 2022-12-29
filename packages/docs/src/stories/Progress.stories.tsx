import type { StoryObj, Meta } from '@storybook/react'
import { Progress, ProgressProps } from '@flank-ignite-ui/react'

export default {
  title: 'Surfaces/Progress',
  component: Progress,

  args: {},
} as Meta<ProgressProps>

export const Primary: StoryObj<ProgressProps> = {
  args: {
    progress: 50,
    color: 'blue',
    height: '30px',
  },
}
