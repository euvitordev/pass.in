import { ComponentProps } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface NavLinkProps {
  children: string;
}
export function NavLink(props: NavLinkProps) {
  return (
    <>
      <Link {...props}>
        <Button variant={"ghost"} className="opacity-80 hover:opacity-100">
          {props.children}
        </Button>
      </Link>
    </>
  );
}
