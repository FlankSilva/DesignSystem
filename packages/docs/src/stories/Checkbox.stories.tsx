import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Ckeckbox',
  component: Checkbox,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box css={{ gap: '$2' }}>
          {Story()}
          <Text size='sm'>
            Accept terms of use
          </Text>
        </Box>
      )
    }
  ]
 
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {}
}
