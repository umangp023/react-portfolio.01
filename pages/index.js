import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { useState } from 'react';

const experience = [
  {
    role: 'Software Engineer – AI Platform & Automation Architecture',
    company: 'Evernorth Health Services',
    location: 'Philadelphia, PA',
    period: 'July 2025 – Present',
    bullets: [
      'Distributed backend architecture: Designed scalable backend services enabling enterprise-wide AI-driven workflows and automation pipelines, handling ingestion, orchestration, and agent execution flows across internal platforms.',
      'AI governance & safety: Defined and implemented structured AI governance rulesets enforcing deterministic behavior, validation boundaries, and production-safe execution — reducing AI-related incident risk across 5+ downstream teams.',
      'Developer tooling: Engineered standardized prompt frameworks and guardrails for GitHub Copilot, Cursor, and Amazon Q, enabling engineers to scaffold fully functional REST APIs and agent-based services from low-code intent.',
      'Production services: Developed and shipped production-grade services in Python and Go supporting API scaffolding, agent orchestration, and multi-step workflow automation.',
      'Observability & compliance: Established validation, monitoring, and review pipelines ensuring AI-generated components met enterprise security, reliability, and performance standards before production deployment.',
    ],
  },
  {
    role: 'Software Engineer – Platform Engineering',
    company: 'Evernorth Health Services',
    location: 'Philadelphia, PA',
    period: 'July 2024 – July 2025',
    bullets: [
      'Alert noise reduction: Optimized event-routing and filtering logic across distributed production systems, significantly reducing operational alert fatigue and improving on-call response times.',
      'Infrastructure automation: Automated infrastructure workflows using AWS CloudWatch and Lambda, improving system reliability and reducing mean time to resolution (MTTR).',
      'Incident response: Performed structured root-cause analysis through log inspection, metrics analysis, and system-level debugging, resolving production incidents with minimal downtime.',
    ],
  },
  {
    role: 'Software Engineer – Data & Automation',
    company: 'Evernorth Health Services',
    location: 'Philadelphia, PA',
    period: 'Feb 2023 – July 2024',
    bullets: [
      'Pipeline engineering: Built end-to-end automation pipelines in Python and SAS, reducing manual reporting effort by 27% and freeing 10+ engineering hours per week.',
      'Data integrity: Designed repeatable validation and transformation workflows to ensure production data integrity across business-critical reporting systems.',
      'Batch processing: Maintained reliable batch and event-driven processing systems supporting high-volume, time-sensitive business reporting operations.',
    ],
  },
  {
    role: 'Systems Engineering Intern',
    company: 'Raytheon Technologies',
    location: 'Dallas, TX',
    period: 'June 2022 – Aug 2022',
    bullets: [
      'Engineering dashboards: Developed internal dashboards using JIRA reporting APIs to improve engineering workflow visibility and sprint tracking.',
      'Workflow automation: Customized JIRA automation rules to enhance sprint delivery cadence and reduce manual project management overhead.',
    ],
  },
  {
    role: 'Software DevOps Summer Intern',
    company: 'NSM Insurance Group',
    location: 'Conshohocken, PA',
    period: 'June 2021 – Aug 2021',
    bullets: [
      'Web app development: Designed a multi-threaded web application in C++ using data structures and Visual Studio.',
      'File tooling: Built a file searching tool and dependency tree utility; collaborated with a teammate to extend search functionality across current and future system files.',
      'Agile participation: Contributed to weekly scrum meetings, tracking and updating task status throughout the internship.',
    ],
  },
  {
    role: 'Student IT Technician',
    company: 'La Salle University',
    location: 'Philadelphia, PA',
    period: 'Sep 2021 – May 2022',
    bullets: [
      'Ticket resolution: Managed 100+ support tickets via Team Dynamic Ticketing System with a 100% customer satisfaction rating.',
      'Technical support: Assisted customers with system crashes, network slowdowns, connectivity issues, and security breaches via phone and email.',
    ],
  },
];

const skills = [
  { category: 'Languages', items: 'Python (Expert), Go, TypeScript, Java, C++, SQL, SAS' },
  { category: 'AI & ML Tooling', items: 'LangChain, OpenAI API, Amazon Bedrock, Amazon Q, GitHub Copilot, Cursor, prompt engineering' },
  { category: 'Backend & Systems', items: 'Distributed systems, REST APIs, CI/CD pipelines, agent-based services, automation frameworks, validation logic' },
  { category: 'Cloud & Infrastructure', items: 'AWS (Lambda, CloudWatch, S3, IAM), Docker, infrastructure-as-code, monitoring & observability' },
  { category: 'Tools & Platforms', items: 'Git, JIRA, Confluence, MySQL, Wireshark, VS Code, Linux, macOS, Windows' },
];

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', year: '2023' },
  { name: 'AI Technologist', year: '2024' },
];

