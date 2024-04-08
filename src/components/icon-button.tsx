import { ComponentProps } from "react";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <Button
      {...props}
      variant={transparent ? "outline" : "ghost"}
      size={"icon"}
      className={twMerge(
        "border border-white/10 bg-white/20",
        transparent ? "bg-black/20" : "bg-white/10",
        props.disabled ? "opacity-10" : null,
      )}
    />
  );
}
