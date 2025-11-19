import React from 'react'

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
]

export default function LanguageToggle({ locale, onToggle, theme }) {
  const isDark = theme === 'dark';
  return (
    <select
      value={locale}
      onChange={(e) => onToggle?.(e.target.value)}
      aria-label="Choose language"
      style={{ 
        backgroundColor: isDark ? '#11110d' : '#ffffff',
        color: isDark ? '#ffffff' : '#11110d'
      }}
      className={
        `ml-3 text-sm px-3 py-1.5 rounded-full border focus:outline-none ` +
        (isDark
          ? 'border-white/30 hover:border-white/60'
          : 'border-[#11110d]/20 hover:border-[#11110d]/40')
      }
    >
      {LANGS.map((l) => (
        <option key={l.code} value={l.code} style={{ backgroundColor: isDark ? '#11110d' : '#ffffff', color: isDark ? '#ffffff' : '#11110d' }}>{l.label}</option>
      ))}
    </select>
  )
}
