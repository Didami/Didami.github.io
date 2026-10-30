import { useEffect, useState } from "react";

const SITE_NAME = "Diego Flores";

const sectionTitles: Record<string, string> = {
  home: SITE_NAME,
  about: `About | ${SITE_NAME}`,
  projects: `Projects | ${SITE_NAME}`,
  experience: `Experience | ${SITE_NAME}`,
  contact: `Contact | ${SITE_NAME}`,
};

export const useActiveSection = (ids: readonly string[]) => {
  const [active, setActive] = useState<string>(
    () => window.location.hash.slice(1) || ids[0],
  );

  // 1) Observar qué sección cruza una "franja" en el centro del viewport
  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // Solo cuenta la franja entre ~45% y ~50% de la altura del viewport
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    // Si llegas al final de la página, activa la última sección
    // (por si es más corta que el viewport y nunca cruza la franja)
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) setActive(ids[ids.length - 1]);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  // 2) Reflejar la sección activa en la URL y en el título de la pestaña
  //    (replaceState: no ensucia el historial ni dispara scroll/hashchange)
  useEffect(() => {
    const { pathname, search } = window.location;
    const url = active === ids[0] ? `${pathname}${search}` : `#${active}`;
    window.history.replaceState(null, "", url);

    document.title = sectionTitles[active] ?? SITE_NAME;
  }, [active, ids]);

  return active;
};
