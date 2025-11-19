import React from 'react'

export default function Footer({ t = {} }) {
  return (
    <footer className="mt-12 mb-10 px-6 text-[#11110d] dark:text-white">
      <div className="max-w-6xl mx-auto glass-panel rounded-2xl border border-[#342d24]/10 dark:border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-[#11110d] dark:text-white">{t.footer?.company ?? 'Noor Group'}</div>
          <div className="text-sm text-[#11110d]/70 dark:text-white/70">{t.footer?.tagline ?? 'Building sustainable learning & commerce'}</div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#11110d] dark:text-white hover:text-[#bd915a]">Instagram</a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#11110d] dark:text-white hover:text-[#bd915a]">Facebook</a>
          <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#11110d] dark:text-white hover:text-[#bd915a]">LinkedIn</a>
        </div>

        <div className="text-sm text-[#11110d]/70 dark:text-white/70">© {new Date().getFullYear()} {t.footer?.company ?? 'Noor Group'} — All rights reserved</div>
      </div>
    </footer>
  )
}