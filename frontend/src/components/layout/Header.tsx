import { Heart, Menu, Search, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="relative z-50 border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="min-w-0 shrink text-lg font-bold tracking-tight text-white transition-colors hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-xl"
          aria-label="E-commerce Platform - Início"
        >
          <span className="block truncate">E-commerce Platform</span>
        </Link>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-slate-300">
            <li>
              <Link
                to="/"
                className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Início
              </Link>
            </li>

            <li>
              <a
                href="/#categorias"
                className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Categorias
              </a>
            </li>

            <li>
              <Link
                to="/produtos"
                className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Produtos
              </Link>
            </li>

            <li>
              <a
                href="/#beneficios"
                className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Benefícios
              </a>
            </li>
          </ul>
        </nav>

        {/* Ações desktop */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label="Buscar produtos"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Search className="size-4" aria-hidden="true" />
            <span>Busca</span>
          </button>

          <button
            type="button"
            aria-label="Ver favoritos"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 transition-all hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Heart className="size-5" aria-hidden="true" />
          </button>

          <Link
            to="/carrinho"
            aria-label="Ver carrinho"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 transition-all hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <ShoppingCart className="size-5" aria-hidden="true" />
          </Link>

          <Link
            to="/login"
            className="ml-2 inline-flex items-center rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Entrar
          </Link>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex shrink-0 items-center justify-center rounded-md p-2 text-slate-300 transition-all hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:hidden"
        >
          {isMenuOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu mobile — sobreposto ao conteúdo */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-slate-800 bg-slate-950 shadow-2xl md:hidden"
        >
          <nav aria-label="Navegação mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  Início
                </Link>
              </li>

              <li>
                <a
                  href="/#categorias"
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  Categorias
                </a>
              </li>

              <li>
                <Link
                  to="/produtos"
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  Produtos
                </Link>
              </li>

              <li>
                <a
                  href="/#beneficios"
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  Benefícios
                </a>
              </li>

              <li className="my-2 border-t border-slate-800" />

              <li>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  <Search className="size-5" aria-hidden="true" />
                  Busca
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  <Heart className="size-5" aria-hidden="true" />
                  Favoritos
                </button>
              </li>

              <li>
                <Link
                  to="/carrinho"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  <ShoppingCart className="size-5" aria-hidden="true" />
                  Carrinho
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-center rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-white transition-all hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950"
                >
                  Entrar
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
