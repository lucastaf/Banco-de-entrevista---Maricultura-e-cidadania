import Rede from "@/components/redes/rede";
import { Instagram, Mail } from "lucide-react";

export default function Redes() {
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-lg w-[500px] max-w-[90%]">Nossas redes:</h1>
        <Rede href="https://www.instagram.com/gibamanzoni/" icon={<Instagram size={30} />} text="@gibamanzoni" />
        <Rede href="https://www.instagram.com/maricultura.univali/" icon={<Instagram size={30} />} text="@maricultura.univali" />
        <Rede href="https://www.instagram.com/extensao.univali/" icon={<Instagram size={30} />} text="@extensao.univali" />
        <Rede href="https://www.instagram.com/oceanografiaunivali/" icon={<Instagram size={30} />} text="@oceanografiaunivali" />
        <Rede href="https://www.instagram.com/Univalionline/" icon={<Instagram size={30} />} text="@Univalionline" />
      </div>
      <div className="mt-16 flex flex-col items-center gap-4">
        <h1 className=" text-lg w-[500px] max-w-[90%]">Emails:</h1>
        <Rede
          href="mailto:manzoni@univali.br"
          textSize="text-lg"
          icon={<Mail size={25} />}
          text="manzoni@univali.br"
        />
      </div>
    </div>
  );
}
