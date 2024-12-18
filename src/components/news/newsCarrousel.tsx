"use client";
import { useState } from "react";
import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { newsType } from "../types/newsTypes";
import Image from "next/image";
import { formatDate } from "../functions/formatDate";
import Link from "next/link";

export default function NewCarrousel({ data: news }: { data: newsType[] }) {
  const [currentSelected, setCurrentSelected] = useState(0);
  return (
    <Card className="overflow-hidden transition active:scale-[99%] ease-linear">
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
          {news.map((item, index) => {
            item.titulo =
              item.titulo[0].toUpperCase() + item.titulo.substring(1);
            return (
              <CarouselItem
                key={index}
                className="p-0 justify-center flex bg-slate-600 h-full"
              >
                <Link href={item.link} target="_blank">
                  <div
                    className={`relative h-52 sm:h-80 max-lg:w-full flex justify-center lg:aspect-[3]`}
                  >
                    <Image
                      fill
                      src={"/" + item.imagem}
                      alt={"Capa da noticia"}
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="absolute w-full max-h-36 bg-slate-800 bg-opacity-50 bottom-0 max-sm:p-4 max-sm:pb-6 p-8 flex justify-center">
                  <div>
                    <h1 className="text-white max-sm:text-sm text-right drop-shadow">
                      {formatDate(item.data)}
                    </h1>
                    <h1 className="text-white max-sm:text-sm drop-shadow">
                      {item.titulo}
                    </h1>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
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
