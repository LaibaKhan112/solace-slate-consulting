"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig, siteLogo } from "@/config/site";

interface FooterProps {
  /**
   * Hides the mini "Send a message" form in the footer's last column.
   * Defaults to hiding it on /contact, since that page already has the
   * primary contact form — pass explicitly to override.
   */
  hideContactForm?: boolean;
}

const eyebrowClassName =
  "text-xs font-bold uppercase tracking-[0.16em] text-primary";

const inputClassName =
  "h-10 w-full min-w-0 rounded-[4px] border border-border bg-transparent px-2.5 text-[13px] text-foreground placeholder:text-muted-foreground transition-colors focus-visible:border-primary focus-visible:outline-none";

const services = [
  {
    number: "01",
    title: "Data Cleanup & CRM Organization",
    description:
      "Clean, standardize, and organize your CRM so the data becomes useful again.",
  },
  {
    number: "02",
    title: "Pipeline & Workflow Design",
    description:
      "Build clear stages, follow-up rhythms, and reporting around how you actually sell.",
  },
  {
    number: "03",
    title: "Outreach Campaigns",
    description:
      "Create structured outreach across LinkedIn, email, and phone with clean follow-up.",
  },
  {
    number: "04",
    title: "AI-Readiness Prep",
    description:
      "Prepare your data and processes so AI supports the business instead of amplifying the mess.",
  },
  {
    number: "05",
    title: "Market & Audience Research",
    description:
      "Identify the right market, audience, and channels before you spend time or money.",
  },
];

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M7.8 10.5v5.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M7.8 7.7v.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M11 16v-3.8c0-1.2.8-2.2 2-2.2s2 1 2 2.2V16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="m5.5 9 6.5 6.5L18.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AboutColumn() {
  return (
    <div
      style={{ "--card-delay": "0ms" } as CSSProperties}
      className="animate-fade-in relative overflow-hidden border-b border-border px-5 py-6 [--enter-y:8px] sm:border-r xl:border-b-0 xl:py-7"
    >
      {/* Decorative S */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -bottom-6 select-none font-display text-[105px] leading-none text-primary/[0.06]"
      >
        S
      </span>

      <div className="relative z-10">
        <p className={eyebrowClassName}>About</p>

        <h2
          className="
            mt-1.5
            max-w-[285px]
            text-[22px]
            font-medium
            leading-[1.16]
            text-foreground
            sm:text-[23px]
            lg:text-[24px]
          "
        >
          I&rsquo;m Rachel Zandlo,
          <br />
          and I like fixing the parts of
          <br />
          business most people avoid.
        </h2>

        <p className="mt-2 max-w-[275px] text-sm leading-[1.5] text-muted-foreground">
          I clean up the stuff most people ignore and build systems that help
          you grow.
        </p>

        <ButtonLink
          href="/about"
          variant="primary"
          className="mt-4 px-5 py-2.5 text-sm"
        >
          Read my full story
        </ButtonLink>
      </div>
    </div>
  );
}

function ServicesColumn() {
  return (
    <div
      style={{ "--card-delay": "55ms" } as CSSProperties}
      className="animate-fade-in border-b border-border px-5 py-6 [--enter-y:8px] xl:border-r xl:border-b-0 xl:py-7"
    >
      <p className={eyebrowClassName}>Services</p>

      <p className="mt-2 max-w-[470px] text-sm leading-[1.55] text-muted-foreground">
        Every engagement is scoped to what you actually need — most start
        with a data cleanup and grow from there.
      </p>

      {/* Service accordions */}
      <div className="mt-3 border-t border-border">
        {services.map((service) => (
          <details
            key={service.number}
            className="group border-b border-border"
          >
            <summary
              className="
                flex
                cursor-pointer
                list-none
                items-center
                justify-between
                gap-3
                py-2.5
                [&::-webkit-details-marker]:hidden
              "
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="w-6 shrink-0 text-xs font-semibold text-sage">
                  {service.number}
                </span>

                <span className="truncate text-sm font-semibold text-foreground">
                  {service.title}
                </span>
              </span>

              <span
                className="
                  shrink-0
                  text-foreground
                  transition-transform
                  duration-200
                  group-open:rotate-45
                "
              >
                <PlusIcon />
              </span>
            </summary>

            <p
              className="
                pb-2.5
                pl-9
                pr-6
                text-[12.5px]
                leading-[1.5]
                text-muted-foreground
              "
            >
              {service.description}
            </p>
          </details>
        ))}
      </div>

      <Link
        href="/services"
        className="
          group
          mt-3
          inline-flex
          items-center
          gap-1
          text-sm
          font-semibold
          text-primary
          underline-offset-4
          hover:underline
        "
      >
        See all services
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 motion-safe:group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </div>
  );
}

