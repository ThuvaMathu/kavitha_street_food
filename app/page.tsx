import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FoodShowcase from '@/components/FoodShowcase';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <FoodShowcase />
        <Contact />
      </main>
    </>
  );
}
