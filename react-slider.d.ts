declare module 'react-slider' {
  import type { ComponentType } from 'react'

  export interface ReactSliderProps {
    value?: number | readonly number[]
    onChange?: (value: number | number[], index: number) => void
    min?: number
    max?: number
    step?: number
    className?: string
    thumbClassName?: string
    trackClassName?: string
  }

  const ReactSlider: ComponentType<ReactSliderProps>
  export default ReactSlider
}
