"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let isActive = pathname === href ? true : false;
  return (
    <Link className={isActive ? `text-white` : "text-[#868D9A]"} href={href}>
      {children}
    </Link>
  );
}
