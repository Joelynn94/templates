type HeadingProps = {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  props?: any
}

export default function Heading({
  children,
  level,
  className,
  ...props
}: HeadingProps) {
  const baseStyle = 'font-bold text-4xl text-gray-900'
  const sizeStyle = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base'
  }
  const Tag = `h${level}` as keyof JSX.IntrinsicElements // Create the heading tag dynamically
  const classes = `${baseStyle} ${sizeStyle[`h${level}`]} ${className}`

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
