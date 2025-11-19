import React, { useState } from 'react'
import logoImg from '../logo/logo.jpeg'
import Button from './Button'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

export default function Navbar({ t = {}, locale = 'en', onToggleLocale, theme = 'dark', onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-40">
      <div className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className={
            `mt-4 rounded-3xl border shadow-2xl flex items-center justify-between px-6 py-4 ` +
            (theme === 'dark'
              ? 'border-white/15 bg-[#11110d] shadow-[#11110d]/40 text-white'
              : 'border-[#342d24]/10 bg-white shadow-[#11110d]/10 text-[#11110d]')
          }>
            <div className="flex items-center gap-3">
              {/* logo image (place logo.jpeg in public/ or at /logo.jpeg). Falls back to NG badge when missing */}
              <div className="relative w-11 h-11">
                {/* fallback badge shown when image isn't available (placed first so image overlays it) */}
                <div className="w-11 h-11 rounded-lg bg-[#bd915a] flex items-center justify-center text-[#11110d] font-bold">NG</div>

                {/* bundled logo from src/logo/logo.jpeg */}
                <img
                  src={logoImg}
                  alt="Noor Group logo"
                  className="absolute inset-0 w-full h-full rounded-lg object-cover"
                />
              </div>

              <div>
                <div className={theme === 'dark' ? 'font-semibold text-white' : 'font-semibold text-[#11110d]'}>Noor Group</div>
                <div className={theme === 'dark' ? 'text-xs text-white/70' : 'text-xs text-[#11110d]/70'}>Eco-system</div>
              </div>
            </div>

            <nav className={
              'hidden md:flex items-center gap-6 ' +
              (theme === 'dark' ? 'text-white/90' : 'text-[#11110d]')
            }>
              <a className="hover:text-[#bd915a] transition-colors" href="https://noortolearn.com" target="_blank" rel="noopener noreferrer">{t.nav?.learn ?? 'Learn'}</a>
              <a className="hover:text-[#bd915a] transition-colors" href="https://noortoshop.com" target="_blank" rel="noopener noreferrer">{t.nav?.shop ?? 'Shop'}</a>
              <a className="hover:text-[#bd915a] transition-colors" href="https://noortomark.com" target="_blank" rel="noopener noreferrer">{t.nav?.agence ?? 'Agence'}</a>
            </nav>

            <div className="hidden md:flex items-center">
              <LanguageToggle locale={locale} onToggle={onToggleLocale} theme={theme} />
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>

            <div className="md:hidden">
              <Button
                variant="solid"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="text-sm px-5"
              >
                {open ? 'Close' : 'Menu'}
              </Button>
            </div>
          </div>

          {/* Mobile menu (simple collapsible panel) */}
          <div id="mobile-menu" className={`md:hidden mt-3 transition-all ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {open && (
              <div className={
                `glass-panel p-4 rounded-2xl border ${theme === 'dark' ? 'dark' : ''}`
              }>
                <nav className="flex flex-col gap-3">
                  <a onClick={() => setOpen(false)} className="block hover:text-[#bd915a] transition-colors" href="https://noortolearn.com" target="_blank" rel="noopener noreferrer">{t.nav?.learn ?? 'Learn'}</a>
                  <a onClick={() => setOpen(false)} className="block hover:text-[#bd915a] transition-colors" href="https://noortoshop.com" target="_blank" rel="noopener noreferrer">{t.nav?.shop ?? 'Shop'}</a>
                  <a onClick={() => setOpen(false)} className="block hover:text-[#bd915a] transition-colors" href="https://noortomark.com" target="_blank" rel="noopener noreferrer">{t.nav?.agence ?? 'Agence'}</a>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                  <LanguageToggle locale={locale} onToggle={(val) => { onToggleLocale?.(val); setOpen(false) }} theme={theme} />
                  <ThemeToggle theme={theme} onToggle={() => { onToggleTheme?.(); setOpen(false) }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}