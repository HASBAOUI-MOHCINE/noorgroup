
import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Button from './components/Button'
import Footer from './components/Footer'

const TRANSLATIONS = {
  en: {
    title: 'Noor Group — learning, shop & academy for conscious creators',
    subtitle:
      'Curated learning pathways, sustainable products, and project-based academy cohorts — built for makers who care about impact.',
    featured: 'Featured — Sustainable Goods & Courses',
    joinTitle: 'Join Noor — where learning meets conscious commerce',
    joinSubtitle: 'Start a cohort, buy sustainably, or enroll in our academy.',
    nav: {
      learn: 'Learn',
      shop: 'Shop',
      agence: 'Agency',
      signIn: 'Sign in'
    },
    features: {
      learn: 'Learn',
      shop: 'Shop',
      academy: 'Academy'
    },
    footer: {
      company: 'Noor Group',
      tagline: 'Building sustainable learning & commerce'
    }
  },
  ar: {
    title: 'مجموعة نور — تعلم، متجر وأكاديمية للمبدعين الواعين',
    subtitle: 'مسارات تعليمية ومنتجات مستدامة وبرامج أكاديمية عملية — للمبدعين الذين يهمهم الأثر.',
    featured: 'مميز — منتجات ودورات مستدامة',
    joinTitle: 'انضم إلى نور — حيث يلتقي التعلم بالتجارة الواعية',
    joinSubtitle: 'ابدأ مجموعة، اشترِ بشكل مستدام، أو سجّل في الأكاديمية.',
    nav: {
      learn: 'تعلم',
      shop: 'متجر',
      agence: 'وكالة',
      signIn: 'تسجيل'
    },
    features: {
      learn: 'تعلم',
      shop: 'متجر',
      academy: 'أكاديمية'
    },
    footer: {
      company: 'مجموعة نور',
      tagline: 'بناء التعلم والتجارة المستدامة'
    }
  },
  fr: {
    title: "Noor Group — apprentissage, boutique et académie pour créateurs conscients",
    subtitle: "Parcours d'apprentissage sélectionnés, produits durables et cohortes académiques axées sur des projets — pour les créateurs soucieux d'impact.",
    featured: "En vedette — Produits & Cours durables",
    joinTitle: "Rejoignez Noor — où l'apprentissage rencontre le commerce conscient",
    joinSubtitle: "Lancez une cohorte, achetez de manière durable ou inscrivez-vous à notre académie.",
    nav: {
      learn: 'Apprendre',
      shop: 'Boutique',
      agence: 'Agence',
      signIn: 'Connexion'
    },
    features: {
      learn: 'Apprendre',
      shop: 'Boutique',
      academy: 'Académie'
    },
    footer: {
      company: 'Noor Group',
      tagline: "Construire l'apprentissage et le commerce durables"
    }
  },
  es: {
    title: 'Noor Group — aprendizaje, tienda y academia para creadores conscientes',
    subtitle: 'Rutas de aprendizaje seleccionadas, productos sostenibles y cohortes académicas basadas en proyectos — para creadores que se preocupan por el impacto.',
    featured: 'Destacado — Productos y Cursos Sostenibles',
    joinTitle: 'Únete a Noor — donde el aprendizaje se encuentra con el comercio consciente',
    joinSubtitle: 'Inicia una cohorte, compra de forma sostenible o inscríbete en nuestra academia.',
    nav: {
      learn: 'Aprender',
      shop: 'Tienda',
      agence: 'Agencia',
      signIn: 'Iniciar sesión'
    },
    features: {
      learn: 'Aprender',
      shop: 'Tienda',
      academy: 'Academia'
    },
    footer: {
      company: 'Noor Group',
      tagline: 'Construyendo aprendizaje y comercio sostenible'
    }
  },
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('noor:theme') || 'light' } catch { return 'light' }
  })
  const [locale, setLocale] = useState(() => {
    try { return localStorage.getItem('noor:locale') || 'en' } catch { return 'en' }
  })

  useEffect(() => {
    // apply theme by toggling class on html (Tailwind dark mode uses this class)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('dir', 'ltr')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('dir', 'ltr')
    }
  try { localStorage.setItem('noor:theme', theme) } catch (e) { void e }
  }, [theme])

  useEffect(() => {
    try { localStorage.setItem('noor:locale', locale) } catch (e) { void e }
    // set html lang and dir
    try { document.documentElement.setAttribute('lang', locale); document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr') } catch (e) { void e }
  }, [locale])

  const t = TRANSLATIONS[locale] || TRANSLATIONS.en

  return (
    <div className="app-root font-sans">
      <Navbar t={t} locale={locale} onToggleLocale={(val) => setLocale(val)} theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section className="section-panel grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white dark:bg-[#11110d]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#7c6c5b]/20 dark:border-white/10 bg-[#bd915a]/10 dark:bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#7c6c5b] dark:text-white/70">impact first</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#11110d] dark:text-white leading-tight tracking-tight">{t.title}</h1>
            <p className="mt-6 text-[#11110d] max-w-xl text-lg leading-relaxed dark:text-white/80">{t.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="gold" className="shadow-md" href="https://noortolearn.com">Get started</Button>
              <Button variant="ghost" href="https://noortoshop.com">Explore features</Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="glass-panel p-8 bg-white dark:bg-[#11110d] w-full">
              <div className="w-full h-48 rounded-2xl bg-white dark:bg-white/10 border border-[#11110d]/10 dark:border-white/10 flex items-center justify-center shadow-inner mb-6">
                <div className="text-2xl font-semibold text-[#11110d] dark:text-white text-center">{t.featured}</div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <Card title={t.features.learn}>Curated courses and micro-lessons to grow skills for a sustainable future.</Card>
                <Card title={t.features.shop}>Hand-picked sustainable products from trusted makers.</Card>
                <Card title={t.features.academy}>Cohorts, mentorship, and project-based learning.</Card>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section-panel bg-white dark:bg-[#11110d]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 bg-white dark:bg-[#11110d]">
                <h3 className="text-lg font-semibold text-[#11110d] dark:text-white">Learn</h3>
                <p className="mt-2 text-[#11110d] dark:text-white/80">Short courses, projects and paths tailored to real outcomes.</p>
              </div>
              <div className="glass-panel p-6 bg-white dark:bg-[#11110d]">
                <h3 className="text-lg font-semibold text-[#11110d] dark:text-white">Shop</h3>
                <p className="mt-2 text-[#11110d] dark:text-white/80">Sustainable goods and transparent supply chains.</p>
              </div>
              <div className="glass-panel p-6 bg-white dark:bg-[#11110d]">
                <h3 className="text-lg font-semibold text-[#11110d] dark:text-white">Academy</h3>
                <p className="mt-2 text-[#11110d] dark:text-white/80">Cohorts, mentorship, and applied learning.</p>
              </div>
          </div>
        </section>

	<section id="cta" className="section-panel bg-white dark:bg-[#11110d]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7c6c5b] dark:text-white/70">Cohorts & marketplace</p>
              <h3 className="mt-2 text-3xl font-bold text-[#11110d] dark:text-white">{t.joinTitle}</h3>
              <p className="mt-3 text-[#11110d] dark:text-white/80">{t.joinSubtitle}</p>
            </div>
            <div>
              <Button variant="gold" className="px-8 py-3 text-base" href="https://noortomark.com">Join now</Button>
            </div>
          </div>
        </section>
      </main>

  <Footer t={t} />
    </div>
  )
}

