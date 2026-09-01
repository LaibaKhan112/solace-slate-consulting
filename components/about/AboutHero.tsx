import Image from "next/image";

import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/config/site";

export default function AboutHero() {
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
          DESKTOP RACHEL IMAGE
      ====================================================== */}

      <div
        className="
          animate-fade-in
          absolute
          right-0
          top-[105px]
          hidden
          h-[445px]
          w-[48%]
          overflow-hidden
          [--card-delay:300ms]
          [--enter-scale:0.985]
          [--enter-y:8px]
          lg:block
        "
        style={{
          borderTopLeftRadius: "145px",
          borderBottomLeftRadius: "145px",
        }}
      >
        <Image
          src="/images/about/about-rachel-workspace.png"
          alt="Rachel working at her desk at Solace & Slate Consulting"
          fill
          priority
          sizes="48vw"
          className="
            object-cover
            object-[center_31%]
          "
        />

        {/* Soft blend into watercolor */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            w-[85px]
            bg-gradient-to-r
            from-background
            via-background/45
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT
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

            lg:min-h-[555px]
            lg:grid-cols-[48%_52%]
            lg:items-center
            lg:pt-[100px]
            lg:pb-6
          "
        >
          {/* =================================================
              MOBILE IMAGE — FIRST
          ================================================== */}

          <div
            className="
              animate-fade-in
              relative
              order-1
              mb-7
              h-[285px]
              w-full
              overflow-hidden
              rounded-[42px_42px_8px_8px]
              [--card-delay:80ms]
              [--enter-y:10px]

              sm:h-[370px]
              md:h-[410px]

              lg:hidden
            "
          >
            <Image
              src="/images/about/about-rachel-workspace.png"
              alt="Rachel working at her desk at Solace & Slate Consulting"
              fill
              priority
              sizes="100vw"
              className="
                object-cover
                object-[center_34%]
              "
            />
          </div>

          {/* =================================================
              TEXT
              MOBILE: SECOND
              DESKTOP: FIRST COLUMN
          ================================================== */}

          <div
            className="
              order-2

              lg:order-none
              lg:pr-8

              xl:pr-6
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
                ABOUT RACHEL
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
                text-[39px]
                leading-[1.04]
                tracking-tight
                text-foreground
                [--card-delay:80ms]
                [--enter-y:10px]

                sm:text-[45px]
                md:text-[49px]

                lg:text-[50px]

                xl:text-[54px]
              "
            >
              Strategy with heart.
              <br />

              <span className="text-sage italic">
                Results that last.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                animate-fade-in
                mt-4
                max-w-[500px]
                text-[15px]
                leading-[1.7]
                text-muted-foreground
                [--card-delay:150ms]
                [--enter-y:8px]

                sm:text-base
              "
            >
              I&rsquo;m Rachel&mdash;founder of Solace &amp; Slate Consulting.
              I help thoughtful business owners bring clarity to their vision
              and create strategy that&rsquo;s both grounded and growth-minded.
              My goal is simple: to help you build a business that feels
              aligned, sustainable, and successful.
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
                href="#how-i-work"
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
                Learn more about my approach

                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                >
                  <path
                    d="M3 8h9M8 3.5 12.5 8 8 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* =================================================
              EMPTY RIGHT COLUMN ON DESKTOP
          ================================================== */}

          <div className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}