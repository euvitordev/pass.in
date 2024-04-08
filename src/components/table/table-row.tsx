import { ComponentProps } from "react";

interface TableRowProps extends ComponentProps<"tr"> {}

export function TableRow(props: TableRowProps) {
  return (
    <tr
      className="text-zinc-300 transition-all delay-75 duration-75 hover:bg-white/5"
      {...props}
    />
  );
}
