import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,

  args: {},
  
 
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name'
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com'
  }
}

export const InsideABox:StoryObj<TextInputProps> = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text size='sm'>
            Username
          </Text>
          {Story()}
        </Box>
      )
    }
  ]
}