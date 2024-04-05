import { Code2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { ToggleMode } from "./toggle-mode";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex w-full items-center justify-between gap-5">
      <div className="flex items-center gap-4">
        <div className="group flex cursor-pointer flex-col justify-start">
          <div className="flex items-center justify-center text-xl ">
            <h2 className="text-2xl font-semibold">Pass</h2>
            <span className="font-black text-green-300">.in</span>
          </div>
          <span className="h-0.5 w-20 bg-gradient-to-r from-green-300 via-zinc-700 to-transparent transition-all duration-700 ease-in-out group-hover:bg-gradient-to-l" />
        </div>

        <nav className="flex items-center">
          <NavLink href="/eventos">Eventos</NavLink>
          <NavLink href="/participantes">Participantes</NavLink>
        </nav>
      </div>
      <div className="left-0">
        <ToggleMode />
      </div>
    </div>
  );
}
