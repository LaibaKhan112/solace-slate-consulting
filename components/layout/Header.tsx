"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/config/site";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* =========================================================
     SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MENU WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* =========================================================
     PREVENT BODY SCROLL WHEN MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          w-full
          transition-all
          duration-300
          ease-out

          ${
            scrolled || mobileOpen
              ? `
                  border-b
                  border-border/50
                  bg-background/95
                  shadow-[0_2px_12px_rgba(25,45,35,0.04)]
                  backdrop-blur-md
                `
              : `
                  border-b
                  border-transparent
                  bg-transparent
                  shadow-none
                `
          }
        `}
      >
        <Container>
          <div
            className="
              flex
              h-[78px]
              items-center
              justify-between

              sm:h-[88px]

              lg:h-[104px]
            "
          >
            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              aria-label="Solace & Slate Consulting home"
              className="relative z-50 shrink-0"
            >
              <Image
                src="/images/logos/solace-slate-logo.png"
                alt="Solace & Slate Consulting"
                width={500}
                height={180}
                priority
                className="
                  h-auto
                  w-[170px]

                  sm:w-[195px]

                  lg:w-[235px]
                "
              />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav
              aria-label="Primary navigation"
              className="
                absolute
                left-1/2
                hidden
                -translate-x-1/2
                items-center
                gap-8

                md:flex

                lg:gap-10
              "
            >
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      group
                      relative
                      py-2
                      text-[15px]
                      font-medium
                      transition-colors
                      duration-200

                      lg:text-base

                      ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    {item.label}

                    <span
                      className={`
                        absolute
                        inset-x-0
                        bottom-0
                        h-px
                        origin-left
                        bg-primary
                        transition-transform
                        duration-200

                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* =================================================
                DESKTOP CTA
            ================================================== */}

            <div className="hidden md:block">
              <ButtonLink
                href={siteConfig.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="
                  whitespace-nowrap
                  px-6

                  lg:px-7
                "
              >
                {siteConfig.cta.label}
              </ButtonLink>
            </div>

            {/* =================================================
                MOBILE ACTIONS
            ================================================== */}

            <div
              className="
                relative
                z-50
                flex
                items-center
                gap-2

                md:hidden
              "
            >
              {/* Small mobile CTA */}
              <ButtonLink
                href={siteConfig.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="
                  hidden
                  h-10
                  px-4
                  text-[13px]

                  min-[370px]:inline-flex
                "
              >
                Book a call
              </ButtonLink>

              {/* Hamburger */}
              <button
                type="button"
                aria-label={
                  mobileOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((prev) => !prev)}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-[6px]
                  border
                  border-primary/15
                  bg-background/80
                  text-primary
                  transition-colors

                  hover:bg-sage-light
                "
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          transition-all
          duration-300

          md:hidden

          ${
            mobileOpen
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      >
        {/* Background */}
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMobileOpen(false)}
          className="
            absolute
            inset-0
            bg-foreground/15
            backdrop-blur-[2px]
          "
        />

        {/* Menu panel */}
        <div
          className={`
            absolute
            inset-x-0
            top-[78px]
            border-t
            border-border/50
            bg-background
            px-5
            pt-5
            pb-7
            shadow-[0_18px_35px_rgba(20,45,32,0.08)]
            transition-transform
            duration-300

            sm:top-[88px]

            ${
              mobileOpen
                ? "translate-y-0"
                : "-translate-y-5"
            }
          `}
        >
          <Container className="px-0">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col"
            >
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex
                      items-center
                      justify-between
                      border-b
                      border-border/60
                      py-4
                      text-[18px]
                      transition-colors

                      ${
                        isActive
                          ? "font-semibold text-primary"
                          : "text-foreground hover:text-primary"
                      }
                    `}
                  >
                    <span>{item.label}</span>

                    <span
                      aria-hidden="true"
                      className="
                        text-lg
                        text-sage
                      "
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Full mobile CTA */}
            <ButtonLink
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="
                mt-6
                w-full
                justify-center
              "
            >
              {siteConfig.cta.label}
            </ButtonLink>
          </Container>
        </div>
      </div>
    </>
  );
}