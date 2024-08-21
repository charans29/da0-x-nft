import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react"

function Button({ children, onClick, className,  style, disabled}: {
  children: ReactNode,
  onClick: () => void,
  className?: string,
  style?: CSSProperties,
  disabled?: boolean
}) {
  return (
    <button 
      className={cn(
        `border rounded-full text-sm font-extralight px-3 py-1`,
        disabled
          ? 'cursor-not-allowed opacity-50 text-white/40'
          : 'cursor-pointer opacity-80 text-white/80',
        className
      )} 
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button