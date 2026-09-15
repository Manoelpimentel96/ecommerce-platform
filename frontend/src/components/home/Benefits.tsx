import { ArrowRight, RotateCcw, ShieldCheck, Truck } from 'lucide-react'

const benefits = [
  {
    icon: Truck,
    title: 'Entrega segura',
    description: 'Receba seus pedidos com segurança e acompanhamento.',
  },
  {
    icon: ShieldCheck,
    title: 'Compra segura',
    description: 'Seus dados protegidos durante toda a experiência de compra.',
  },
  {
    icon: RotateCcw,
    title: 'Troca fácil',
    description: 'Processo simples e facilitado quando você precisar.',
  },
]

function Benefits() {
  return (
    <section
      id="beneficios"
      className="border-b border-slate-200 bg-white"
      aria-labelledby="benefits-title"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            Benefícios
          </span>

          <h2
            id="benefits-title"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Uma experiência pensada para você
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Mais praticidade, segurança e tranquilidade em cada etapa da sua compra.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <article
                key={benefit.title}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 sm:p-7"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-600">
                  <Icon className="size-5" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-slate-950">{benefit.title}</h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>

                <div className="mt-5 flex items-center justify-center gap-1 text-xs font-semibold text-slate-400 transition-colors duration-300 group-hover:text-sky-600">
                  Saiba mais
                  <ArrowRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
