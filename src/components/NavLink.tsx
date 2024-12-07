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
          ? "text-[#B197FC] font-medium"
          : "text-black hover:text-[#B197FC] transition-colors"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
