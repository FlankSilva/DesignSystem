import { ComponentProps, ElementType } from 'react'

import { ButtonContainer } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  as?: ElementType
}

export const Button = ({ as, ...props }: ButtonProps) => {
  return <ButtonContainer as={as} {...props} />
}
