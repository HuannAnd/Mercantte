import {
  Background,
  Hero,
  NavBar,
  Sales,
} from './(widgets)';

import { Avaliations, Contact, Summary } from './(sections)';

import PlantsRepository from '@/repositories/plantsRepositories'
import UsersRepository from '@/repositories/usersRepository';

import ScrollEffect from '../components/ScrollEffect';
import Apresentation from './(widgets)/Apresentation';

import { NextLinkType } from '@/constants/paths';


export default async function Page() {
  const plants = await PlantsRepository.getAll();
  const users = await UsersRepository.getAll();

  const paths: NextLinkType[] = [
    { label: "Home", value: "", to: "/" },
    { label: "Our Plants", value: "", to: "products" },
    { label: "Contact", value: "", to: "contact" },
  ]

  return (
    <>
      <div className="flex flex-col w-[1280px] max-w-[1280px] mx-auto font-inter">
        <div className="w-full h-auto bg-primary/60 backdrop-blur-md z-10 before:bg-primary before:w-full before:h-auto before:content-none before:absolute before:left-0 before:top-0 before:mix-blend-difference before:backdrop-blur">
          <NavBar isHommed className="border-b-2 border-b-white" />
          <div className="grid lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-1 md:grid-rows-2 relative">
            <div className="absolute w-[219px] h-[251px] bg-secondary -translate-x-1/2 left-0 bottom-10"></div>
            <Hero className="md:mx-auto w-[500px] h-auto items-start left-0 text-white top-0 z-20 mt-[55px]" />
            <Apresentation className="flex-[1] relative" />
          </div>
        </div>
        <Background />
        <svg className="w-screen absolute z-10 top-[1000px] left-0 " viewBox="0 0 1920 443" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1920V299.808C1920 678.566 0 171.39 0 299.808V161.897V0Z" fill="#5D7867" />
        </svg>
        <ScrollEffect className='w-full h-auto' speed={0.45} initialPosition={200} finalPosition={1500}>
          <Summary />
          <Sales style={{ scrollBehavior: 'smooth' }} id="products" plants={plants} />
          <Contact id="contact" />
          <Avaliations />
        </ScrollEffect>
      </div>
      <footer className=""></footer>
    </>
  );
}