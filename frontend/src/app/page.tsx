import PlantsRepository from '@/services/repositories/PlantsRepositories';
import UsersRepository from '@/services/repositories/UsersRepository';

import ScrollEffect from '../components/ScrollEffect';

import dynamic from 'next/dynamic';

const Sales = dynamic(
  () => import("@/layouts/Sales"),
  { ssr: false }
)
const Hero = dynamic(
  () => import("@/layouts/Hero"),
  { ssr: true }
)
const Apresentation = dynamic(
  () => import("@/layouts/Apresentation"),
  { ssr: true }
)
const Background = dynamic(
  () => import("@/layouts/Background"),
  { ssr: true }
)
const Avaliations = dynamic(
  () => import("@/layouts/Avaliations"),
  { ssr: true }
)
const Contact = dynamic(
  () => import("@/layouts/Contact"),
  { ssr: true }
)
const Summary = dynamic(
  () => import("@/layouts/Summary"),
  { ssr: true }
)
const Navbar = dynamic(
  () => import("@/layouts/Navbar"),
  { ssr: true }
)

export default async function Page() {
  const plants = await PlantsRepository.getAll();

  return (
    <>
      <div className="w-full h-auto h-min-[600px] pt-[10vh] bg-primary/60 backdrop-blur-md z-10 before:bg-primary before:w-full before:h-auto before:content-none before:absolute before:left-0 before:top-0 before:mix-blend-difference before:backdrop-blur">
        <div className="grid lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-1 md:grid-rows-2 relative">
          <div className="absolute w-[219px] h-[251px] bg-secondary -translate-x-1/2 left-0 bottom-10 " />
          <Hero />
          <Apresentation />
        </div>
      </div>
      <Background />
      <ScrollEffect className='w-full h-auto' speed={0.45} initialPosition={200} finalPosition={1500}>
        <Summary id='summary' className="flex flex-col w-full h-auto mt-[86px] gap-[200px] mb-16" />
        <Sales style={{ scrollBehavior: 'smooth' }} id="products" plants={plants} />
        <Contact id="contact" />
        <Avaliations />
      </ScrollEffect>
    </>
  );
}