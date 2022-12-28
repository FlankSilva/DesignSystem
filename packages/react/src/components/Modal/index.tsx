import { ReactElement } from 'react'
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalContainerButtonClosed,
  ModalButtonClosed,
} from './styles'

export interface ModalProps {
  id: string
  width?: string
  isOpenModal: 'open' | 'closed'
  children: ReactElement | ReactElement[]
  onClosed: () => void
}

export const Modal = ({
  id,
  width = '100%',
  onClosed,
  children,
}: ModalProps) => {
  const handleOutsideClick = (idModal: string) => {
    if (idModal === id) onClosed()
  }

  return (
    <ModalContainer id={id} onClick={() => handleOutsideClick(id)}>
      <ModalContent style={{ width }}>
        <ModalHeader>
          <ModalContainerButtonClosed>
            <ModalButtonClosed />
          </ModalContainerButtonClosed>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalContainer>
  )
}
