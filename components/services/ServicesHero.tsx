import Image from "next/image";

import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/config/site";

export default function ServicesHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-background
        bg-[url('/images/decoratives/mountain-watercolor.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* =====================================================
          DESKTOP VISUAL — RIGHT SIDE
      ====================================================== */}

      <div
        className="
          animate-fade-in
          pointer-events-none
          absolute
          right-0
          bottom-0
          hidden
          h-[470px]
          w-[45%]
          [--card-delay:300ms]
          [--enter-scale:0.985]
          [--enter-y:8px]

          lg:block
        "
      >
        <Image
          src="/images/services/hero-vase-books.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="46vw"
          className="
            object-contain
            object-right-bottom
          "
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <Container className="relative z-10">
        <div
          className="
            grid
            grid-cols-1

            pt-[92px]
            pb-10

            sm:pt-[100px]
            sm:pb-12

            lg:min-h-[520px]
            lg:grid-cols-[47%_53%]
            lg:items-center
            lg:pt-[100px]
            lg:pb-8
          "
        >
          {/* =================================================
              MOBILE / TABLET IMAGE — FIRST
          ================================================== */}

          <div
            className="
              animate-fade-in
              relative
              order-1
              mb-7
              h-[285px]
              w-full
              [--card-delay:60ms]
              [--enter-y:10px]

              sm:h-[350px]
              md:h-[390px]

              lg:hidden
            "
          >
            <Image
              src="/images/services/hero-vase-books.png"
              alt="Decorative vase with greenery, stacked books and bowl"
              fill
              priority
              sizes="100vw"
              className="
                object-contain
                object-center
              "
            />
          </div>

          {/* =================================================
              TEXT
              MOBILE: SECOND
              DESKTOP: LEFT
          ================================================== */}

          <div
            className="
              order-2

              lg:order-none
              lg:pr-8

              xl:pr-4
            "
          >
            {/* Eyebrow */}
            <div className="animate-fade-in [--enter-y:8px]">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-sage

                  sm:text-sm
                "
              >
                SERVICES
              </p>

              <span
                aria-hidden="true"
                className="
                  mt-3
                  block
                  h-px
                  w-10
                  bg-[#b99a57]
                "
              />
            </div>

            {/* Heading */}
            <h1
              className="
                animate-fade-in
                mt-4
                max-w-[570px]
                text-[40px]
                leading-[1.03]
                tracking-tight
                text-foreground
                [--card-delay:80ms]
                [--enter-y:10px]

                sm:text-[46px]
                md:text-[50px]

                lg:text-[52px]

                xl:text-[56px]
              "
            >
              Fix what&rsquo;s underneath
              <br />
              the growth.
            </h1>

            {/* Description */}
            <p
              className="
                animate-fade-in
                mt-5
                max-w-[520px]
                text-[15px]
                leading-[1.7]
                text-muted-foreground
                [--card-delay:150ms]
                [--enter-y:8px]

                sm:text-base
              "
            >
              Rachel helps growth-minded teams clean up data, build better
              processes, and turn outreach and retention into predictable
              results. From CRM cleanups to AI readiness and team
              systems&mdash;everything works better when the foundation is
              right.
            </p>

            {/* CTA */}
            <div
              className="
                animate-fade-in
                mt-6
                flex
                flex-col
                gap-4
                [--card-delay:220ms]
                [--enter-y:8px]

                sm:flex-row
                sm:items-center
              "
            >
              <ButtonLink
                href={siteConfig.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="
                  w-full
                  justify-center

                  sm:w-auto
                "
              >
                {siteConfig.cta.label}
              </ButtonLink>

              <a
                href="#services"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  text-sm
                  font-medium
                  text-foreground
                  transition-colors
                  duration-200
                  hover:text-primary

                  sm:w-auto
                  sm:justify-start
                "
              >
                See how it works

                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-y-0.5
                  "
                >
                  <path
                    d="M8 2.5v10M4 9l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Empty desktop column because visual is absolute */}
          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}