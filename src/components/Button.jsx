import React from 'react'

// Button renders a native <button> by default.
// If `href` is provided it renders an <a> so buttons can be used for navigation
// (external links will open in a new tab unless `target` is overridden).
export default function Button({ children, variant = 'solid', className = '', href, target, ...props }) {
  const base = 'inline-flex items-center gap-2 rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-noor-500 focus:ring-offset-white dark:focus:ring-offset-noor-900';
  const variants = {
    solid: 'bg-[#11110d] text-white hover:bg-[#342d24] dark:bg-[#7c6c5b] dark:hover:bg-[#bd915a] dark:text-white px-6 py-2 shadow-sm hover:shadow-md',
    gold: 'bg-[#bd915a] text-[#11110d] hover:bg-[#7d5a34] hover:text-white px-6 py-2 shadow-sm hover:shadow-md',
    ghost: 'bg-transparent text-[#11110d] dark:text-white hover:bg-[#11110d]/5 dark:hover:bg-white/10 px-4 py-2 border border-[#11110d]/20 dark:border-white/5',
  }

  const classes = `${base} ${variants[variant] ?? variants.solid} ${className}`.trim()

  if (href) {
    return (
      <a href={href} target={target ?? '_blank'} rel={target === '_self' ? undefined : 'noopener noreferrer'} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
