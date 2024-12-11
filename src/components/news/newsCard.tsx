import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { newsType } from "../types/newsTypes";
import { formatDate } from "../functions/formatDate";
import Link from "next/link";

export default function NewsCard({ data }: { data: newsType }) {
  data.titulo = data.titulo[0].toUpperCase() + data.titulo.substring(1);
  return (
    <Link href={data.link} target="_blank" >
      <Card className="flex min-h-48 max-sm:min-h-32 ">
        <div className="rounded-2xl w-2/4 lg:w-3/4 xl:w-1/3 relative max-sm:hidden">
          <Image
            className="rounded-2xl object-cover"
            src={"/" + data.imagem}
            alt="Capa da noticia"
            fill
          />
        </div>

        <CardContent className="flex max-sm:p-4 w-full">
          <div className="sm:hidden h-3/4 relative aspect-square">
            <Image
              className="object-cover rounded-xl"
              src={"/" + data.imagem}
              alt="Capa da noticia"
              fill
            />
          </div>
          <div className="flex flex-col justify-between ml-3 w-full">
            <h1 className="max-w-96 max-sm:text-xs">{data.titulo}</h1>
            <h3 className="max-sm:text-xs text-right">
              <b>{formatDate(data.data)}</b>{" "}
            </h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
