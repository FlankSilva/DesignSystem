import { keyframes, styled } from '../../styles'

const spin = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
})

export const LoadingContainer = styled('div', {
  border: '8px solid rgba(0, 0, 0, 0.1)',
  borderLeftColor: '$gray500',
  height: '40px',
  width: '40px',
  borderRadius: '50%',

  animation: `${spin} 1s linear infinite`,
})
