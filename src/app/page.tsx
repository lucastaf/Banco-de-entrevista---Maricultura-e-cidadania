import NewsCard from "@/components/news/newsCard";
import NewCarrousel from "@/components/news/newsCarrousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="gap-8 grid">
      <NewCarrousel />
      <div>
        <h1>Últimas noticias:</h1>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