function ConnectColumn() {
  return (
    <div
      style={{ "--card-delay": "110ms" } as CSSProperties}
      className="animate-fade-in border-b border-border px-5 py-6 [--enter-y:8px] sm:border-r sm:border-b-0 xl:py-7"
    >
      <p className={eyebrowClassName}>Connect</p>

      <p className="mt-1.5 text-sm font-medium text-foreground">
        Find me on LinkedIn
      </p>

      <div className="mt-3 flex flex-col gap-2.5">
        <a
          href="https://linkedin.com/in/rachel-zandlo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 text-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          <LinkedInIcon />
          LinkedIn (Personal)
        </a>

        <span className="flex items-center gap-2.5 text-sm text-muted-foreground/75">
          <LinkedInIcon />
          LinkedIn (Company - coming soon)
        </span>
      </div>
    </div>
  );
}

function BookAndMessageColumn({ hideContactForm }: { hideContactForm: boolean }) {
  return (
    <div
      style={{ "--card-delay": "165ms" } as CSSProperties}
      className="animate-fade-in relative overflow-hidden px-5 py-6 [--enter-y:8px] xl:py-7"
    >
      {/* Right-side plant */}
      <Image
        src="/images/decoratives/potted-plant.png"
        alt=""
        aria-hidden="true"
        width={1086}
        height={1448}
        className="
          pointer-events-none
          absolute
          -right-2
          bottom-0
          z-0
          hidden
          w-[78px]
          select-none
          opacity-20
          sm:block
          xl:w-[86px]
        "
      />

      <div className="relative z-10">
        <p className={eyebrowClassName}>Book a Call</p>

        <p className="mt-1.5 text-sm leading-[1.45] text-muted-foreground">
          20 minutes.
          <br />
          No pitch. No obligation.
        </p>

        <ButtonLink
          href={siteConfig.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="mt-3 px-5 py-2.5 text-sm"
        >
          {siteConfig.cta.label}
        </ButtonLink>

        {/* Send message */}
        {!hideContactForm && (
          <div className="mt-5 border-t border-border pt-4">
            <p className={eyebrowClassName}>Send a Message</p>

            <form className="mt-3 flex flex-col gap-2">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="footer-name" className="sr-only">
                    Name
                  </label>

                  <input
                    id="footer-name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className={inputClassName}
                  />
                </div>

                <div className="min-w-0">
                  <label htmlFor="footer-email" className="sr-only">
                    Email
                  </label>

                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={inputClassName}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="min-w-0">
                  <label htmlFor="footer-company" className="sr-only">
                    Company name
                  </label>

                  <input
                    id="footer-company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className={inputClassName}
                  />
                </div>

                <div className="min-w-0">
                  <label htmlFor="footer-message" className="sr-only">
                    What&rsquo;s going on?
                  </label>

                  <input
                    id="footer-message"
                    name="message"
                    type="text"
                    placeholder="What’s going on?"
                    className={inputClassName}
                  />
                </div>
              </div>

              {/* Select */}
              <div className="relative min-w-0">
                <label htmlFor="footer-source" className="sr-only">
                  How did you hear about me?
                </label>

                <select
                  id="footer-source"
                  name="source"
                  defaultValue=""
                  className={`${inputClassName} appearance-none pr-8 text-muted-foreground`}
                >
                  <option value="" disabled>
                    How did you hear about me?
                  </option>

                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">Referral</option>
                  <option value="search">Search / Google</option>
                  <option value="other">Other</option>
                </select>

                <span className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-muted-foreground">
                  <ChevronDownIcon />
                </span>
              </div>

              <button
                type="button"
                className="
                  mt-0.5
                  inline-flex
                  h-10
                  w-full
                  items-center
                  justify-center
                  rounded-[4px]
                  bg-primary
                  px-5
                  text-sm
                  font-semibold
                  tracking-wide
                  text-white!
                  transition-colors
                  hover:bg-primary-dark
                "
              >
                Send it over
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function BottomBar() {
  const year = new Date().getFullYear();

  return (
    <div
      style={{ "--card-delay": "260ms" } as CSSProperties}
      className="animate-fade-in flex flex-col items-center gap-4 border-t border-border py-4 text-center [--enter-y:8px] sm:flex-row sm:justify-between sm:text-left"
    >
      <Link
        href="/"
        aria-label={`${siteConfig.name} — Home`}
        className="inline-block"
      >
        <Image
          src={siteLogo.src}
          alt={siteLogo.alt}
          width={siteLogo.width}
          height={siteLogo.height}
          className="h-auto w-[150px] sm:w-[170px]"
        />
      </Link>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-xs text-muted-foreground">
        © {year} {siteConfig.name}, LLC. All rights reserved.
      </p>
    </div>
  );
}

export default function Footer({ hideContactForm }: FooterProps = {}) {
  const pathname = usePathname();
  const shouldHideContactForm = hideContactForm ?? pathname === "/contact";

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[22%_31%_19%_28%]">
            <AboutColumn />
            <ServicesColumn />
            <ConnectColumn />
            <BookAndMessageColumn hideContactForm={shouldHideContactForm} />
          </div>

          <BottomBar />
        </ScrollReveal>
      </Container>
    </footer>
  );
}