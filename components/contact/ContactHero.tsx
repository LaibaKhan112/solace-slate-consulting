import type { CSSProperties } from "react";
import Image from "next/image";

import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";

/* =========================================================
   CONTACT DETAILS
   Replace these when final information is available.
========================================================= */

const CONTACT_EMAIL = "hello@solaceandslate.com";
const CONTACT_PHONE = "(555) 010-2030";
const CONTACT_LOCATION_CITY = "City, State";
const CONTACT_LOCATION_NOTE = "Serving clients nationwide";

/* =========================================================
   ICONS
========================================================= */

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="m4.5 7 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path
        d="M7 3.5c.6 1.4 1 2.7 1.6 3.8.3.6.2 1.3-.3 1.8L7.1 10.3a11.7 11.7 0 0 0 6.6 6.6l1.2-1.2c.5-.5 1.2-.6 1.8-.3 1.1.6 2.4 1 3.8 1.6.9.4 1.5 1.3 1.4 2.3-.3 2.4-2.4 4-4.8 3.5C9.5 21.3 3.5 15.3 2 7.7 1.5 5.3 3.1 3.2 5.5 2.9c1-.1 1.9.5 2.3 1.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path
        d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="9.5"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const contactDetails = [
  {
    icon: <EnvelopeIcon />,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: <MapPinIcon />,
    label: "Location",
    value: CONTACT_LOCATION_CITY,
    note: CONTACT_LOCATION_NOTE,
  },
];

/* =========================================================
   CONTACT HERO
========================================================= */

