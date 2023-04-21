import Sales from "./sales"
import Summary from "./summary"
import Hero from "./hero"
import Background from "./background"
import NavBar from "./navbar"
import Contact from "./contact"
import { PlantData } from "@/@types/trefle"

async function getPlantsData() {
  try {
    const body = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.NEXT_PUBLIC_API_TREFLE_KEY}`);
    const { data } = await body.json();

    return data as PlantData[]
  } catch (error) {

  }


}

export default async function Page() {
  const plants = await getPlantsData();


  return (
    <>
      <div className="flex flex-col w-[1280px] max-w-[1280px] mx-auto font-inter">
        <div className="w-full h-[1000px] bg-primary/60 backdrop-blur-md z-10 before:bg-primary before:w-full before:h-[850px] before:content-none before:absolute before:left-0 before:top-0 before:mix-blend-difference before:backdrop-blur">
          <NavBar className="border-b-2 border-b-white" />
          <Hero />
        </div>
        <Background />
        <svg className="w-screen absolute -z-10 top-[1000px] left-0 " viewBox="0 0 1920 443" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1920V299.808C1920 678.566 0 171.39 0 299.808V161.897V0Z" fill="#1B130E" />
        </svg>
        <main className='w-full h-auto bg-[#A18F74] shadow-main' >
          <Summary />
          <Sales id="products" plants={plants} />
          <Contact id="contact" />
        </main>
      </div>
      <footer className=""></footer>
    </>
  );
}