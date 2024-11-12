import NewsCard from "@/components/news/newsCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}
