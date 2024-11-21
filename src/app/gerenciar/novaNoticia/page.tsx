import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CloudUpload } from "lucide-react";

export default function novaNoticia() {
  return (
    <div className="flex justify-center">
      <Card className="max-w-[1000px] flex-1">
        <CardHeader>
          <CardTitle>Nova Noticia</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-5">
            <div>
              <Label>Titulo</Label>
              <Textarea placeholder="Nova especie de moluscos descoberta" />
            </div>
            <div>
              <Label>Descricao (opcional)</Label>
              <Textarea placeholder="Nova especie de moluscos descoberta" />
            </div>
            <div>
              <Label>Data </Label>
              <Input type="date" placeholder="Nova especie de moluscos descoberta" />
            </div>
            <div>
              <Label>Capa da noticia</Label>
              <div>
                <Input type="file" id="capaInput" className="hidden" />
                <Label
                  htmlFor="capaInput"
                  className="w-full flex justify-center h-20 border rounded-md items-center"
                >
                  <div className="flex-col items-center flex">
                    <CloudUpload />
                    <Label>Escolha o arquivo</Label>
                  </div>
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
