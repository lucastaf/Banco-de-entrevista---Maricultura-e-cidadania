import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function NewsCard() {
  return (
    <Card className="flex min-h-48 max-sm:min-h-32 ">
      <div className="rounded-2xl w-1/4 lg:w-3/4 xl:w-1/3 relative max-sm:hidden">
        <Image
          className="rounded-2xl object-cover"
          src={"/image01.png"}
          alt="Capa da noticia"
          fill
        />
      </div>

      <CardContent className="flex max-sm:p-4">
        <div className="sm:hidden h-3/4 relative aspect-square">
          <Image
            className="object-cover rounded-xl"
            src={"/image01.png"}
            alt="Capa da noticia"
            fill
          />
        </div>
        <div className="flex flex-col justify-between ml-3 h-full ">
          <h1 className="max-w-96 max-sm:text-xs">
            SC se mantém como o maior produtor de ostras, vieiras e mexilhões no
            país
          </h1>
          <h3 className="max-sm:text-xs text-right">
            <b>07 de setembro de 2024</b>{" "}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
