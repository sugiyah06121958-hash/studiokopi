import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Products from '@/components/sections/products';
import Story from '@/components/sections/story';
import Recipes from '@/components/sections/recipes';
import Testimonials from '@/components/sections/testimonials';
import Faq from '@/components/sections/faq';
import Contact from '@/components/sections/contact';
import PromotionalBanner from '@/components/sections/promotional-banner';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Story />
        <Recipes />
        <Testimonials />
        <PromotionalBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
