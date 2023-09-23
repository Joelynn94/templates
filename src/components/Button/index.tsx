type ButtonProps = {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'default',
  size = 'md',
  className,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyle =
    'inline-flex items-center px-6 py-3 font-medium text-white rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
  const sizeStyle = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }
  const variantStyle = {
    default: 'bg-indigo-950 hover:opacity-70 focus:ring-indigo-950',
    primary:
      'bg-gradient-to-b from-orange-400 to-pink-500 focus:ring-orange-400 hover:opacity-70',
    secondary:
      'bg-gradient-to-b from-purple-500 to-pink-500 hover:opacity-70 focus:ring-purple-500'
  }
  const classes = `${baseStyle} ${sizeStyle[size]} ${variantStyle[variant]} ${className}`
  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
