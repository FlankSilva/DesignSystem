import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  prefix?: string
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check width="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
