"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({
  href,
  children,
  className,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let isActive = pathname === href ? true : false;
  return (
    <Link
      className={[isActive ? `text-white` : "text-[#868D9A]", className].join(
        " "
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
