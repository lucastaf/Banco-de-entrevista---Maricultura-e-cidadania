"use client"
import NewsCard from "@/components/news/newsCard";
import NewCarrousel from "@/components/news/newsCarrousel";
import { newsType } from "@/components/types/newsTypes";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<newsType[]>([])
  useEffect(()=>{
    axios.get("/api/news").then(res=>{
      setData(res.data)
    }).catch(e=>{
      console.error(e)
    })
  },[])
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
