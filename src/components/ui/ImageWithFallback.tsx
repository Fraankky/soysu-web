import { useState } from 'react'

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackColor?: string
}

export function ImageWithFallback({ src, alt, fallbackColor = '#EDE4D3', className, style, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <div
        className={className}
        style={{ backgroundColor: fallbackColor, ...style }}
        role="img"
        aria-label={alt}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      {...props}
    />
  )
}
