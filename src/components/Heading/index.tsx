type HeadingProps = {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export default function Heading({
  children,
  level,
  className,
  ...props
}: HeadingProps) {
  const baseStyle = 'font-bold text-4xl text-gray-900'
  const sizeStyle = {
    h1: 'text-4xl xl:text-5xl 2xl:text-6',
    h2: 'text-3xl xl:text-4xl 2xl:text-5xl',
    h3: 'text-2xl xl:text-3xl 2xl:text-4xl',
    h4: 'text-xl xl:text-2xl 2xl:text-3xl',
    h5: 'text-lg xl:text-xl 2xl:text-2xl',
    h6: 'text-base xl:text-lg 2xl:text-xl'
  }
  const Tag = `h${level}` as keyof JSX.IntrinsicElements // Create the heading tag dynamically
  const classes = `${baseStyle} ${sizeStyle[`h${level}`]} ${className}`

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
