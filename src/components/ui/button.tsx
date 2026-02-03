import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: React.ReactNode
}

export function Button({ 
  size = 'md', 
  asChild = false, 
  className = '', 
  children,
  ...props 
}: ButtonProps) {
  const sizeClasses = {
    sm: 'h-8 text-sm px-4',
    md: 'h-10 text-base px-6',
    lg: 'h-12 text-lg px-8',
  }

  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${className}`

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${combinedClasses} ${children.props.className || ''}`,
      ...props,
    })
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
