import React from 'react'

export default function Card({ title, children, className = '' }) {
  return (
    <div className={`glass-panel border border-[#342d24]/10 dark:border-white/10 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {title && <h3 className="text-lg font-semibold text-[#11110d] dark:text-white mb-2">{title}</h3>}
      <div className="text-sm text-[#11110d]/90 dark:text-white/90">{children}</div>
    </div>
  )
}