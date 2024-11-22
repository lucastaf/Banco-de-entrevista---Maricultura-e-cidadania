import { Instagram } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { HTMLAttributes, ReactElement } from "react";
import Link from "next/link";

export default function Rede({
  icon,
  text,
  textSize = "text-xl",
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
          <div className={"flex items-center gap-4 justify-center " + textSize}>
            {icon}
            {text}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
