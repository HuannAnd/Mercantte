import { Button } from "@/components"
import { FONTS } from "@/constants/fonts"

export default function LoadingPlantPage() {
  return (
    <div className='bg-[#A18F74] shadow-main h-screen flex flex-col w-[1280px] mx-auto'>
      <section className='flex flex-row gap-10 text-white '>
        <article className='w-[665px] h-[715px] bg-white flex overflow-y-hidden justify-center items-center p-16'>
          <div></div>
        </article>

        <article className='border-l-2 border-l-white w-[660px] px-10'>
          <h2 className={`${FONTS.H2} mb-8`}>Lorem, ipsum dolor</h2>
          <strong className='mb-4 block'>Description</strong>
          <p className='ml-8 mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum natus officiis dolorum accusamus a nesciunt cupiditate id. Consequatur minus ipsa provident explicabo optio necessitatibus itaque hic. Quod, eaque quia?
            Ut, molestiae illum doloremque, aliquam cum possimus, repudiandae earum blanditiis quos porro necessitatibus obcaecati debitis harum nisi? Nulla in eveniet quisquam nostrum, hic quam? Error esse natus recusandae expedita corrupti.
          </p>
          <strong className='mb-4 block'>Features</strong>
          <ul className="ml-8 mb-8">
            <li>Speeds up grow</li>
            <li>Very beatiful</li>
            <li>Compost of lower water</li>
          </ul>
          <small className='ml-8 block mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum natus officiis dolorum accusamus a nesciunt cupiditate id. Consequatur minus ipsa
          </small>

          <Button className='w-full' buttonTypes='callToAction'>Buy Now</Button>
        </article>
      </section>

      <section className="h-auto bg-white mt-20 n z-10 mb-[100vw]">
        <div className="absolute h-[787.34px] w-screen left-0 bg-white"></div>

        <div className="w-full overflow-hidden z-10 relative bg-clip-border clip">
          <h2 className={`${FONTS.H2} text-[#333] text-center p-10`}>Common Family</h2>
          <div className="flex flex-row justify-center items-start w-full px-40 py-10 gap-10">
            
          </div>

        </div>

      </section>

    </div>
  )
}