import type { StoryObj, Meta } from '@storybook/react'
import { Loading, LoadingProps } from '@flank-ignite-ui/react'

export default {
  title: 'Surfaces/Loading',
  component: Loading,

  args: {},
} as Meta<LoadingProps>

export const Primary: StoryObj<LoadingProps> = {}
