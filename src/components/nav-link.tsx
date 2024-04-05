import { ComponentProps } from "react";
import { Button } from "./ui/button";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}
export function NavLink(props: NavLinkProps) {
  return (
    <>
      <a {...props}>
        <Button variant={"ghost"} className="opacity-80 hover:opacity-100">
          {props.children}
        </Button>
      </a>
    </>
  );
}
