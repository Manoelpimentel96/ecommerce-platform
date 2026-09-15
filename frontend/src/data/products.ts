export interface Product {
  id: number
  category: string
  name: string
  description: string
  price: number
}

export const products: Product[] = [
  {
    id: 1,
    category: 'Eletrônicos',
    name: 'Fone de ouvido Bluetooth',
    description: 'Som de alta qualidade para música, chamadas e entretenimento.',
    price: 199.9,
  },
  {
    id: 2,
    category: 'Informática',
    name: 'Teclado mecânico',
    description: 'Teclado compacto com excelente experiência para produtividade.',
    price: 289.9,
  },
  {
    id: 3,
    category: 'Casa',
    name: 'Luminária de mesa',
    description: 'Design moderno para deixar seu ambiente mais confortável.',
    price: 149.9,
  },
  {
    id: 4,
    category: 'Acessórios',
    name: 'Mochila urbana',
    description: 'Prática e resistente para estudos, trabalho e uso diário.',
    price: 229.9,
  },
]
