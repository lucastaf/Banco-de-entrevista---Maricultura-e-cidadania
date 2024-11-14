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
    <Card className="overflow-hidden min-h-72">
      <Carousel
        setApi={(api) => {
          if (!api) return;
          api.on("select", () => {
            setCurrentSelected(api.selectedScrollSnap());
          });
        }}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="relative">
          {news.map((item, index) => (
            <CarouselItem key={index} className="min-h-72">
              <div className="relative h-full">
                <Image
                  fill
                  src={item.image}
                  alt={"Capa da noticia"}
                  className="object-cover"
                />
              </div>
              <div className="absolute w-full h-36 bg-slate-800 bg-opacity-50 bottom-0 p-8 flex justify-center">
                <div>
                  <h1 className="text-white">{item.date.toDateString()}</h1>
                  <h1 className="text-white">{item.title}</h1>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <div className="flex gap-3 justify-center absolute bottom-4 left-1/2 translate-x-1/2">
          {news.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full ${
                index == currentSelected ? "bg-slate-50" : "bg-slate-400"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </Card>
  );
}
