import type { CSSProperties } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";

export default function HomeCTA() {
  return (
    <section className="bg-background-alt py-8 sm:py-9 lg:py-10">
      <Container>
        <ScrollReveal
          className="
            animate-fade-in
            relative
            overflow-hidden
            rounded-[5px]
            bg-primary
            px-6
            py-9
            [--enter-y:12px]
            sm:px-8
            sm:py-10
            lg:px-12
            lg:py-8
          "
        >
          {/* Decorative plant */}
          <Image
            src="/images/decoratives/potted-plant.png"
            alt=""
            aria-hidden="true"
            width={1086}
            height={1448}
            style={{ "--card-delay": "220ms" } as CSSProperties}
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
              [--enter-y:0px]
              lg:block
              xl:right-0
              xl:w-[115px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              items-center
              gap-8
              lg:grid-cols-[60%_40%]
              lg:gap-2
            "
          >
            {/* Left content */}
            <div
              style={{ "--card-delay": "0ms" } as CSSProperties}
              className="
                text-center
                lg:pl-4
              "
            >
              <h2
                className="
                  text-[30px]
                  leading-[1.08]
                  text-white
                  sm:text-[34px]
                  lg:text-[36px]
                  xl:text-[38px]
                "
              >
                LET&rsquo;S START WITH A CLEAN SLATE.
              </h2>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-[520px]
                  text-[15px]
                  leading-[1.6]
                  text-white/80
                  sm:text-base
                "
              >
                Twenty minutes, no pitch. Tell me what&rsquo;s going on and
                I&rsquo;ll tell you whether I can help.
              </p>
            </div>

            {/* Buttons */}
            <div
              style={{ "--card-delay": "150ms" } as CSSProperties}
              className="
                animate-fade-in
                flex
                w-full
                flex-col
                items-center
                gap-3
                [--enter-y:10px]
                lg:pr-[90px]
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
                  sm:w-[250px]
                "
              >
                {siteConfig.cta.label}
              </ButtonLink>

              <ButtonLink
                href="/contact"
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
                  sm:w-[250px]
                "
              >
                Or send me a message
              </ButtonLink>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}