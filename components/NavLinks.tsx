"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";

// Client component because it needs usePathname() to know which link is
// "active" right now — that information only exists in the browser.
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
      {nav.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-md px-3 py-2 font-mono text-sm transition ${
                isActive
                  ? "bg-surface2 text-accent"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
