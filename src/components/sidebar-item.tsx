"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  label: string;
  iconSrc: string;
  href: string;
}

export function SidebarItem({ href, iconSrc, label }: SidebarItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      className="h-[52px] justify-start"
      variant={active ? "sidebarOutline" : "sidebar"}
      asChild
    >
      <Link href={href}>
        <Image
          className="mr-5"
          src={iconSrc}
          height={32}
          width={32}
          alt={label}
        />
        {label}
      </Link>
    </Button>
  );
}
