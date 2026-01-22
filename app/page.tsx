import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Research } from '@/components/sections/Research';
import { Technology } from '@/components/sections/Technology';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Research />
      <Technology />
      <Team />
      <Contact />
    </main>
  );
}
