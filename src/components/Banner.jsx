import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      {/* Changed h-[75vh] to min-h-screen so the image covers the full page */}
      <section className='bg-[url("/e-commerce_bg.png")] bg-cover bg-center bg-fixed min-h-full relative pb-20'>
        <div className="relative z-10 text-center pt-10 sm:pt-12 md:pt-15 px-6 sm:px-10 md:px-16 flex flex-col items-start gap-4 sm:gap-6 md:gap-8 w-full sm:w-[85%] md:w-150 max-w-full">
          <h1 className='text-white font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight md:leading-14'>
            Discover the best products for you
          </h1>
          <p className='text-base sm:text-lg md:text-xl pr-0 sm:pr-6 md:pr-10 leading-6 sm:leading-7 text-left'>
            Explore our wide range of high-quality products at affordable prices. Shop now and enjoy the best deals!
          </p>
          <div className='flex w-full items-center justify-center'>
            <Link to="/products" className='zoom-in-zoom-out'>
              Shop Now<FaArrowRight className='mt-1 ml-2 inline-block' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner