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
        `border rounded-full text-sm font-extralight cursor-pointer px-3 py-1`,
        disabled
          ? 'opacity-50 text-white/40'
          : 'opacity-80 text-white/80',
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