import { Hero } from "@/components/sections/home/hero";
import { About } from "@/components/sections/home/about";
import { Portfolio } from "@/components/sections/home/portfolio";
import { ServicesPreview } from '@/components/sections/home/services-preview';
import { ContactBar } from '@/components/sections/contact/contact-bar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">

      <Hero />
      <About />
      <Portfolio />
      <ServicesPreview />
      <ContactBar />
    </main>
  );
}