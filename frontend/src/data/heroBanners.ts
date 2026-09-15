import type { HeroBannerProps } from '@/components/home/HeroBanner'

export const heroBanners: HeroBannerProps[] = [
  {
    eyebrow: 'Oferta da semana',
    title: 'Tecnologia para transformar seu dia.',
    description: 'Encontre produtos selecionados com condições especiais para você.',
    actionLabel: 'Comprar agora',
    actionHref: '/produtos',
  },
  {
    eyebrow: 'Nova coleção',
    title: 'Produtos escolhidos para você.',
    description: 'Descubra novidades para casa, trabalho, estudos e entretenimento.',
    actionLabel: 'Explorar coleção',
    actionHref: '/produtos',
  },
  {
    eyebrow: 'Condições especiais',
    title: 'Mais praticidade na sua próxima compra.',
    description: 'Compare produtos e encontre a opção ideal para suas necessidades.',
    actionLabel: 'Ver ofertas',
    actionHref: '/ofertas',
  },
]
