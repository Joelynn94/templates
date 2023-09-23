type BodyTextProps = {
  children: React.ReactNode
  size: 'sm' | 'md' | 'lg'
  className?: string
}

export default function BodyText({
  children,
  size = 'md',
  className,
  ...props
}: BodyTextProps) {
  const baseStyle = 'text-slate-500 font-medium leading-6'
  const sizeStyle = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }
  const classes = `${baseStyle} ${sizeStyle[size]} ${className}`

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
