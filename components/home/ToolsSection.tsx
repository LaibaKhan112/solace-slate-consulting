import type { CSSProperties } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const tools = [
  {
    name: "HubSpot",
    src: "/images/logos/hubspot.png",
    scale: 0.82,
  },
  {
    name: "Salesforce",
    src: "/images/logos/salesforce.png",
    scale: 1.38,
  },
  {
    name: "GoHighLevel",
    src: "/images/logos/gohighlevel.png",
    scale: 0.92,
  },
  {
    name: "LinkedIn Sales Navigator",
    src: "/images/logos/linkedinsalesnavigator.png",
    scale: 0.92,
  },
  {
    name: "Excel",
    src: "/images/logos/excel.png",
    scale: 0.9,
  },
  {
    name: "Google Sheets",
    src: "/images/logos/googlesheets.png",
    scale: 0.92,
  },
  {
    name: "Google Analytics",
    src: "/images/logos/googleanalytics.png",
    scale: 1.08,
  },
];

export default function ToolsSection() {
  return (
    <section className="bg-background py-10 sm:py-11 lg:py-12">
      <Container>
        {/* Heading */}
        <ScrollReveal className="animate-fade-in text-center [--enter-y:10px]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage sm:text-sm">
            Comfortable in your stack
          </p>
        </ScrollReveal>

        {/* Logos */}
        <ScrollReveal>
        <ul
          className="
            mt-9
            grid
            grid-cols-2
            items-center
            gap-x-8
            gap-y-9
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-7
            lg:gap-x-5
            lg:gap-y-0
          "
        >
          {tools.map((tool, index) => (
            <li
              key={tool.name}
              style={{ "--card-delay": `${index * 50}ms` } as CSSProperties}
              className="
                animate-fade-in
                group
                flex
                h-[72px]
                items-center
                justify-center
                [--enter-y:6px]
              "
            >
              <div
                className="
                  relative
                  flex
                  h-[58px]
                  w-[170px]
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  ease-out
                  motion-safe:group-hover:-translate-y-1
                "
              >
                <Image
                  src={tool.src}
                  alt={tool.name}
                  fill
                  sizes="170px"
                  className="
                    object-contain
                    transition-all
                    duration-300
                    ease-out
                    group-hover:opacity-100
                  "
                  style={{
                    transform: `scale(${tool.scale})`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
        </ScrollReveal>
      </Container>
    </section>
  );
}
