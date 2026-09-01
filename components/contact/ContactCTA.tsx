import type { CSSProperties } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";

export default function ContactCTA() {
  return (
    <section className="bg-background py-8 sm:py-9 lg:py-10">
      <Container>
        <ScrollReveal
          className="
            animate-fade-in
            relative
            overflow-hidden
            rounded-[10px]
            bg-primary
            px-6
            py-8
            [--enter-y:12px]

            sm:px-8
            sm:py-9

            lg:min-h-[190px]
            lg:px-12
            lg:py-9
          "
        >
          {/* Botanical sprig */}
          <Image
            src="/images/contact/contact-botanical-sprig.png"
            alt=""
            aria-hidden="true"
            width={1448}
            height={1086}
            className="
              animate-fade-in
              pointer-events-none
              absolute
              -right-5
              -bottom-5
              z-0
              hidden
              w-[250px]
              select-none
              opacity-50
              [--card-delay:220ms]
              [--enter-y:0px]

              sm:block

              lg:w-[300px]

              xl:w-[330px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-start
              gap-7

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Left content */}
            <div
              style={{ "--card-delay": "0ms" } as CSSProperties}
              className="animate-fade-in max-w-[540px] [--enter-y:8px]"
            >
              <h2 className="text-[28px] leading-[1.15] text-white sm:text-[32px] lg:text-[36px]">
                The right strategy
                <br />
                changes everything.
              </h2>

              <p className="mt-2 text-[19px] italic text-sage-light sm:text-[21px]">
                Let&rsquo;s start with a conversation.
              </p>
            </div>

            {/* Right — CTA buttons */}
            <div
              style={{ "--card-delay": "150ms" } as CSSProperties}
              className="
                animate-fade-in
                flex
                w-full
                flex-col
                items-start
                gap-3
                [--enter-y:10px]

                lg:w-auto
                lg:items-end
              "
            >
              <ButtonLink
                href={siteConfig.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="
                  h-11
                  w-full
                  justify-center
                  bg-white!
                  text-primary!
                  hover:bg-white/90!

                  sm:w-auto
                "
              >
                {siteConfig.cta.label}
              </ButtonLink>

              <ButtonLink
                href="/about"
                variant="outline"
                className="
                  h-11
                  w-full
                  justify-center
                  border-white/40!
                  bg-transparent!
                  text-white!
                  hover:border-white/60!
                  hover:bg-white/10!

                  sm:w-auto
                "
              >
                Learn more about my approach →
              </ButtonLink>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
