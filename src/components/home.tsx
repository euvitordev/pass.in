import { Search } from "lucide-react";
import { TabbleList } from "./tabble-list";

export function HomePage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">Participantes</h2>
        <div className="flex items-center gap-4 rounded-lg border-2 px-3 py-0">
          <Search className="text-green-300" size={20} />
          <input
            type="text"
            className="border-none bg-transparent outline-none focus:ring-0"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <TabbleList />
    </div>
  );
}
