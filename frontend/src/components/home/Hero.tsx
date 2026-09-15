import { Link } from 'react-router-dom'

import HeroCarousel from '@/components/home/HeroCarousel'
import { buttonVariants } from '@/components/ui/button'
import { heroBanners } from '@/data/heroBanners'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-slate-800 bg-slate-950 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            Nova coleção
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tudo o que você procura em um só lugar.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Explore produtos selecionados, compare opções e tenha uma experiência de compra simples,
            moderna e segura.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/produtos"
              className={buttonVariants({
                variant: 'default',
                size: 'lg',
                className:
                  'h-auto border border-sky-300 bg-sky-400 px-5 py-3 font-semibold text-slate-950 ' +
                  'shadow-lg shadow-sky-950/30 transition-all duration-300 ' +
                  'hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-300 hover:shadow-xl hover:shadow-sky-950/40 ' +
                  'focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 ' +
                  'focus-visible:ring-offset-slate-950',
              })}
            >
              Explorar produtos
            </Link>

            <Link
              to="/ofertas"
              className={buttonVariants({
                variant: 'outline',
                size: 'lg',
                className:
                  'h-auto border-slate-700 bg-slate-900/60 px-5 py-3 text-slate-100 ' +
                  'backdrop-blur-sm transition-all duration-300 ' +
                  'hover:-translate-y-0.5 hover:border-sky-400/60 hover:bg-slate-800 hover:text-white ' +
                  'focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 ' +
                  'focus-visible:ring-offset-slate-950',
              })}
            >
              Ver ofertas
            </Link>
          </div>
        </div>

        <div className="w-full">
          <HeroCarousel banners={heroBanners} />
        </div>
      </div>
    </section>
  )
}

export default Hero