const projects = [
  {
    title: 'Software Engineering Capstone – Android Mobile App',
    period: 'Aug 2020 – May 2021',
    bullets: [
      'Led a 3-person team to design and develop an Android consumer application using Android Studio, Visio, and Microsoft tooling.',
      'Owned UI development, user diagrams, and software analysis — producing use case, UML, and context diagrams.',
    ],
  },
  {
    title: 'Mobile Computing – Food Ordering App',
    period: 'October 2019 – December 2020',
    bullets: [
      "Built a full-featured food ordering application with a dynamic frontend UI using Android Studio's layout editor, prepared for marketplace distribution.",
      'Designed a cross-platform mobile experience with a customer-preference-driven backend.',
    ],
  },
];

function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-teal-500 pb-2 mb-6">
      {children}
    </h2>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Umang Patel – Software Engineer</title>
        <meta name="description" content="Portfolio of Umang Patel – Automation-focused Software Engineer specializing in AI platform architecture, backend systems, and cloud-native infrastructure." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-gray-900 transition-colors duration-500">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center dark:text-white shadow-sm">
          <span className="text-lg font-semibold tracking-tight">umangp023</span>
          <ul className="flex items-center gap-4">
            <li>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode
                  ? <BsSunFill className="text-xl text-yellow-400" />
                  : <BsFillMoonStarsFill className="text-xl text-gray-600" />}
              </button>
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow hover:shadow-md transition-shadow"
                href="/resume.pdf"
                download="UmangPatel_Resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto py-12 space-y-16">

          {/* Hero */}
          <section className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Umang Patel
              </h1>
              <p className="mt-2 text-xl text-teal-600 dark:text-teal-400 font-medium">
                Software Engineer – AI Platform &amp; Automation Architecture
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <span className="flex items-center gap-1"><MdLocationOn /> Philadelphia, PA</span>
                <span className="flex items-center gap-1"><AiOutlinePhone /> 484-684-4654</span>
                <span className="flex items-center gap-1"><AiOutlineMail /> umangp2210@gmail.com</span>
              </p>
              <div className="mt-4 flex gap-4 text-3xl text-gray-600 dark:text-gray-400">
                <a href="https://www.linkedin.com/in/umangp023/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/umangp023" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </section>

          {/* Professional Summary */}
          <section>
            <SectionHeading>About Me</SectionHeading>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              Automation-focused Software Engineer with 3+ years of experience designing scalable backend systems,
              distributed automation pipelines, and AI platform architectures in production environments. Expert in
              Python and Go, with a strong background in building high-reliability services, developer tooling
              automation, and cloud-native infrastructure on AWS. Proven track record delivering AI governance
              frameworks, prompt engineering tooling, and observable, maintainable engineering solutions that bridge
              enterprise security requirements with modern AI capabilities.
            </p>
          </section>

          {/* Experience */}
          <section>
            <SectionHeading>Professional Experience</SectionHeading>
            <div className="space-y-8">
              {experience.map((job, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md dark:hover:shadow-gray-800 transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.role}</h3>
                      <p className="text-teal-600 dark:text-teal-400 font-medium">{job.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right shrink-0">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex gap-2">
                        <span className="text-teal-500 mt-1 shrink-0">&#9658;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <SectionHeading>Technical Skills</SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wide mb-1">
                    {s.category}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{s.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <SectionHeading>Certifications</SectionHeading>
            <ul className="space-y-2">
              {certifications.map((c, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                  <span className="font-medium">{c.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">({c.year})</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <SectionHeading>Education</SectionHeading>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium">La Salle University</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right">
                  <p>December 2022</p>
                  <p>Philadelphia, PA</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <SectionHeading>Projects</SectionHeading>
            <div className="space-y-6">
              {projects.map((p, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md dark:hover:shadow-gray-800 transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0">{p.period}</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex gap-2">
                        <span className="text-teal-500 mt-1 shrink-0">&#9658;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&#169; {new Date().getFullYear()} Umang Patel &middot; Philadelphia, PA</p>
          <div className="flex justify-center gap-4 mt-3 text-2xl">
            <a href="https://www.linkedin.com/in/umangp023/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal-500 transition-colors"><AiFillLinkedin /></a>
            <a href="https://github.com/umangp023" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-teal-500 transition-colors"><AiFillGithub /></a>
          </div>
        </footer>
      </main>
    </div>
  );
}
