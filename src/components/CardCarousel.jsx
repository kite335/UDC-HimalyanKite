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
import backgroundImage from "@/assets/Cardcarousel/cardBack.jpg"

import Autoplay from "embla-carousel-autoplay"

const CardCarousel = () => {
  const cardImage = [{ webP: slideCard01Webp, jpg: slideCard01Jpg, title: "Mountain Deer" }, { webP: slideCard02Webp, jpg: slideCard02Jpg, title: "Mountain Deer" },
  { webP: slideCard03Webp, jpg: slideCard03Jpg, title: "Monument" }, { webP: slideCard04Webp, jpg: slideCard04Jpg, title: "Hiskuo" }
  ]
  return (
    <>
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className=" py-50 relative bg-cover bg-center bg-no-repeat">
      <h1 className="relative top-1 text-lg text-white font-bold text-center  ">Adventure to get your Aderaline High</h1>
      <p className="text-center mb-5 font-bold text-xl text-white">Whether you’re a seeker, a summit-chaser, a culture lover, or a curious learner – we have a travel theme just for you</p>
    <Carousel
     opts={{
        align: "start",
      }}
      className=" mx-auto max-w-[1110px]"
    >
      <CarouselContent className="py-3">
        {cardImage.map((s,index) => (
          <CarouselItem key={index} className=" sm:basis-1 md:basis-1/2 lg:basis-1/4">
            <div className="px-[-2px]">
              <Card className="py-0  rounded-[20px] ">
                <CardContent  className="flex aspect-square px-0 items-center  justify-center h-[300px] ">
                  <span className="text-3xl font-semibold">
                    <picture>
                       <source srcSet={s.webP} type="image/webp"></source>
        <img src={s.jpg}
        alt={s.title}
        loading="lazy"
        className=" w-[300px] h-[300px] border rounded-[20px] shadow-md object-cover"
        />
                    </picture>
                    </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-2" />
      <CarouselNext className="absolute top-1/2 right-2"/>
    </Carousel>
    </div>
    
    </>
  )
}

export default CardCarousel;