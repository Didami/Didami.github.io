import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = [
  "home",
  "about",
  "projects",
  "experience",
  "contact",
] as const;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md">
      <nav className="flex flex-row items-center justify-between px-2 py-5 sm:px-6 md:px-8 md:py-8 lg:px-12 lg:py-10 border-b-2 border-borders mx-6 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-24">
        <a
          href="#home"
          className="text-2xl sm:text-3xl font-semibold text-details"
          onClick={() => setOpen(false)}
        >
          DF.
        </a>

        {/* Links desktop */}
        <div className="hidden md:flex flex-row gap-8 lg:gap-16 xl:gap-24">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-heading ${active == link.href.slice(1) ? "text-fg" : "text-details"} text-lg lg:text-xl  hover:text-fg transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block" />

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-details hover:text-fg transition-colors"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MENU */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full mx-6 sm:mx-10 md:hidden overflow-hidden bg-bg transition-all duration-300 ease-in-out ${
          open
            ? "max-h-96 opacity-100 border-b-2 border-borders"
            : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-6 px-2 sm:px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="font-heading text-xl text-details hover:text-fg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
