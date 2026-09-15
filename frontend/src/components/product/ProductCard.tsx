import { ShoppingCart } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'

interface ProductCardProps {
  category: string
  name: string
  description: string
  price: number
  image?: string
}

function ProductCard({ category, name, description, price, image }: ProductCardProps) {
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-sky-50"
          >
            <span className="text-sm font-medium text-slate-400">Imagem do produto</span>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-lg font-semibold leading-6 text-slate-950 transition-colors duration-300 group-hover:text-sky-700">
          {name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{description}</p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Por apenas
            </span>

            <p className="mt-1 text-xl font-bold tracking-tight text-slate-950">{formattedPrice}</p>
          </div>

          <button
            type="button"
            aria-label={`Adicionar ${name} ao carrinho`}
            className={buttonVariants({
              variant: 'default',
              size: 'sm',
              className:
                'shrink-0 gap-2 bg-slate-950 px-3.5 text-white hover:bg-sky-500 hover:text-slate-950',
            })}
          >
            <ShoppingCart className="size-4" aria-hidden="true" />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
