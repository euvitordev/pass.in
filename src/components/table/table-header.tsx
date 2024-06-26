import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<"th"> {}

export function TableHeader(props: TableHeaderProps) {
  return <th className="p-4 text-left text-sm font-semibold" {...props} />;
}
