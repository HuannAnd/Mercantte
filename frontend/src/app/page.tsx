import PlantsRepository from '@/repositories/plantsRepositories';
import UsersRepository from '@/repositories/usersRepository';

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
    <div className="flex flex-col w-[1280px] max-w-[1280px] mx-auto font-inter">
      <div className="w-full h-auto h-min-[600px] bg-primary/60 backdrop-blur-md z-10 before:bg-primary before:w-full before:h-auto before:content-none before:absolute before:left-0 before:top-0 before:mix-blend-difference before:backdrop-blur">
        <Navbar isHommed className="border-b-2 fixed  border-b-white" />
        <div className="grid lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-1 md:grid-rows-2 relative">
          <div className="absolute w-[219px] h-[251px] bg-secondary -translate-x-1/2 left-0 bottom-10 " />
          <Hero className="md:mx-auto w-[500px] h-auto lg-order-1 md:order-2 sm:order-2  items-start left-0 text-white top-0 z-20 mt-[55px]" />
          <Apresentation className="flex-[1] relative lg:order-2 md:order-1 sm:order-1 " />
        </div>
      </div>
      <Background />
      <ScrollEffect className='w-full h-auto' speed={0.45} initialPosition={200} finalPosition={1500}>
        <Summary id='summary' className="flex flex-col w-full h-auto mt-[86px] gap-[200px] mb-16" />
        <Sales style={{ scrollBehavior: 'smooth' }} id="products" plants={plants} />
        <Contact id="contact" />
        <Avaliations />
      </ScrollEffect>
    </div>
  );
}