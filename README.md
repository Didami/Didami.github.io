# Portfolio

Personal portfolio of **Diego Flores**, Software Engineering student at Tecnológico de Monterrey (CSF) and independent mobile & web developer.

🔗 **Live:** [didami.github.io](https://didami.github.io)

## Features

- Fully responsive layout with a mobile hamburger menu
- Scroll spy: the navbar highlights the active section and the URL hash updates as you scroll
- Smooth anchor navigation with sticky-header offset
- Hero with an orbiting tech-stack ring around the profile picture
- Sections: Home, About, Projects, Experience & Education, Contact
- Automatic deployment to GitHub Pages via GitHub Actions

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) icons
- Fonts: Montserrat (headings) and Avenir Next / system fallback (body)

## Project Structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, Section
│   └── ui/         # Button, SkillPill, OrbitIcon, ProjectSlide...
├── sections/       # Hero, About, Projects, Experience, Contact
├── hooks/          # useActiveSection (scroll spy + URL sync)
├── data/           # Project data
├── App.tsx
└── index.css       # Tailwind theme (colors, fonts) and base styles
public/
└── images/         # Profile picture and tech icons
```

## Contact

- GitHub: [@Didami](https://github.com/Didami)
- LinkedIn: [Diego Flores Álvarez](https://www.linkedin.com/in/diego-flores-álvarez-376715371/)
