import { ComponentProps } from "react";

interface TableProps extends ComponentProps<"table"> {}

export function Table(props: TableProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border">
      <table className="w-full" {...props} />
    </div>
  );
}
