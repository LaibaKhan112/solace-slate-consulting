export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Solace & Slate Consulting",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],
  cta: {
    label: "Book a 20-minute call",
    href: "https://cal.com/rachel-z-vgsxbr",
  } as NavLink,
};

export const siteLogo = {
  src: "/images/logos/solace-slate-logo.png",
  alt: "Solace & Slate Consulting",
  width: 2203,
  height: 714,
};
