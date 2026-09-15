import { ArrowRight, Home, Laptop, Monitor, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Eletrônicos',
    description: 'Tecnologia e dispositivos para o seu dia a dia.',
    icon: Smartphone,
  },
  {
    name: 'Informática',
    description: 'Computadores, periféricos e acessórios.',
    icon: Monitor,
  },
  {
    name: 'Casa',
    description: 'Produtos para deixar sua casa mais completa.',
    icon: Home,
  },
  {
    name: 'Acessórios',
    description: 'Itens essenciais para sua rotina.',
    icon: Laptop,
  },
]

function Categories() {
  return (
    <section
      id="categorias"
      className="border-y border-slate-200 bg-white"
      aria-labelledby="categories-title"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
              Categorias
            </span>

            <h2
              id="categories-title"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              Explore por categoria
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
              Encontre rapidamente os produtos que combinam com o que você procura.
            </p>
          </div>

          <Link
            to="/produtos"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 sm:inline-flex"
          >
            Ver todos os produtos
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
          aria-label="Categorias de produtos"
        >
          {categories.map((category) => {
            const Icon = category.icon

            return (
              <Link
                key={category.name}
                to="/produtos"
                className="group min-w-[82%] shrink-0 snap-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 sm:min-w-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-600">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>

                  <ArrowRight
                    className="size-5 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-500"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-950">{category.name}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">{category.description}</p>

                <span className="mt-5 inline-flex items-center text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-sky-600">
                  Explorar categoria
                </span>
              </Link>
            )
          })}
        </div>

        <Link
          to="/produtos"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 sm:hidden"
        >
          Ver todos os produtos
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export default Categories
