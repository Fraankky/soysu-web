import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn('space-y-3', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-(--color-green)">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-bold text-(--color-brown) sm:text-4xl',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-base text-(--color-brown-soft) leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
