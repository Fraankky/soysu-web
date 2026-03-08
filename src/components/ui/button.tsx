import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-(--color-green) text-white rounded-(--radius-pill) hover:bg-(--color-green-dark) focus-visible:ring-(--color-green)',
        secondary:
          'bg-(--color-yellow) text-(--color-brown) rounded-(--radius-pill) hover:brightness-95 focus-visible:ring-(--color-yellow)',
        ghost:
          'bg-transparent border-2 border-(--color-green) text-(--color-green) rounded-(--radius-pill) hover:bg-(--color-green) hover:text-white',
        outline:
          'bg-transparent border-2 border-(--color-brown) text-(--color-brown) rounded-(--radius-pill) hover:bg-(--color-brown) hover:text-white',
        link: 'text-(--color-green) underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
