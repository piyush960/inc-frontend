import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow hover:from-blue-500 hover:to-blue-600 border border-blue-600/50",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-sm hover:from-red-500 hover:to-red-600 border border-red-600/50",
        outline:
          "border border-blue-500/50 bg-transparent text-blue-500 hover:bg-blue-500/10",
        secondary:
          "bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow hover:from-gray-600 hover:to-gray-700 border border-gray-600/50",
        ghost:
          "bg-transparent text-gray-200 hover:bg-gray-800 hover:text-white",
        link: "text-blue-500 underline-offset-4 hover:underline",
        premium: 
          "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow hover:from-orange-600 hover:to-amber-600 border border-orange-500/50",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 py-2",
        lg: "h-12 px-8 py-3 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }