import type { CSSProperties } from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function RachelIntro() {
  return (
    <Section className="bg-background-alt pt-15! pb-15! sm:pt-17! sm:pb-17! lg:pt-17! lg:pb-17!">
      <ScrollReveal className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-6 lg:grid-cols-[46%_1fr] lg:gap-14 lg:pl-0 lg:pr-8">
        {/* Rachel Image */}
        <div
  style={{ "--card-delay": "0ms" } as CSSProperties}
  className="animate-fade-in [--enter-y:10px] lg:[--enter-x:-10px] lg:[--enter-y:0px]"
>
  <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[3/2] lg:aspect-[5/3]">
    <Image
      src="/images/home/rachel-workspace.png"
      alt="Rachel, founder of Solace & Slate Consulting"
      fill
      sizes="(min-width: 1024px) 46vw, 100vw"
      className="object-cover object-center"
    />

    {/* Right-side fade / whitening */}
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[12%] lg:bg-gradient-to-r from-transparent via-background-alt/75 to-background-alt" />
  </div>
</div>

        {/* Content */}
        <div
          style={{ "--card-delay": "100ms" } as CSSProperties}
          className="animate-fade-in relative [--enter-y:10px] lg:[--enter-x:10px] lg:[--enter-y:0px]"
        >
          {/* Large Botanical Decoration */}
          <Image
            src="/images/decoratives/botanical-branch.png"
            alt=""
            aria-hidden="true"
            width={1024}
            height={1536}
            className="pointer-events-none absolute -right-8 -bottom-14 z-0 hidden w-[260px] select-none opacity-20 lg:block xl:w-[330px]"
          />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sage sm:text-sm">
              Meet Rachel
            </p>

            <h2 className="mt-3 text-[38px] leading-[1.1] text-foreground sm:text-[44px] lg:text-[52px]">
              Hi - I&rsquo;m Rachel.
            </h2>

            <p className="mt-5 max-w-140 text-base leading-[1.7] text-muted-foreground lg:text-lg">
              For about fifteen years, I&rsquo;ve been the person called in
              when a business system isn&rsquo;t working the way it should.
              I connect the data, pipeline, outreach, retention, and
              onboarding so the whole system works together.
            </p>

            <div className="mt-8">
              <ButtonLink
                href="/about"
                variant="outline"
                className="w-full justify-center sm:w-auto"
              >
                More about me
              </ButtonLink>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}