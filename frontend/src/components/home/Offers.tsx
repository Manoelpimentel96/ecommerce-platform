import { ArrowRight, Percent } from 'lucide-react'
import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/ui/button'

const offers = [
  {
    id: 1,
    category: 'Áudio',
    name: 'Fone de ouvido Bluetooth',
    description: 'Qualidade de som e liberdade para acompanhar sua rotina.',
    oldPrice: 299.9,
    price: 199.9,
    discount: 33,
  },
  {
    id: 2,
    category: 'Informática',
    name: 'Teclado mecânico',
    description: 'Precisão, conforto e desempenho para trabalho e estudos.',
    oldPrice: 449.9,
    price: 329.9,
    discount: 27,
  },
  {
    id: 3,
    category: 'Acessórios',
    name: 'Mochila urbana',
    description: 'Praticidade e organização para transportar seus equipamentos.',
    oldPrice: 249.9,
    price: 179.9,
    discount: 28,
  },
]

function formatPrice(price: number) {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function Offers() {
  return (
    <section
      id="ofertas"
      className="border-b border-slate-800 bg-slate-950 text-white"
      aria-labelledby="offers-title"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
              <Percent className="size-4" aria-hidden="true" />
              Ofertas
            </span>

            <h2
              id="offers-title"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Aproveite nossas ofertas
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              Produtos selecionados com condições especiais para você aproveitar enquanto durarem as
              ofertas.
            </p>
          </div>

          <Link
            to="/ofertas"
            className={buttonVariants({
              variant: 'outline',
              size: 'default',
              className:
                'w-fit shrink-0 border-slate-700 bg-transparent text-white hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950',
            })}
          >
            Ver todas as ofertas
            <ArrowRight className="ml-1 size-4" aria-hidden="true" />
          </Link>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
          aria-label="Ofertas em destaque"
        >
          {offers.map((offer) => (
            <article
              key={offer.id}
              className="group flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-950/30 sm:w-auto"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-sky-950/40">
                <div
                  aria-hidden="true"
                  className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-500 transition-transform duration-500 group-hover:scale-105"
                >
                  Imagem do produto
                </div>

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />

                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-sky-400 px-3 py-1.5 text-xs font-bold text-slate-950 shadow-lg shadow-sky-950/20">
                  <Percent className="size-3.5" aria-hidden="true" />-{offer.discount}%
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-400">
                  {offer.category}
                </span>

                <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-6 text-white">
                  {offer.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
                  {offer.description}
                </p>

                <div className="mt-auto pt-6">
                  <span className="text-sm text-slate-500 line-through">
                    {formatPrice(offer.oldPrice)}
                  </span>

                  <div className="mt-1 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Por apenas
                      </span>

                      <p className="mt-1 text-xl font-bold tracking-tight text-white">
                        {formatPrice(offer.price)}
                      </p>
                    </div>

                    <Link
                      to="/produtos"
                      className={buttonVariants({
                        variant: 'default',
                        size: 'sm',
                        className: 'shrink-0 bg-sky-400 text-slate-950 hover:bg-sky-300',
                      })}
                    >
                      Aproveitar
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
