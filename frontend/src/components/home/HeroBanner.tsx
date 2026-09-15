import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'

export interface HeroBannerProps {
  eyebrow: string
  title: string
  description: string
  actionLabel: string
  actionHref: string
  image?: string
}

interface HeroBannerComponentProps extends HeroBannerProps {
  isActive?: boolean
}

function HeroBanner({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  image,
  isActive = true,
}: HeroBannerComponentProps) {
  return (
    <article
      className="relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900 text-white shadow-2xl shadow-slate-950/40 sm:min-h-[360px]"
      aria-hidden={!isActive}
    >
      {image && (
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-40" />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/10" />
        </div>
      )}

      {!image && (
        <>
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"
          />
        </>
      )}

      <div className="relative z-20 flex min-h-[320px] flex-col justify-between p-6 sm:min-h-[360px] sm:p-8 lg:p-9">
        <div className="max-w-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            {eyebrow}
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-7">
          <Link
            to={actionHref}
            tabIndex={isActive ? 0 : -1}
            className={buttonVariants({
              variant: 'default',
              size: 'lg',
              className:
                'h-auto border border-sky-300 bg-sky-400 px-5 py-3 font-semibold text-slate-950 ' +
                'shadow-lg shadow-slate-950/30 transition-all duration-300 ' +
                'hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-xl ' +
                'active:translate-y-0 active:scale-[0.98] ' +
                'focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 ' +
                'focus-visible:ring-offset-slate-900',
            })}
          >
            {actionLabel}
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-3xl ring-1 ring-inset ring-white/5"
      />
    </article>
  )
}

export default HeroBanner