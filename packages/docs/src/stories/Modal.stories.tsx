import type { StoryObj, Meta } from '@storybook/react'
import { Modal, ModalProps, Text } from '@flank-ignite-ui/react'

export default {
  title: 'Surfaces/Modal',
  component: Modal,

  args: {
    children: (
      <>
        <Text>Testando elemento Modal</Text>
      </>
    ),
    isOpenModal: 'open',
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ModalProps>

export const Primary: StoryObj<ModalProps> = {
  args: {
    width: '400px',
  },
}
