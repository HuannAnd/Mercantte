import Sales from "./sales"
import Summary from "./summary"
import Hero from "./hero"
import Background from "./background"


export default function Page() {
  return (
    <div className="flex flex-col w-[1200px] max-w-[1200px] mx-auto font-inter">
      <div className="w-full z-10 bg-[#392d2e93] backdrop-blur h-auto">
        <NavBar />
        <Hero />
      </div>
      <Background />
      <main className='w-full h-auto bg-[#A18F74]' >
        <Summary />
        <Sales />
      </main>

    </div>

  )
}