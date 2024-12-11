import { Card, CardContent } from "../ui/card";
import { ReactElement } from "react";
import Link from "next/link";

export default function Rede({
  icon,
  text,
  href,
}: {
  icon: ReactElement;
  text: string;
  href: string;
  textSize?: string;
}) {
  return (
    <Card className="w-[500px] max-w-[90%] transition hover:scale-110 ease-linear">
      <Link href={href} target="_blank">
        <CardContent className="py-4 px-2">
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-2 max-[500px]:col-span-1 flex justify-end">{icon}</div>
            <div className="">{text}</div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
