import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiDownload,
} from "react-icons/fi";
import { skills } from "./data/skills";
import { educationList } from "./data/education";
import { projects } from "./data/projects";
import { certificates } from "./data/certificates";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
];

const socials = [
  { href: "https://github.com/andriniainanekena/", label: "GitHub", Icon: FiGithub },
  {
    href: "https://www.linkedin.com/in/andriniainanekena",
    label: "LinkedIn",
    Icon: FiLinkedin,
  },
  { href: "mailto:andriniainanekena@gmail.com", label: "Email", Icon: FiMail },
];

function useActiveSection() {
  const [active, setActive] = useState("about");
  const clicking = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (clicking.current) return;
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleClick = (id: string) => {
    clicking.current = true;
    setActive(id);
    setTimeout(() => {
      clicking.current = false;
    }, 800);
  };

  return { active, handleClick };
}

export function App() {
  const { active, handleClick } = useActiveSection();

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)]/30 selection:text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(600px at 20% 10%, rgba(94,234,212,0.08), transparent 60%), radial-gradient(500px at 80% 80%, rgba(20,184,166,0.05), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Sidebar active={active} onNavClick={handleClick} />
          <Main />
        </div>
      </div>
    </div>
  );
}

function Sidebar({ active, onNavClick }: { active: string; onNavClick: (id: string) => void }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 pt-24 pb-12">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-[var(--text-bright)] sm:text-5xl"
        >
          Nekena Andriniaina
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-lg font-medium tracking-tight text-[var(--text-bright)]"
        >
          Computer Science Student
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-xs leading-normal text-[var(--text)]"
        >
          I value clean, readable code and tools that are simple to use.
        </motion.p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page jump links">
          <ul className="space-y-1">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id} className="relative">
                  <a
                    href={`#${s.id}`}
                    onClick={() => onNavClick(s.id)}
                    className="group relative flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-bg"
                        aria-hidden
                        className="absolute inset-0 rounded-md border border-[var(--accent)]/20 bg-[var(--accent)]/[0.06]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span
                      aria-hidden
                      className={`relative flex h-2 w-2 items-center justify-center transition-all duration-300 ${
                        isActive ? "scale-100" : "scale-75"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-dot-ping"
                          className="absolute h-3.5 w-3.5 rounded-full bg-[var(--accent)]/30 blur-[2px]"
                        />
                      )}
                      <span
                        className={`relative h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                          isActive
                            ? "bg-[var(--accent)]"
                            : "bg-[var(--text-muted)] group-hover:bg-[var(--text-bright)]"
                        }`}
                      />
                    </span>
                    <span
                      className={`relative text-[12px] font-bold uppercase tracking-[0.22em] transition-colors duration-300 ${
                        isActive
                          ? "text-[var(--text-bright)]"
                          : "text-[var(--text-muted)] group-hover:text-[var(--text-bright)]"
                      }`}
                    >
                      {s.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <ul className="flex items-center gap-2.5" aria-label="Social media">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.06] hover:text-[var(--accent)]"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          download
          aria-label="Download CV"
          className="group flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] text-[var(--accent)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/60 hover:bg-[var(--accent)]/[0.14]"
        >
          <FiDownload size={16} className="transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
    </main>
  );
}

function SectionHeader({ id, label }: { id: string; label: string }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[var(--bg)]/80 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2
        className="text-sm font-bold uppercase tracking-widest text-[var(--text-bright)]"
        id={`${id}-label`}
      >
        {label}
      </h2>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-x-1.5 gap-y-3.5">
      {items.map((item) => (
        <li key={item}>
          <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/[0.06] px-2.5 py-1 text-[12px] font-medium leading-5 text-[var(--accent)]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeader id="about" label="About" />
      <Reveal>
        <div className="space-y-4 text-[var(--text)]">
          <p>
            As a computer science student, I’m passionate about software and web development, and I enjoy learning by building real projects.
          </p>
          <p>
            For me, every project is an opportunity to explore new ideas, deepen my knowledge, and create something I’m proud of, whether it’s a simple command-line tool or a full web application built from scratch.
          </p>
          <p>
            Serious, curious and self-driven, I’m eager to keep learning, take on new challenges, and build strong experience in web and application development.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeader id="education" label="Education" />
      <ol className="group/list">
        {educationList.map((edu, i) => (
          <li key={edu.institution} className="mb-10">
            <Reveal delay={i * 0.05}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] sm:col-span-2">
                  {edu.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium text-[var(--text-bright)] leading-snug">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-medium text-[var(--accent)]">{edu.field}</p>
                  <p className="mt-2 text-sm leading-normal text-[var(--text)]">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeader id="skills" label="Skills" />
      <Reveal>
        <div className="grid grid-cols-4 gap-2.5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center justify-center gap-2 rounded-md border border-white/5 bg-white/[0.02] px-2 py-4 transition-all hover:border-[var(--accent)]/30 hover:bg-white/[0.04]"
              >
                <Icon
                  size={22}
                  style={{ color: skill.color }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-[11px] font-medium text-[var(--text)] text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeader id="projects" label="Projects" />
      <ul className="group/list">
        {projects.map((p, i) => (
          <li key={p.title} className="mb-10">
            <Reveal delay={i * 0.05}>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
                <div className="z-10 sm:col-span-2">
                  <div className="overflow-hidden rounded border border-white/10">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="inline-flex items-baseline gap-1 font-medium text-[var(--text-bright)] leading-snug">
                    <span>{p.title}</span>
                    <FiArrowUpRight
                      size={14}
                      className="translate-y-px transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-[var(--text)]">
                    {p.description}
                  </p>
                  <Tags items={p.technologies} />
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Certificates() {
  return (
    <section
      id="certificates"
      aria-label="Certificates"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeader id="certificates" label="Certificates" />
      <ul className="group/list">
        {certificates.map((c, i) => {
          const Wrapper = c.url ? "a" : "div";
          const wrapperProps = c.url
            ? { href: c.url, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <li key={c.name} className="mb-10">
              <Reveal delay={i * 0.05}>
                <Wrapper
                  {...(wrapperProps as Record<string, string>)}
                  className={`group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${
                    c.comingSoon ? "cursor-default" : ""
                  }`}
                >
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
                  <div className="z-10 sm:col-span-2">
                    <div className="relative overflow-hidden rounded border border-white/10">
                      <img
                        src={c.image}
                        alt={c.name}
                        loading="lazy"
                        className={`aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          c.comingSoon ? "opacity-40 grayscale" : ""
                        }`}
                      />
                      {c.comingSoon && (
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/30 bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)] backdrop-blur">
                          Soon
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="inline-flex items-baseline gap-1 font-medium text-[var(--text-bright)] leading-snug">
                      <span>{c.name}</span>
                      {!c.comingSoon && (
                        <FiArrowUpRight
                          size={14}
                          className="translate-y-px transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                        />
                      )}
                    </h3>
                    <p className="text-sm font-medium text-[var(--accent)]">
                      {c.organization}
                      {!c.comingSoon && (
                        <span className="text-[var(--text-muted)]"> · {c.year}</span>
                      )}
                    </p>
                    <p className="mt-2 text-sm leading-normal text-[var(--text)]">
                      {c.description}
                    </p>
                    {c.topics.length > 0 && <Tags items={c.topics} />}
                  </div>
                </Wrapper>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-12 pb-16 text-center text-xs text-[var(--text-muted)]">
      <p>© 2026 Nekena Andriniaina. All rights reserved.</p>
    </footer>
  );
}
