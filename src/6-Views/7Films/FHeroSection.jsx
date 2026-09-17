import React from 'react'
import FilmHeroCarousels from '../../2-Components/Carousels/FilmHeroCarousels'

const FHeroSection = () => {
  return (
      <section className='flex flex-col justify-center lg:mt-10 items-center min-h-[45vh] sm:min-h-max md:min-h-[80vh] sm:h-max xl:min-h-[70vh]'>
          <div className='text-center flex items-center w-full h-full gap-[0px] pt-10 mt-10 md:mt-0 md:pt-10 lg:pt-0 sm:py-10 xl:mt-10'>
          <FilmHeroCarousels />
          </div>
      </section>
  )
}

export default FHeroSection