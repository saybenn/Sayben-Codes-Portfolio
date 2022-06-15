import Image from 'next/image'
import { CSSProperties } from 'react'
interface Props {
  src: string
  lay: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | 'raw' | undefined
  width: number | undefined
  height: number | undefined
  styling: CSSProperties | undefined
}
const ImageComp = ({ src, lay, width, height, styling }: Props) => {
  return (
    <Image
      style={styling}
      layout={lay}
      src={src}
      width={width}
      height={height}
    />
  )
}

export default ImageComp
