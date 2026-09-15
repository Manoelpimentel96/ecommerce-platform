import Benefits from '@/components/home/Benefits'
import Categories from '@/components/home/Categories'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Hero from '@/components/home/Hero'
import Newsletter from '@/components/home/Newsletter'
import Offers from '@/components/home/Offers'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Offers />
        <Benefits />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}

export default Home
