import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";
import Link from "next/link";

type mockData = {
  data: Date;
  title: string;
};
export default function NewsManager() {
  const dados: mockData[] = [
    {
      data: new Date(),
      title: "Titulo da materia 1",
    },
    {
      data: new Date(Date.now() + 10000),
      title: "Titulo da materia 2",
    },
    {
      data: new Date(Date.now() + 20000),
      title: "Titulo da materia 2",
    },
  ];
  return (
    <>
      <div className="flex justify-center">
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
          {dados.map((item) => (
            <TableRow>
              <TableCell>{item.data.toDateString()}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
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
