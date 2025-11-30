import React from 'react'
import slide01WebP from "@/assets/carousel/slide-01.webp"
import slide01JPG from "@/assets/carousel/slide-01.jpg"
import slide02WebP from "@/assets/carousel/slide-02.webp"
import slide02JPG from "@/assets/carousel/slide-02.jpg"
// import slide03WebP from "@/assets/carousel/slide-03.webp"
// import slide03JPG from "@/assets/carousel/slide-03.jpg"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const ImageCarousel = () => {
  const slides=[{
    webp:slide01WebP,jpg:slide01JPG,alt:"trekking"
  },{
    webp:slide02WebP,jpg:slide02JPG,alt:"river"
  }]

  

  return (
  
        <Carousel plugins={[
        Autoplay({
          delay:100000
        }),
      ]} className="w-full">
  <CarouselContent className="m-0">
    {slides.map(slide=>(
       <CarouselItem className="p-0 relative">
        
          <picture>
        <source srcSet={slide.webp} type="image/webp"></source>
        <img src={slide.jpg}
        alt={slide.alt}
        loading="lazy"
        className="w-full h-[500px] object-cover"
        />
        
      </picture>
      <span className=' w-full text-center text-[#FAFAFA] transform absolute  flex-col left-1/2 -translate-1/2 top-1/2 '>
      
       
         <h1 className="text-2xl font-bold">Experience the beauty of every summit</h1>
        <p className="text-[1.5rem]">description of text</p>
        <Button size="lg"  variant="outline" className=" mt-2 bg-transparent text-white  hover:bg-white 
        hover:text-black">Plan your Adventure</Button>
       
       

      
      </span>
      
        
      
      
    </CarouselItem>
    ))}

   
  </CarouselContent>
  
    <div className='absolute top-1/2 left-2 flex item-center justify-center  '>
      <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0" /></div>
  <div className="absolute top-1/2 right-2 flex items-center justify-center "><CarouselNext className="relative  right-0 translate-x-0 hover:translate-x-0 "/></div>
  
</Carousel>
      
  )
}

export default ImageCarousel

