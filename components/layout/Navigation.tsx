"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-8">
      {siteConfig.nav.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <li
            key={item.href}
            className="animate-fade-in [--enter-duration:500ms] [--enter-y:6px]"
            style={{ "--card-delay": `${100 + index * 40}ms` } as CSSProperties}
          >
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-full bg-primary"
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
