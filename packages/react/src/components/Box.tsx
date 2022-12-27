import { ComponentProps } from 'react'
import { styled } from '../styles'

const BoxContainer = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',

  display: 'flex',

  variants: {
    variant: {
      flexColumn: {
        flexDirection: 'column',
      },
    },
  },
})

export interface BoxProps extends ComponentProps<typeof BoxContainer> {
  prefix?: string
}

export const Box = (props: BoxProps) => {
  return <BoxContainer {...props}></BoxContainer>
}
