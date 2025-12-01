import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import slideCard01Webp from "@/assets/Cardcarousel/slideCard-01.webp"
import slideCard01Jpg from "@/assets/Cardcarousel/slideCard-01.jpg"
import slideCard02Webp from "@/assets/Cardcarousel/slideCard-02.webp"
import slideCard02Jpg from "@/assets/Cardcarousel/slideCard-02.jpg"
import slideCard03Webp from "@/assets/Cardcarousel/slideCard-03.webp"
import slideCard03Jpg from "@/assets/Cardcarousel/slideCard-03.jpg"
import slideCard04Webp from "@/assets/Cardcarousel/slideCard-04.webp"
import slideCard04Jpg from "@/assets/Cardcarousel/slideCard-04.jpg"

import Autoplay from "embla-carousel-autoplay"

const CardCarousel = () => {
  const cardImage = [{ webP: slideCard01Webp, jpg: slideCard01Jpg, alt: "Mountain Deer" }, { webP: slideCard02Webp, jpg: slideCard02Jpg, alt: "Mountain Deer" },
  { webP: slideCard03Webp, jpg: slideCard03Jpg, alt: "Monument" }, { webP: slideCard04Webp, jpg: slideCard04Jpg, alt: "Hiskuo" }
  ]
  return (
    <div className=" ">
    {/* <h1 className="text-center">TRAVEL THAT MATCHES YOUR MOOD</h1>
    <p className="text-center">Everything you want Adventure,get tour Aderlanine High</p> */}
    <Carousel  opts={{
        align: "start",
        loop:true,
      }} className="">
            <h1 className="text-center">TRAVEL THAT MATCHES YOUR MOOD</h1>
        <p className="text-center">Everything you want Adventure,get tour Aderlanine High</p>
        <CarouselContent className="  ">
          
          {cardImage.map(item=>(
                <CarouselItem className= "basis-full md:basis-1/2 lg:basis-1/2">
                
               <span>     
            <picture>
              <source srcSet={item.webP} type="image/webp"></source>
              <img src={item.jpg}
                alt={item.alt}
                loading="lazy"
                className=" w-full h-[300px] object-cover"
              />
            </picture>
            </span>
            
          </CarouselItem>
          ))}
          

        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-15" />
        <CarouselNext className="absolute  right-15" />
      </Carousel>
    </div>

  )
}

export default CardCarousel;