export default function ContactHero() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-background

        lg:min-h-[610px]
      "
    >
      {/* =====================================================
          DESKTOP STILL-LIFE BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-0
          hidden
          w-[60%]

          lg:block
        "
      >
        <Image
          src="/images/contact/contact-desk-still-life.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="60vw"
          className="
            object-cover
            object-[67%_42%]
          "
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 7%, rgba(0,0,0,0.65) 17%, black 29%, black 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 7%, rgba(0,0,0,0.65) 17%, black 29%, black 100%)",
          }}
        />

        {/* Extra soft cream atmosphere */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-y-0
            left-0
            w-[220px]
            bg-gradient-to-r
            from-background
            via-background/45
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          DESKTOP WATERCOLOR MOUNTAINS
      ====================================================== */}

      <Image
        src="/images/contact/contact-mountain-watercolor.png"
        alt=""
        aria-hidden="true"
        width={1672}
        height={941}
        className="
          pointer-events-none
          absolute
          -bottom-[22px]
          left-0
          z-[1]
          hidden
          w-[49%]
          max-w-none
          select-none
          opacity-[0.32]

          lg:block
        "
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 58%, rgba(0,0,0,0.8) 72%, rgba(0,0,0,0.25) 89%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, black 0%, black 58%, rgba(0,0,0,0.8) 72%, rgba(0,0,0,0.25) 89%, transparent 100%)",
        }}
      />

      {/* =====================================================
          SOFT CENTER BRIDGE — DESKTOP
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[37%]
          z-[2]
          hidden
          h-[60%]
          w-[18%]
          bg-background/15
          blur-[34px]

          lg:block
        "
      />

      {/* =====================================================
          MAIN LAYOUT
      ====================================================== */}

      <Container className="relative z-10">
        <div
          className="
            grid
            grid-cols-1
            gap-7
            pt-[96px]
            pb-10

            sm:gap-8
            sm:pt-[102px]

            lg:min-h-[610px]
            lg:grid-cols-[44%_56%]
            lg:items-center
            lg:gap-7
            lg:pt-[96px]
            lg:pb-6

            xl:grid-cols-[43%_57%]
            xl:gap-8
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-10
              order-1
              max-w-[480px]

              lg:order-none
              lg:pr-4
            "
          >
            {/* Eyebrow */}
            <div className="animate-fade-in [--enter-y:8px]">
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-sage

                  sm:text-xs
                "
              >
                GET IN TOUCH
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
                max-w-[500px]
                text-[38px]
                leading-[1.04]
                tracking-tight
                text-foreground
                [--card-delay:70ms]
                [--enter-y:10px]

                sm:text-[43px]

                lg:text-[45px]

                xl:text-[48px]
              "
            >
              Let&rsquo;s create something
              <br />

              <span className="text-sage italic">
                meaningful together.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                animate-fade-in
                mt-4
                max-w-[430px]
                text-[14px]
                leading-[1.7]
                text-muted-foreground
                [--card-delay:130ms]
                [--enter-y:8px]

                sm:text-[15px]
              "
            >
              Whether you have a question, want to explore working together, or
              just want to say hello&mdash;I&rsquo;d love to hear from you.
              Fill out the form and I&rsquo;ll get back to you within
              1&ndash;2 business days.
            </p>

            {/* Contact details */}
            <ul
              className="
                mt-6
                flex
                flex-col
                gap-3.5
                border-l
                border-[#b99a57]/40
                pl-5
              "
            >
              {contactDetails.map((item, index) => (
                <li
                  key={item.label}
                  style={
                    {
                      "--card-delay": `${190 + index * 55}ms`,
                    } as CSSProperties
                  }
                  className="
                    animate-fade-in
                    flex
                    items-center
                    gap-3
                    [--enter-y:7px]
                  "
                >
                  {/* Icon */}
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-sage-light
                      text-primary
                    "
                  >
                    {item.icon}
                  </span>

                  {/* Details */}
                  <div className="min-w-0">
                    <p
                      className="
                        text-[13px]
                        font-semibold
                        leading-[1.3]
                        text-foreground
                      "
                    >
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="
                          mt-0.5
                          block
                          text-[12.5px]
                          leading-[1.45]
                          text-muted-foreground
                          transition-colors
                          hover:text-primary
                        "
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="
                          mt-0.5
                          text-[12.5px]
                          leading-[1.45]
                          text-muted-foreground
                        "
                      >
                        {item.value}
                      </p>
                    )}

                    {item.note ? (
                      <p
                        className="
                          mt-0.5
                          text-[11.5px]
                          italic
                          leading-[1.4]
                          text-muted-foreground/80
                        "
                      >
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              MOBILE STILL-LIFE IMAGE
              Comes AFTER text and BEFORE form
          ================================================== */}

          <div
            style={
              {
                "--card-delay": "230ms",
              } as CSSProperties
            }
            className="
              animate-fade-in
              relative
              z-10
              order-2
              h-[260px]
              w-full
              overflow-hidden
              rounded-[10px]
              [--enter-y:8px]

              sm:h-[310px]

              md:h-[350px]

              lg:hidden
            "
          >
            <Image
              src="/images/contact/contact-desk-still-life.png"
              alt="Warm workspace with books, ceramic cup and vase with greenery"
              fill
              sizes="100vw"
              className="
                object-cover
                object-[67%_72%]
              "
            />

            {/* Top softness */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-12
                bg-gradient-to-b
                from-background/35
                to-transparent
              "
            />

            {/* Bottom softness */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-10
                bg-gradient-to-t
                from-background/20
                to-transparent
              "
            />
          </div>

          {/* =================================================
              MOBILE MOUNTAIN DIVIDER
          ================================================== */}

          <div
            className="
              pointer-events-none
              relative
              order-2
              -mt-20
              h-[80px]
              overflow-hidden

              lg:hidden
            "
            aria-hidden="true"
          >
            <Image
              src="/images/contact/contact-mountain-watercolor.png"
              alt=""
              fill
              sizes="100vw"
              className="
                object-cover
                object-bottom
                opacity-20
              "
            />
          </div>

          {/* =================================================
              CONTACT FORM
          ================================================== */}

          <div
            style={
              {
                "--card-delay": "270ms",
              } as CSSProperties
            }
            className="
              animate-fade-in
              relative
              z-20
              order-3
              w-full
              [--enter-y:9px]

              lg:order-none
              lg:mx-auto
              lg:max-w-[500px]

              xl:max-w-[510px]
              xl:translate-x-2
            "
          >
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}