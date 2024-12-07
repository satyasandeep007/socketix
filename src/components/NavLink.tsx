"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = "" }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-[#9B87FE] font-medium"
          : "text-black hover:text-[#9B87FE] transition-colors"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
