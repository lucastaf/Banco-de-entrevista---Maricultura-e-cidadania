import { Instagram } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { HTMLAttributes, ReactElement } from "react";

export default function Rede({
  icon,
  text,
  textSize = "text-xl",
}: {
  icon: ReactElement;
  text: string;
  textSize?: string;
}) {
  return (
    <Card className="w-[500px] max-w-[90%]">
      <CardContent className="py-4 px-2">
        <div className={"flex items-center gap-4 justify-center " + textSize}>
          {icon}
          {text}
        </div>
      </CardContent>
    </Card>
  );
}
