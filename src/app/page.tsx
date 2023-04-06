import Image from 'next/image'

import leafBackground from '../../public/leafs-backgrounds.jpg'

import { Inter } from 'next/font/google'

import './page.scss'

import { NavBar } from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div id="Home">
      <NavBar />

      <div className="Introduction">
        <Image
          className=''
          src={leafBackground}
          width={1200}
          height={800}
          alt='Leafs'
          style={{position: 'absolute', zIndex: 1,}}
          priority
        />
        <div className="Introduction__heading">
          <h1 className="Introduction__heading__text">Mercantte</h1>
          <p>Contact with us and explore our fantastics products</p>
        </div>

        <div className="Introduction__content"></div>

        <button className="Introduction__button">Our Collection</button>

      </div>

      {/*<section className='Workshop'>
        <div className="Workshop__title">
          <h1 className="Workshop__title__text"></h1>
          <p className="Workshop__title__content"></p>
          <img className="Workshop__title__image" src="" alt=""/>
        </div>

        <div className="Workshop__content">
          <div className="Card">
            <img className="Card__image" src="" alt="" />
            <div className="Card__info">
              <p className="Card__info__product-name"></p>
              <strong className="Card__info__price"></strong>
            </div>
          </div>
        </div>

    
      </section>

      <footer className="Footer">
        <div className="Footer-horizontal-bar"></div>

        <div className="Footer__content">
          <div className="Footer__content__logo"></div>

          <div className="Footer__content__discovery"></div>
          <div className="Footer__content__about"></div>
          <div className="Footer__content__contact-us"></div>
        </div>

      </footer> */}

    </div>
  )
}
