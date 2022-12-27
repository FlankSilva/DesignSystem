import { MultiStepContainer, Label, Steps, Step } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export const MultiStep = ({
  size = 0,
  currentStep = 0,
  ...props
}: MultiStepProps) => {
  return (
    <MultiStepContainer {...props}>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps
        css={{
          '--steps-size': size,
        }}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
