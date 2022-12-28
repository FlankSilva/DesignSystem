import { styled } from '../../styles'

export const ModalContainer = styled('div', {
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0 ,0 ,0 , 0.8)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ModalContent = styled('div', {
  boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.4)',
  background: '$white',
  borderRadius: '10px',
  padding: '10px',

  position: 'relative',
  top: '-20%',
})

export const ModalHeader = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
})

export const ModalContainerButtonClosed = styled('div', {
  cursor: 'pointer',
  padding: '2px',
})

export const ModalButtonClosed = styled('button', {
  border: 'none',
  background: '$white',
  outline: 'none',

  position: 'relative',
  top: '-13px',
  cursor: 'pointer',

  '&::before, &::after': {
    content: '',
    position: 'absolute',
    width: '1.5px',
    height: '15px',
    background: '$gray900',
  },

  '&::before': {
    transform: 'rotate(45deg)',
  },

  '&::after': {
    transform: 'rotate(-45deg)',
  },
})

export const ModalBody = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
