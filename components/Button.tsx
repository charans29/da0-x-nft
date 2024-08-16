import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react"

function Button({ children, onClick, className,  style}: {
  children: ReactNode,
  onClick: () => void,
  className?: string,
  style?: CSSProperties
}) {
  return (
    <div className={
      cn(`border rounded-full cursor-pointer text-sm font-extralight px-3 py-1 opacity-[0.8] text-white/60`,
      className)} 
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  )
}

export default Button