import { useEffect, useRef, useState } from "react"
import findYourZodiacImage from "./assets/findyourzodiac1.png"
import homeImage from "./assets/home image.png"
import mccartanBrosImage from "./assets/mc cartan.png"
import monogram from "./assets/monogram.png"
import oatloopPage1 from "./assets/oatloop-page-1.png"
import oatloopPage2 from "./assets/oatloop-page-2.png"
import sevaqueue1 from "./assets/sevaqueue1.png"
import sevaqueue2 from "./assets/sevaqueue2.png"
import totalAssurancePage1 from "./assets/ta1.png"
import totalAssurancePage2 from "./assets/ta2.png"
import resume from "./Niveditha_B.pdf"
import IntroLoader from "./IntroLoader"

const portrait = homeImage

const navItems = [
  ["About", "about"],
  ["Work", "work"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Contact", "contact"],
]

const projects = [
  {
    no: "01",
    type: "CASE STUDY",
    name: "Seva Queue",
    desc: "A mobile token booking app designed to simplify visits to Akshaya Centres by helping users book queue tokens in advance and reduce unnecessary waiting time.",
    tags: ["Mobile App", "UX Research", "Prototype"],
    tone: "lavender",
    layout: "wide",
  },
  {
    no: "02",
    type: "CASE STUDY",
    name: "Find Your Zodiac",
    desc: "An interactive astrology experience designed to help users discover their zodiac sign, explore personality traits, and learn more about themselves through a simple and engaging interface.",
    tags: ["Web Experience", "UI Design", "Interaction Design"],
    tone: "blush",
    layout: "split",
  },
  {
    no: "03",
    type: "WEBSITE DESIGN",
    name: "OatLoop",
    desc: "OatLoop is a sustainable milk delivery concept focused on reusable packaging and eco-friendly living.",
    tags: ["Web Design", "Product Design", "Design System"],
    tone: "blue",
    layout: "full",
  },
  {
    no: "04",
    type: "WEBSITE DESIGN",
    name: "McCartan Bros",
    desc: "A modern e-commerce website designed to showcase men’s fashion and simplify online shopping.",
    tags: ["Branding", "Web Design", "Typography"],
    tone: "silver",
    layout: "split reverse",
  },
  {
    no: "05",
    type: "UI/UX DESIGN",
    name: "Total Assurance",
    desc: "A professional insurance website designed to communicate financial services clearly while building trust and credibility.",
    tags: ["UI/UX Design", "Mobile UI", "Prototype"],
    tone: "butter",
    layout: "wide",
  },
]

const experiences = [
  [
    "UI/UX Designer",
    "Waiktech Limited",
    "Feb 2026 — May 2026",
    "Designed user-focused web and mobile experiences, creating UI layouts, prototypes, design systems, and branded visuals.",
  ],
  [
    "Creative Design Assistant",
    "Akshaya Centre",
    "Jan 2024 — Dec 2024",
    "Designed digital and print creatives, UI/UX layouts, and promotional assets with a focus on clarity and visual consistency.",
  ],
  [
    "Data Science Intern",
    "iDatalytics Pvt Ltd",
    "May 2024 — Aug 2024",
    "Worked with datasets to clean, analyze, visualize, and identify meaningful insights using basic machine learning techniques.",
  ],
]

const skills = [
  "UI/UX Design",
  "Graphic Design",
  "Figma",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Visual Design",
  "Photoshop",
  "Video Editing",
  "Responsive Design",
  "Branding",
]

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <span className={`sparkle ${className}`} aria-hidden="true">
      ✦
    </span>
  )
}

