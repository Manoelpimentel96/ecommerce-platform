import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

function FeaturedProducts() {
  return (
    <section
      id="destaques"
      className="border-b border-slate-200 bg-white"
      aria-labelledby="featured-products-title"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
              Destaques
            </span>

            <h2
              id="featured-products-title"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              Produtos em destaque
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
              Confira produtos selecionados para facilitar sua escolha e encontrar o que combina com
              você.
            </p>
          </div>

          <Link
            to="/produtos"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4"
          >
            Ver todos os produtos
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
          aria-label="Produtos em destaque"
        >
          {products.map((product) => (
            <div key={product.id} className="w-[82%] shrink-0 snap-start sm:w-auto">
              <ProductCard
                category={product.category}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
