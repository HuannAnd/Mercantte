import {
  Background,
  Contact,
  Hero,
  NavBar,
  Sales,
  Summary,
  Avaliations
} from './(widgets)';

import Image from "next/image"

import PlantsRepository from '@/repositories/plantsRepositories'
import UsersRepository from '@/repositories/usersRepository';
import Main from './(widgets)/main';


export default async function Page() {
  const plants = await PlantsRepository.getAll();
  const users = await UsersRepository.getAll();


  return (
    <>
      <div className="flex flex-col w-[1280px] max-w-[1280px] mx-auto font-inter">
        <div className="w-full h-auto bg-primary/60 backdrop-blur-md z-10 before:bg-primary before:w-full before:h-auto before:content-none before:absolute before:left-0 before:top-0 before:mix-blend-difference before:backdrop-blur">
          <NavBar className="border-b-2 border-b-white" />
          <div className="flex flex-row relative">
            <div className="absolute w-[219px] h-[251px] bg-secondary -translate-x-1/2 left-0 bottom-10"></div>
            <Hero />
            <div className="flex-[1] relative">
              <div className="bg-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl w-[220px] h-[250px] ">
                <Image
                  className="object-contain absolute h-[251px] w-[219px] right-[192px] bottom-[144px] "
                  src="/icons/benefit-image1.jpg"
                  alt="Plant image"
                  width={250}
                  height={250}
                />

                <Image
                  className="scale-150 object-contain absolute left-[110px] bottom-[125px] h-[283px]"
                  src="/icons/benefit-image2.jpg"
                  alt="Plant image"
                  width={300}
                  height={400}
                />
              </div>

              <div className="absolute top-0 right-0 -z-10 w-[297px] h-[367px] shadow-xl bg-secondary" />
              <div className="absolute bottom-[100px] right-0 -z-10 w-[123px] h-[152px] shadow-xl bg-secondary" />
            </div>
          </div>
        </div>
        <Background />
        <svg className="w-screen absolute z-10 top-[1000px] left-0 " viewBox="0 0 1920 443" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1920V299.808C1920 678.566 0 171.39 0 299.808V161.897V0Z" fill="#5D7867" />
        </svg>
        <Main>
          <Sales id="products" plants={plants} />
        </Main>
      </div>
      <footer className=""></footer>
    </>
  );
}