function Mockup({
  kind = "phone",
  screens,
  pageSet,
  screenAlts,
  image,
  imageAlt,
  imageClassName,
}: {
  kind?: "phone" | "desktop" | "duo"
  screens?: [string, string]
  pageSet?: "sevaqueue" | "oatloop"
  screenAlts?: [string, string]
  image?: string
  imageAlt?: string
  imageClassName?: string
}) {
  if (kind === "desktop") {
    return (
      <div className={`desktop-mockup ${imageClassName ?? ""}`} aria-hidden={image ? undefined : true}>
        <div className="browser-bar">
          <i />
          <i />
          <i />
        </div>
        {image ? (
          <img
            className="desktop-mockup-image"
            src={image}
            alt={imageAlt ?? "Project website preview"}
          />
        ) : (
          <div className="desktop-ui">
            <div className="ui-nav">
              <b>muse.</b>
              <span>collections &nbsp; stories &nbsp; journal</span>
            </div>
            <div className="ui-editorial">
              <div>
                <small>NEW OBJECTS / 025</small>
                <strong>
                  Objects for
                  <br />
                  <em>slow living.</em>
                </strong>
                <span>Explore the edit →</span>
              </div>
              <div className="product-shape">
                <i />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
  return (
    <div className={`phone-group ${kind} ${pageSet ? `${pageSet}-pages` : ""}`} aria-hidden={screens ? undefined : true}>
      <div className="phone secondary">
        <div className="phone-screen">
          {screens ? (
            <img className="phone-screen-image" src={screens[0]} alt={screenAlts?.[0] ?? "First mobile app screen"} />
          ) : (
            <>
              <small>Good morning,</small>
              <strong>
                Your day,
                <br />
                gently planned.
              </strong>
              <div className="mini-orb" />
              <div className="stat-row">
                <i />
                <i />
                <i />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="phone primary">
        {pageSet !== "oatloop" && <div className="speaker" />}
        <div className="phone-screen">
          {screens ? (
            <img className="phone-screen-image" src={screens[1]} alt={screenAlts?.[1] ?? "Second mobile app screen"} />
          ) : (
            <>
              <small>TODAY'S FOCUS</small>
              <strong>
                Find your
                <br />
                <em>little rhythm.</em>
              </strong>
              <div className="app-card">
                <span>Mindful minutes</span>
                <b>12</b>
              </div>
              <div className="app-list">
                <i />
                <span />
                <span />
                <span />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: typeof projects[number]
  index: number
}) {
  const isDesktop = index === 1 || index === 3
  return (
    <article
      className={`project-card ${project.tone} ${project.layout} reveal`}
    >
      <div className="project-copy">
        <div>
          <p className="project-count">{project.no} / 05</p>
          <p className="project-type">{project.type}</p>
        </div>
        <div>
          <h3>{project.name}</h3>
          <p className="project-desc">{project.desc}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            className="case-link"
            href={
              project.name === "Seva Queue"
                ? "https://www.behance.net/gallery/241381547/Seva-Queue-Elder-Friendly-Smart-Queue-Management-App"
                : project.name === "Find Your Zodiac"
                  ? "https://www.behance.net/gallery/240031463/Find-Your-Zodiac-Mobile-App-UIUX-Case-Study"
                  : project.name === "Total Assurance"
                    ? "https://www.behance.net/gallery/249085659/Total-Assurance-Website-Design"
                    : project.name === "McCartan Bros"
                      ? "https://www.behance.net/gallery/251047947/McCartan-Bros-Luxury-Menswear-E-Commerce-Design"
                      : project.name === "OatLoop"
                        ? "https://www.behance.net/gallery/255535255/OatLoop-Sustainable-Milk-Delivery-Landing-Page"
                  : "#contact"
            }
          >
            {["McCartan Bros", "OatLoop", "Total Assurance"].includes(project.name)
              ? "View Website Design"
              : "View Case Study"}{" "}
            <Arrow />
          </a>
        </div>
      </div>
      <div className="project-visual">
        <Mockup
          kind={isDesktop ? "desktop" : index === 2 ? "duo" : "phone"}
          screens={index === 0 ? [sevaqueue1, sevaqueue2] : index === 2 ? [oatloopPage1, oatloopPage2] : index === 4 ? [totalAssurancePage1, totalAssurancePage2] : undefined}
          pageSet={index === 0 ? "sevaqueue" : index === 2 ? "oatloop" : undefined}
          screenAlts={index === 2 ? ["OatLoop product and sustainability page", "OatLoop homepage and product catalog"] : index === 4 ? ["Total Assurance website first mobile page", "Total Assurance website second mobile page"] : undefined}
          image={index === 1 ? findYourZodiacImage : index === 3 ? mccartanBrosImage : undefined}
          imageAlt={index === 1 ? "Find Your Zodiac case study on a phone" : index === 3 ? "McCartan Bros menswear website on a phone" : undefined}
          imageClassName={index === 3 ? "mccartan-preview" : undefined}
        />
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("about")
  const [introVisible, setIntroVisible] = useState(true)
  const [introExiting, setIntroExiting] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setIntroExiting(true), 2400)
    const removeTimer = window.setTimeout(() => setIntroVisible(false), 3100)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el))

    const sections = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        }),
      { rootMargin: "-40% 0px -52%" },
    )
    navItems.forEach(([, id]) => {
      const el = document.getElementById(id)
      if (el) sections.observe(el)
    })
    return () => {
      reveal.disconnect()
      sections.disconnect()
    }
  }, [])

  useEffect(() => {
    const move = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`
        cursorRef.current.style.top = `${event.clientY}px`
      }
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div className="site-shell" inert={introVisible}>
      {introVisible && <IntroLoader isExiting={introExiting} />}
      <div className="grain" aria-hidden="true" />
      <div className="cursor" ref={cursorRef}>
        <span>VIEW</span>
      </div>

      <header className="nav-wrap">
        <nav className="nav-pill" aria-label="Main navigation">
          <a className="logo-link" href="#top" aria-label="Back to top">
            <img src={monogram} alt="Personal monogram" />
          </a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(([label, id]) => (
              <a
                key={id}
                className={active === id ? "active" : ""}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
          <a className="nav-cta" href={resume} download="Niveditha_B.pdf">
            Download My Resume <span>↗</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-blur blur-one" />
          <div className="hero-copy">
            <p className="eyebrow hero-in delay-1">
              HELLO, I'M NIVEDITHA B <span>✦</span>
            </p>
            <h1 className="hero-in delay-2">
              I create digital
              <br />
              experiences that feel
              <br />
              <em>beautiful &amp; human.</em>
            </h1>
            <p className="hero-intro hero-in delay-3">
              UI/UX &amp; Graphic Designer creating thoughtful digital
              experiences with a balance of function, personality and visual
              storytelling.
            </p>
            <div className="hero-actions hero-in delay-4">
              <a className="button primary" href="#work">
                View My Work <Arrow />
              </a>
              <a className="button secondary" href="#contact">
                Let's Talk
              </a>
            </div>
          </div>
          <div className="hero-art hero-in delay-5">
            <div className="blob lavender" />
            <div className="blob blush" />
            <div className="blob blue" />
            <div className="portrait-wrap">
              <img
                src={portrait}
                alt="Niveditha portrait"
                className="hero-portrait-image"
              />
            </div>
            <div className="float-label label-one">
              Currently creating <span>✦</span>
            </div>
            <div className="float-label label-two">UI/UX • GRAPHIC DESIGN</div>
            <Sparkle className="s1" />
            <Sparkle className="s2" />
            <Sparkle className="s3" />
            <Sparkle className="s4" />
          </div>
          <a className="scroll-cue" href="#about">
            <span>Scroll to explore</span>
            <b>↓</b>
          </a>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            UI/UX DESIGN ✦ GRAPHIC DESIGN ✦ BRANDING ✦ VISUAL DESIGN ✦
            PROTOTYPING ✦ UI/UX DESIGN ✦ GRAPHIC DESIGN ✦ BRANDING ✦ VISUAL
            DESIGN ✦ PROTOTYPING ✦
          </div>
        </div>

        <section className="section about" id="about">
          <div className="giant-star" aria-hidden="true">
            ✦
          </div>
          <SectionLabel>01 / ABOUT</SectionLabel>
          <div className="about-grid reveal">
            <h2>
              Designing with
              <br />
              <em>curiosity</em> &amp; intention.
            </h2>
            <div className="about-copy">
              <p className="lead">
                I believe the best design feels clear, considered, and a little
                bit magical.
              </p>
              <p>
                I'm a multidisciplinary designer who enjoys turning complex
                ideas into warm, intuitive experiences. My work lives at the
                intersection of thoughtful strategy and expressive visual
                storytelling.
              </p>
              <a className="text-link" href="#experience">
                More about my journey <Arrow />
              </a>
            </div>
          </div>
          <div className="value-grid stagger">
            {[
              [
                "◎",
                "User first",
                "Empathy leads every decision, from the first sketch to the final detail.",
              ],
              [
                "◇",
                "Thoughtful visuals",
                "Beauty with a purpose—each element helps tell a clearer story.",
              ],
              [
                "✦",
                "Meaningful details",
                "Small moments of delight make experiences feel truly memorable.",
              ],
            ].map(([icon, title, copy]) => (
              <article className="value-card reveal" key={title}>
                <span className="value-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-head reveal">
            <div>
              <SectionLabel>02 / SELECTED WORK</SectionLabel>
              <h2>
                Things I've <em>loved</em>
                <br />
                creating.
              </h2>
            </div>
            <p>
              A selection of digital experiences and identities shaped with
              care, curiosity, and a close eye for the little things.
            </p>
          </div>
          <div className="projects">
            {projects.map((project, i) => (
              <ProjectCard key={project.no} project={project} index={i} />
            ))}
          </div>
        </section>

        <section className="case-study">
          <div className="case-intro reveal">
            <SectionLabel>FEATURED PROCESS</SectionLabel>
            <h2>
              Behind the <em>pixels.</em>
            </h2>
            <p>
              A closer look at the thoughtful, slightly messy, always curious
              process behind a polished experience.
            </p>
            <a className="button secondary" href="#contact">
              Explore the full story <Arrow />
            </a>
          </div>
          <div className="process-board reveal">
            <svg
              className="process-line"
              viewBox="0 0 850 240"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M34 155C145 31 252 221 373 107C496 -8 595 212 816 68"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 9"
              />
            </svg>
            {["01 Discover", "02 Define", "03 Design", "04 Test"].map(
              (step, i) => (
                <div className={`process-step step-${i + 1}`} key={step}>
                  <span>{step.slice(0, 2)}</span>
                  <b>{step.slice(3)}</b>
                </div>
              ),
            )}
            <div className="sticky note-a">
              How might we
              <br />
              make it feel calm?
            </div>
            <div className="wireframe">
              <i />
              <i />
              <i />
            </div>
            <div className="mini-screen">
              <div />
              <b>Good morning</b>
              <span />
              <span />
              <span />
            </div>
            <div className="final-phone">
              <small>9:41</small>
              <b>
                Your gentle
                <br />
                daily rhythm.
              </b>
              <i />
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <SectionLabel>03 / SKILLS</SectionLabel>
          <div className="skills-layout reveal">
            <div>
              <h2>
                A little bit of
                <br />
                <em>what I do.</em>
              </h2>
              <p>
                A blend of strategy, empathy, and visual craft—brought together
                to make ideas feel real.
              </p>
            </div>
            <div className="skill-cloud">
              {skills.map((skill, i) => (
                <span className={`skill-pill pill-${i % 4}`} key={skill}>
                  {i % 5 === 0 && <b>✦</b>}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="experience-head reveal">
            <SectionLabel>04 / EXPERIENCE</SectionLabel>
            <h2>
              Where I've been
              <br />
              <em>creating.</em>
            </h2>
          </div>
          <div className="timeline">
            {experiences.map(([role, company, date, desc], i) => (
              <article className="timeline-item reveal" key={role}>
                <div className={`timeline-node node-${i}`} />
                <p className="date">{date}</p>
                <div>
                  <p className="company">{company}</p>
                  <h3>{role}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education">
          <SectionLabel>05 / EDUCATION</SectionLabel>
          <div className="education-heading reveal">
            <h2>
              Learning &amp; <em>growing.</em>
            </h2>
            <span className="book-icon">
              ✦<i>⌁</i>
            </span>
          </div>
          <article className="education-card reveal">
            <div>
              <p>DEGREE</p>
              <h3>BSc Computer Science</h3>
            </div>
            <div>
              <p>University</p>
              <h3>University Of Kerala Yeroor</h3>
            </div>
            <div>
              <p>YEAR</p>
              <h3>2021 - 2024</h3>
            </div>
            <span className="education-arrow">↗</span>
          </article>
        </section>

        <section className="section off-duty">
          <div className="off-duty-head reveal">
            <Sparkle />
            <h2>When I'm not designing...</h2>
            <p>You'll probably find me doing one of these.</p>
          </div>
          <div className="hobby-grid">
            <article className="hobby-card reveal">
              <span>🎧</span>
              <div>
                <h3>Music</h3>
                <p>always on repeat</p>
              </div>
            </article>
            <article className="hobby-card reveal">
              <span>🎬</span>
              <div>
                <h3>Films &amp; Series</h3>
                <p>one more episode</p>
              </div>
            </article>
            <article className="hobby-card reveal">
              <span>✨</span>
              <div>
                <h3>Creating random edits</h3>
                <p>I love editing</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-card reveal">
            <Sparkle className="contact-spark one" />
            <Sparkle className="contact-spark two" />
            <span className="contact-circle" />
            <p className="contact-label">LET'S CREATE SOMETHING</p>
            <h2>
              Have an idea?
              <br />
              Let's make it <em>lovely.</em>
            </h2>
            <p>
              I'm always open to interesting projects, collaborations and
              opportunities.
            </p>
            <a className="contact-button" href="mailto:nivedithaasaju@gmail.com">
              Say Hello <Arrow />
            </a>
            <div className="socials">
              <a href="mailto:nivedithaasaju@gmail.com">Email ↗</a>
              <a href="https://www.linkedin.com/in/nivedithaasaju/">LinkedIn ↗</a>
              <a href="https://www.behance.net/nivedithaasaju">Behance ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img src={monogram} alt="" />
          <span>Niveditha B ✦ Designer</span>
        </div>
        <p>Made with curiosity &amp; caffeine.</p>
        <div>
          <span>© 2026</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
