import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <Hero />
        <HowItWorks />
        <Catalog />
      </main>
      <Footer />
    </>
  );
}
