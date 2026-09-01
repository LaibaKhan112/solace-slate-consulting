import type { CSSProperties } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
      <path
        d="M20 4S9 3.5 6 9.5 5 20 5 20s10.5.5 13.5-5.5S20 4 20 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 20 15 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutCTA() {
  return (
    <section className="bg-background py-8 sm:py-9 lg:py-10">
      <Container>
        <ScrollReveal
          className="
            animate-fade-in
            relative
            overflow-hidden
            rounded-[5px]
            bg-primary
            px-6
            py-10
            [--enter-y:12px]
            sm:px-8
            sm:py-11
            lg:px-12
            lg:py-10
          "
        >
          {/* Decorative botanical corners */}
          <Image
            src="/images/decoratives/potted-plant.png"
            alt=""
            aria-hidden="true"
            width={1086}
            height={1448}
            className="
              animate-fade-in
              pointer-events-none
              absolute
              -right-5
              bottom-0
              z-0
              hidden
              w-[95px]
              select-none
              opacity-35
              [--card-delay:220ms]
              [--enter-y:0px]
              lg:block
              xl:right-0
              xl:w-[115px]
            "
          />
          <Image
            src="/images/decoratives/botanical-branch.png"
            alt=""
            aria-hidden="true"
            width={1024}
            height={1536}
            className="
              pointer-events-none
              absolute
              -left-6
              -top-10
              z-0
              hidden
              w-[110px]
              rotate-180
              select-none
              opacity-20
              sm:block
              lg:w-[130px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              gap-8
              text-center
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:text-left
            "
          >
            {/* Left content */}
            <div
              style={{ "--card-delay": "0ms" } as CSSProperties}
              className="animate-fade-in flex flex-col items-center lg:max-w-[520px] lg:items-start"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <LeafIcon />
              </span>

              <h2 className="mt-5 text-[28px] leading-[1.15] text-white sm:text-[34px] lg:text-[38px]">
                Let&rsquo;s build what&rsquo;s next&mdash;together.
              </h2>

              <p className="mt-3 max-w-[440px] text-[15px] leading-[1.6] text-white/80 sm:text-base">
                If you&rsquo;re ready for clarity, strategy, and a partner who
                gets it, I&rsquo;d love to connect.
              </p>
            </div>

            {/* Right — CTA */}
            <div
              style={{ "--card-delay": "150ms" } as CSSProperties}
              className="animate-fade-in flex w-full flex-col items-center gap-2.5 [--enter-y:10px] lg:w-auto lg:items-end"
            >
              <ButtonLink
                href={siteConfig.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="h-11 w-full justify-center bg-white! text-primary! hover:bg-white/90! sm:w-[250px]"
              >
                {siteConfig.cta.label}
              </ButtonLink>
              <p className="text-[12px] text-white/70">No pressure. Just a conversation.</p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
