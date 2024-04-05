import { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<"th"> {}

export function TableCell(props: TableCellProps) {
  return (
    <>
      <td className="p-4 text-sm text-zinc-300" {...props} />
    </>
  );
}
