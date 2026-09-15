import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr_1fr] md:gap-12">
          <div>
            <Link
              to="/"
              className="inline-flex text-lg font-bold tracking-tight text-white transition-colors hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              E-commerce Platform
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Uma experiência de compra simples, segura e moderna.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Navegação
            </h2>

            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-slate-400">
              <a
                href="#inicio"
                className="w-fit transition-colors hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Início
              </a>

              <a
                href="#categorias"
                className="w-fit transition-colors hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Categorias
              </a>

              <a
                href="#destaques"
                className="w-fit transition-colors hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Produtos em destaque
              </a>

              <a
                href="#ofertas"
                className="w-fit transition-colors hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Ofertas
              </a>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Atendimento
            </h2>

            <div className="mt-4 space-y-2.5 text-sm text-slate-400">
              <p>Suporte ao cliente</p>
              <p>Segunda a sexta, das 8h às 18h</p>

              <a
                href="mailto:contato@ecommerce.com"
                className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                contato@ecommerce.com
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-slate-500">
            © 2026 E-commerce Platform. Todos os direitos reservados.
          </p>

          <p className="text-xs text-slate-600">
            Desenvolvido para uma experiência de compra moderna.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
