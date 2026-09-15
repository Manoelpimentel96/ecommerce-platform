import { ArrowRight, Mail } from 'lucide-react'

function Newsletter() {
  return (
    <section
      id="newsletter"
      className="border-b border-slate-200 bg-slate-50"
      aria-labelledby="newsletter-title"
    >
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-8 text-center shadow-sm sm:px-8 lg:px-10">
          <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
            <Mail className="size-5" aria-hidden="true" />
          </div>

          <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
            Newsletter
          </span>

          <h2
            id="newsletter-title"
            className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
          >
            Receba nossas novidades
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Receba novidades, ofertas e conteúdos especiais diretamente no seu e-mail.
          </p>

          <form className="mx-auto mt-6 flex max-w-2xl flex-col gap-2.5 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Seu melhor e-mail
            </label>

            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              autoComplete="email"
              required
              className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-500 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Assinar newsletter
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </form>

          <p className="mt-3 text-xs text-slate-400">
            Você poderá cancelar sua inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
