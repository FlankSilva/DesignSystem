import { ComponentProps } from 'react'

import { LoadingContainer } from './styles'

export interface LoadingProps extends ComponentProps<typeof LoadingContainer> {}

export const Loading = (props: LoadingProps) => {
  return <LoadingContainer {...props}></LoadingContainer>
}
