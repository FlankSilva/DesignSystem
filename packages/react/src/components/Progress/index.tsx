import { ProgressContainer, ProgressContent } from './styles'

export interface ProgressProps {
  height?: string
  progress: number
  color: string
}

export const Progress = ({ color, progress, height }: ProgressProps) => {
  return (
    <ProgressContainer style={{ height }}>
      <ProgressContent
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </ProgressContainer>
  )
}
