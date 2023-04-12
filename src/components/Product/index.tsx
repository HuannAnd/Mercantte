import Image from "next/image";

import { Rating } from "@/components";

import { FONTS } from '@/constants/fonts'


type ProductProps = {
  productImage?: string;
  title: string,
  price?: number,

}

function Product({
  title,
  productImage,
  price,

}: ProductProps) {

  return (
    <div className="relative border-2 border-primary duration-300 p-5 bottom-0 ease-out w-[305px] h-auto bg-white overflow-y-hidden shadow-2xl">
      <div className="h-[200px] w-full overflow-y-hidden mb-4">
        <Image
          className='object-cover'
          src="/sunflower.jpg"
          alt='product'
          width={305}
          height={100}
        />
      </div>

      <h3 className={`${FONTS.BOLD} text-center mb-2 italic`}>{title}</h3>
      <div>
        <p className='w-full relative'><strong>USD ${price},00</strong></p>
        <button>
          
        </button>

      </div>
      {/* <Rating className="mb-4 inline w-auto" currentRate={rate} /> */}
      <p className="mb-8 text-[#555]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum facilis inventore!
      </p>
      <button className="bg-transparent border-primary border-2 w-full uppercase block px-8 py-4 font-medium tracking-widest hover:bg-slate-100 duration-300 text-primary">Buy Now</button>
    </div>
  )
}


export default Product;