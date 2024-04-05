import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "./ui/button";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";

export function TabbleList() {
  return (
    <Table>
      <thead>
        <tr className="border-b">
          <TableHeader style={{ width: 48 }}>
            <input
              type="checkbox"
              name=""
              id=""
              className="accent size-4 rounded border border-white/10 bg-black/20"
            />
          </TableHeader>
          <TableHeader>Código</TableHeader>
          <TableHeader>Participantes</TableHeader>
          <TableHeader>Data da inscrição</TableHeader>
          <TableHeader>Data do check-in</TableHeader>
          <TableHeader style={{ width: 64 }}></TableHeader>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 8 }).map((_, i) => {
          return (
            <tr
              key={i}
              className="text-zinc-300 transition-all delay-75 duration-75 hover:bg-white/5"
            >
              <TableCell>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="size-4 rounded border border-white/10 bg-black/20"
                />
              </TableCell>
              <TableCell>12358</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    Vitor Lucas Valente
                  </span>
                  <span className="">vitor@gmail.com</span>
                </div>
              </TableCell>
              <TableCell>7 Dias atrás</TableCell>
              <TableCell>2 Dias atrás</TableCell>
              <TableCell>
                <IconButton transparent>
                  <MoreHorizontal size={20} />
                </IconButton>
              </TableCell>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
          <TableCell colSpan={3} className="gap-4 p-4 text-right">
            <div className="inline-flex items-center gap-8">
              <span className=""> Página 1 de 23</span>
              <div className="flex items-center gap-2">
                <IconButton>
                  <ChevronsLeft />
                </IconButton>
                <IconButton>
                  <ChevronLeft />
                </IconButton>
                <IconButton>
                  <ChevronRight />
                </IconButton>
                <IconButton>
                  <ChevronsRight />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </tr>
      </tfoot>
    </Table>
  );
}
