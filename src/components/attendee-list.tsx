"use client";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { ChangeEvent, useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Attendee {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}

export function AttendeeList() {
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString());
    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? "";
    }
    return "";
  });
  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString());
    if (url.searchParams.has("page")) {
      return Number(url.searchParams.get("page"));
    }
    return 1;
  });
  const [total, setTotal] = useState(0);
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  const totalPages = Math.ceil(total / 10);

  useEffect(() => {
    const url = new URL(
      "http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees",
    );
    url.searchParams.set("pageIndex", String(page - 1));
    if (search.length > 0) {
      url.searchParams.set("query", search);
    }
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        setAttendees(data.attendees);
        setTotal(data.total);
      });
  }, [page, search]);

  function setCurrentSeach(search: string) {
    const url = new URL(window.location.toString());
    url.searchParams.set("search", search);
    window.history.pushState({}, "", url);
    setSearch(search);
  }

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString());
    url.searchParams.set("page", String(page));
    window.history.pushState({}, "", url);
    setPage(page);
  }

  function onSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
    setCurrentSeach(e.target.value);
    setCurrentPage(1);
  }
  function goToFirstPage() {
    setCurrentPage(1);
  }
  function goToPreviewPage() {
    setCurrentPage(page - 1);
  }
  function goToNextPage() {
    setCurrentPage(page + 1);
  }
  function goToLastPage() {
    setCurrentPage(totalPages);
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">Participantes</h2>
        <div className="flex items-center gap-4 rounded-lg border-2 px-3 py-0">
          <Search className="text-green-300" size={20} />
          <input
            onChange={onSearchInputChange}
            value={search}
            type="text"
            className="border-none bg-transparent outline-none focus:ring-0"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <Table>
        <thead>
          <TableRow className="border-b bg-white/5">
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
          </TableRow>
        </thead>
        <tbody>
          {attendees.map((attendee) => {
            return (
              <TableRow key={attendee.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="size-4 rounded border border-white/10 bg-black/20"
                  />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {attendee.name}
                    </span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(attendee.createdAt, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </TableCell>
                <TableCell>
                  {attendee.checkedInAt == null ? (
                    <span className="text-red-400">Não fez check-in</span>
                  ) : (
                    formatDistanceToNow(attendee.checkedInAt, {
                      locale: ptBR,
                      addSuffix: true,
                    })
                  )}
                </TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal size={20} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <TableRow>
            <TableCell colSpan={3}>
              Mostrando {attendees.length} de {total} itens
            </TableCell>
            <TableCell colSpan={3} className="gap-4 p-4 text-right">
              <div className="inline-flex items-center gap-8">
                <span className="">
                  Página {page} de {totalPages}
                </span>
                <div className="flex items-center gap-2">
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft />
                  </IconButton>
                  <IconButton onClick={goToPreviewPage} disabled={page === 1}>
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === totalPages}
                  >
                    <ChevronsRight />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  );
}
