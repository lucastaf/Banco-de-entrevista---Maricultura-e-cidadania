import Rede from "@/components/redes/rede";
import { Instagram, Mail } from "lucide-react";

export default function Redes() {
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-lg w-[500px] max-w-[90%]">Nossas redes:</h1>
        <Rede icon={<Instagram size={30} />} text="@gibamanzoni" />
        <Rede icon={<Instagram size={30} />} text="@gibamanzoni" />
        <Rede icon={<Instagram size={30} />} text="@gibamanzoni" />
      </div>
      <div className="mt-16 flex flex-col items-center gap-4">
        <h1 className=" text-lg w-[500px] max-w-[90%]">Emails:</h1>
        <Rede
          textSize="text-lg"
          icon={<Mail size={25} />}
          text="manzoni@univali.br"
        />
      </div>
    </div>
  );
}
