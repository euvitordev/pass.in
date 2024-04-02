import { Code2Icon } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="flex w-full items-center justify-start gap-5">
      <span className="flex items-center justify-center rounded-md bg-orange-400 p-2 text-black">
        <Code2Icon />
      </span>
      <nav className="flex items-center">
        <Button variant={"ghost"} className="opacity-80 hover:opacity-100">
          Eventos
        </Button>
        <Button variant={"ghost"} className="opacity-80 hover:opacity-100">
          Participantes
        </Button>
      </nav>
    </div>
  );
}
