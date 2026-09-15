import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import HeroBanner, { type HeroBannerProps } from './HeroBanner'

export interface HeroCarouselProps {
  banners: HeroBannerProps[]
  autoPlayInterval?: number
}

function HeroCarousel({ banners, autoPlayInterval = 6000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const totalBanners = banners.length

  useEffect(() => {
    if (totalBanners <= 1 || isPaused) {
      return
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % totalBanners)
    }, autoPlayInterval)

    return () => {
      window.clearInterval(interval)
    }
  }, [autoPlayInterval, isPaused, totalBanners])

  if (totalBanners === 0) {
    return null
  }

  const goToPrevious = () => {
    setCurrentIndex((current) => (current === 0 ? totalBanners - 1 : current - 1))
  }

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % totalBanners)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handlePreviousClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    goToPrevious()
  }

  const handleNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    goToNext()
  }

  const handleIndicatorClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    event.preventDefault()
    event.stopPropagation()
    goToSlide(index)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goToPrevious()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goToNext()
    }
  }

  return (
    <div
      className="relative w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Ofertas e destaques"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-3xl">
        {banners.map((banner, index) => {
          const isActive = index === currentIndex

          return (
            <div
              key={`${banner.title}-${index}`}
              className={`transform-gpu transition-[opacity,transform] duration-1000 ease-in-out ${
                isActive
                  ? 'relative translate-x-0 scale-100 opacity-100'
                  : 'pointer-events-none absolute inset-0 translate-x-4 scale-[0.995] opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              <HeroBanner {...banner} isActive={isActive} />
            </div>
          )
        })}
      </div>

      {totalBanners > 1 && (
        <>
          {/* Anterior */}
          <Button
            type="button"
            size="icon"
            onClick={handlePreviousClick}
            aria-label="Banner anterior"
            className="absolute left-4 top-1/2 z-30 h-10 w-10 -translate-y-1/2 cursor-pointer rounded-full border border-white/10 bg-slate-950/60 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-sky-400/50 hover:bg-sky-400 hover:text-slate-950 hover:shadow-sky-950/40 active:scale-95 focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </Button>

          {/* Próximo */}
          <Button
            type="button"
            size="icon"
            onClick={handleNextClick}
            aria-label="Próximo banner"
            className="absolute right-4 top-1/2 z-30 h-10 w-10 -translate-y-1/2 cursor-pointer rounded-full border border-white/10 bg-slate-950/60 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-sky-400/50 hover:bg-sky-400 hover:text-slate-950 hover:shadow-sky-950/40 active:scale-95 focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </Button>

          {/* Indicadores */}
          <div
            className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 backdrop-blur-md"
            aria-label="Selecionar banner"
          >
            {banners.map((banner, index) => (
              <button
                key={`${banner.title}-indicator-${index}`}
                type="button"
                onClick={(event) => handleIndicatorClick(event, index)}
                aria-label={`Ir para o banner ${index + 1}`}
                aria-current={index === currentIndex}
                className={`cursor-pointer rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                  index === currentIndex
                    ? 'h-2 w-8 bg-sky-400'
                    : 'h-2 w-2 bg-slate-500 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default HeroCarousel
