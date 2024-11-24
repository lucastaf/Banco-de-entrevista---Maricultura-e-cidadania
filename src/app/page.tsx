import NewsCard from "@/components/news/newsCard";
import NewCarrousel from "@/components/news/newsCarrousel";
import { newsType } from "@/components/types/newsTypes";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default async function Home() {
  const fetchedData = await fetch("http://localhost:3000/api/news");
  const data = (await fetchedData.json()) as newsType[];
  return (
    <div className="gap-8 grid">
      {data && <NewCarrousel data={data.slice(0, 5)} />}
      <div>
        <h1>Últimas noticias:</h1>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {data.map((item, index) => (
            <NewsCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
