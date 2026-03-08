import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-(--radius-pill) px-3 py-1 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-(--color-green) text-white',
        secondary: 'bg-(--color-yellow) text-(--color-brown)',
        outline: 'border-2 border-(--color-green) text-(--color-green) bg-transparent',
        cream: 'bg-(--color-cream-dark) text-(--color-brown)',
        brown: 'bg-(--color-brown) text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
