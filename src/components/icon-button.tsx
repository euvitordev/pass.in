import { ComponentProps } from "react";
import { Button } from "./ui/button";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <Button
      {...props}
      variant={transparent ? "outline" : "ghost"}
      size={"icon"}
      className={
        transparent ? "" : "border border-white/10 bg-white/20 opacity-60"
      }
    />
  );
}
