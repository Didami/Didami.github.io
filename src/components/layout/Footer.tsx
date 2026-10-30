const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Didami",
    src: "/images/icons/GitHub.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diego-flores-álvarez-376715371/",
    src: "/images/icons/LinkedIn.png",
  },
];

export const Footer = () => {
  return (
    <footer className="mx-6 border-t-2 border-borders sm:mx-10 md:mx-12 lg:mx-16 xl:mx-24">
      <div className="flex flex-col items-center gap-10 px-2 py-12 sm:px-6 md:flex-row md:justify-between md:py-14 lg:px-12">
        {/* BRAND */}
        <a href="#home" className="text-3xl font-semibold text-details">
          DF.
        </a>

        <p className="text-sm text-gray/50">
          © {new Date().getFullYear()} Diego Flores. All rights reserved.
        </p>

        {/* SOCIALS */}
        <div className="flex flex-row gap-8">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="transition-opacity hover:opacity-50"
            >
              <img src={social.src} alt="" width={28} height={28} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
