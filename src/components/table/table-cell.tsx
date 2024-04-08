import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
  return (
    <td
      {...props}
      className={twMerge(
        "border-b border-white/5 p-4 text-sm text-zinc-300",
        props.className,
      )}
    />
  );
}
