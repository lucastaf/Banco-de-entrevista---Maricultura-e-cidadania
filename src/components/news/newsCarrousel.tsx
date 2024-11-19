"use client";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../ui/pagination";
import { newsMock } from "../types/newsTypes";
import Image from "next/image";

export default function NewCarrousel() {
  const [currentSelected, setCurrentSelected] = useState(0);
  const news = newsMock;
  return (
    <Card className="overflow-hidden">
      <Carousel
        setApi={(api) => {
          if (!api) return;
          api.on("select", () => {
            setCurrentSelected(api.selectedScrollSnap());
          });
        }}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="m-0">
          {news.map((item, index) => (
            <CarouselItem
              key={index}
              className="p-0 justify-center flex bg-slate-600 h-full"
            >
              <div
                className={`relative h-52 sm:h-80 max-lg:w-full flex justify-center lg:aspect-[3]`}
              >
                <Image
                  fill
                  src={item.image}
                  alt={"Capa da noticia"}
                  className="object-cover"
                />
              </div>
              <div className="absolute w-full max-h-36 bg-slate-800 bg-opacity-50 bottom-0 max-sm:p-4 max-sm:pb-6 p-8 flex justify-center">
                <div>
                  <h1 className="text-white max-sm:text-sm text-right drop-shadow">{item.date.toDateString()}</h1>
                  <h1 className="text-white max-sm:text-sm drop-shadow">{item.title}</h1>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <div className="flex gap-3 justify-center absolute bottom-4 max-sm:bottom-2 left-1/2 -translate-x-1/2">
          {news.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 max-sm:w-3 max-sm:h-3 rounded-full ${
                index == currentSelected ? "bg-slate-50" : "bg-slate-400"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </Card>
  );
}
