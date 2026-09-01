import Image from "next/image";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background bg-[url('/images/decoratives/mountain-watercolor.png')] bg-cover bg-center bg-no-repeat lg:h-svh">
      <Container className="relative h-full">
        <div className="grid grid-cols-1 gap-4 pt-24 sm:gap-6 sm:pt-28 md:pt-32 lg:h-full lg:grid-cols-[55%_45%] lg:items-center lg:gap-8 lg:pt-[90px] lg:pb-0">
          {/* Rachel — FIRST on mobile, SECOND on desktop */}
          <div
            className="animate-fade-in relative order-1 mx-auto flex w-full items-end justify-center [--card-delay:150ms] [--enter-scale:0.985] [--enter-y:12px] sm:pb-6 lg:order-2 lg:h-full lg:justify-end lg:self-end"
          >
            {/* Botanical Branch */}
            <Image
              src="/images/decoratives/botanical-branch.png"
              alt=""
              width={1024}
              height={1536}
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-0
                bottom-0
                z-0
                w-[100px]
                select-none
                opacity-40
                sm:w-[125px]
                md:w-[150px]
                lg:right-0
                lg:w-[180px]
                lg:opacity-50
                xl:w-[220px]
              "
            />

            {/* Rachel */}
            <Image
              src="/images/home/hero-consultant.png"
              alt="Rachel, founder of Solace & Slate Consulting"
              width={1086}
              height={1448}
              preload
              sizes="(min-width: 1536px) 500px, (min-width: 1280px) 470px, (min-width: 1024px) 430px, 290px"
              className="
                relative
                z-10
                h-auto
                w-[230px]
                sm:w-[260px]
                md:w-[300px]
                lg:-translate-x-8
                lg:w-[430px]
                xl:-translate-x-10
                xl:w-[470px]
                2xl:w-[500px]
              "
            />
          </div>

          {/* Text — SECOND on mobile, FIRST on desktop */}
          <div className="order-2 pb-14 lg:order-1 lg:pb-20">
            {/* Eyebrow */}
            <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.15em] text-primary [--enter-y:10px] sm:pt-4 sm:text-sm">
              DATA CLEANUP. SYSTEMS THAT SCALE. GROWTH THAT LASTS.
            </p>

            {/* Main Heading */}
            <h1 className="animate-fade-in mt-4 max-w-[720px] text-[44px] leading-[0.98] tracking-tight text-foreground [--card-delay:80ms] sm:text-[48px] md:text-[54px] lg:text-[58px] xl:text-[62px]">
  Growth shouldn&rsquo;t be a guess.
</h1>

<p className="animate-fade-in mt-6 max-w-[510px] text-base leading-relaxed text-muted-foreground [--card-delay:160ms] [--enter-y:12px] sm:text-lg pt-4">
  I&rsquo;m Rachel. I fix the systems underneath growth: the market
  strategy, the data, the pipeline, the retention, the outreach, and the
  onboarding that keeps it running without me. Most people specialize in
  one piece. I do the whole system.
</p>
            {/* CTA Buttons */}
            <div className="animate-fade-in mt-6 flex flex-col gap-4 [--card-delay:230ms] [--enter-y:10px] sm:flex-row sm:items-center">
              <ButtonLink
                href={siteConfig.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full justify-center sm:w-auto"
              >
                {siteConfig.cta.label}
              </ButtonLink>

              <ButtonLink
                href="/#services"
                variant="outline"
                className="group inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                See what I do

                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-y-0.5"
                >
                  <path
                    d="M8 3v9M4 8.5 8 12.5 12 8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}