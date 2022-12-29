import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@flank-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,

  args: {},
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your description',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextAreaProps> = {
  args: {
    prefix: 'cal.com',
  },
}

export const InsideABox: StoryObj<TextAreaProps> = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label">
          <Text size="sm">Description</Text>
          {Story()}
        </Box>
      )
    },
  ],
}
