"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/config/site";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-background-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {isOpen ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute right-0 top-full mt-2 w-64 max-w-[calc(100vw-2.5rem)] rounded-md border border-border bg-background p-4 shadow-sm"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-4">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block text-base font-medium transition-colors ${
                        isActive ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-6">
            <ButtonLink
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              {siteConfig.cta.label}
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
