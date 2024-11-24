"use client";
import { useAuth } from "@/components/auth/authContext";
import { formatDate } from "@/components/functions/formatDate";
import { newsType } from "@/components/types/newsTypes";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function NewsManager() {
  const auth = useAuth();
  const [data, setData] = useState<newsType[]>([]);
  useEffect(() => {
    axios
      .get("/api/news")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  function deleteItem(id: number) {
    const resAxios = axios.delete(`/api/news/${id}`, {
      headers: {
        Authorization: auth.accessToken,
      },
    });
    resAxios.then((res) => {
      setData((prev) => {
        return [...prev.filter((item) => item.id != id)];
      });
    });
    toast.promise(resAxios, {
      error: "erro ao excluir a noticia",
      loading: "excluindo noticia",
      success: "noticia excluida com sucesso",
    });
  }
  
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div>
          <Button onClick={auth.logout} variant={"destructive"}>
            Logout
          </Button>
        </div>
        <Link href={"/gerenciar/novaNoticia"}>
          <Button>Nova Noticia</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10%]">Data</TableHead>
            <TableHead>Titulo</TableHead>
            <TableHead className="w-[50px]">Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{formatDate(item.data)}</TableCell>
              <TableCell>{item.titulo}</TableCell>
              <TableCell>
                <Button
                  onClick={() => deleteItem(item.id)}
                  variant="ghost"
                  size="icon"
                >
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
