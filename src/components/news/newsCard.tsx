import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function NewsCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <Image
            className="rounded-2xl"
            src={"/image01.png"}
            alt="Capa da noticia"
            width={200}
            height={200}
          />
          <div className="flex flex-col justify-between ml-3">
            <h1 className="max-w-96">
              SC se mantém como o maior produtor de ostras, vieiras e mexilhões
              no país
            </h1>
            <h3>
                07 de setembro de 2024
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
