"use client";
import { useAuth } from "@/components/auth/authContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { CloudUpload } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import toast from "react-hot-toast";

export default function NovaNoticia() {
  const auth = useAuth();
  const router = useRouter()
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const data = new FormData(e.target as any);
    const resAxios = axios.post("/api/news", data, {
      headers: {
        Authorization: auth.accessToken,
      },
    });

    resAxios.then(() => router.push("/gerenciar"))
    resAxios.catch((e) => console.error(e));

    toast.promise(resAxios, {
      error: () => "Erro ao incluir a noticia",
      loading: "Incluindo noticia",
      success: "Noticia incluida com sucesso",
    });
  };

  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className="flex justify-center">
      <Card className="max-w-[1000px] flex-1">
        <CardHeader>
          <CardTitle>Nova Noticia</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid gap-5">
              <div>
                <Label>Titulo</Label>
                <Textarea
                  name="titulo"
                  placeholder="Nova especie de moluscos descoberta"
                />
              </div>
              <div>
                <Label>Data da noticia</Label>
                <Input
                  name="data"
                  type="date"
                  placeholder="Nova especie de moluscos descoberta"
                />
              </div>
              <div>
                <Label>Link da noticia</Label>
                <Input name="link" placeholder="https://g1.com.br" />
              </div>
              <div>
                <Label>Descricao (opcional)</Label>
                <Textarea
                  name="descricao"
                  placeholder="Nova especie de moluscos descoberta"
                />
              </div>
              <div>
                <Label>Capa da noticia</Label>
                <div>
                  <Input
                    onChange={(file) =>
                      //@ts-expect-error nullabe
                      setFileName(file.target.files?.[0].name)
                    }
                    type="file"
                    name="imagem"
                    id="capaInput"
                    className="hidden"
                  />
                  <Label
                    htmlFor="capaInput"
                    className="w-full flex justify-center h-20 border rounded-md items-center"
                  >
                    <div className="flex-col items-center flex">
                      <CloudUpload />
                      <Label>{fileName ?? "Escolha o arquivo"}</Label>
                    </div>
                  </Label>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button type="submit">Publicar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
