import About from '@/components/About';
import Divider from '@/components/Divider';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
