
"use client";

import { useState } from "react";

const projects = [
  {
    name: "Python CI Pipeline",
    description: "Python syntax validation and automated unit tests.",
    stack: "Python · unittest · GitHub Actions",
    status: "Passing",
    icon: "🐍",
  },
  {
    name: "Next.js Portfolio",
    description: "Responsive web application with automated build checks.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    status: "In development",
    icon: "▲",
  },
];

const steps = [
  { number: "01", name: "Code", detail: "Push to GitHub", icon: "⌘" },
  { number: "02", name: "Build", detail: "GitHub Actions", icon: "⚙" },
  { number: "03", name: "Test", detail: "Validate changes", icon: "✓" },
  { number: "04", name: "Deploy", detail: "Publish with Vercel", icon: "▲" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <main className="min-h-screen bg-[#080d18] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1500px]">
        <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#0b1120] p-6 lg:block">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
              C
            </div>
            <div>
              <p className="font-bold">Pipeline Hub</p>
              <p className="text-xs text-slate-500">DevOps portfolio</p>
            </div>
          </a>

          <p className="mb-3 mt-10 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Workspace
          </p>

          <nav className="space-y-2">
            {["Overview", "Projects", "Pipeline", "About"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full rounded-lg px-4 py-3 text-left text-sm transition ${
                  activeTab === item
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item === "Overview" && "▦ "}
                {item === "Projects" && "▤ "}
                {item === "Pipeline" && "⇢ "}
                {item === "About" && "ⓘ "}
                {item}
              </button>
            ))}
          </nav>

          <div className="mt-12 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
            <p className="text-sm font-semibold">Learning by building</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Automate checks, catch errors early, and prepare reliable deployments.
            </p>
          </div>

          <a
            href="https://github.com/Sayuminahettiarachchi/ci-cd-pipelines"
            target="_blank"
            rel="noreferrer"
            className="mt-8 block text-sm text-slate-400 hover:text-white"
          >
            ↗ View GitHub repository
          </a>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-8">
            <div>
              <p className="text-xs text-slate-500">WORKSPACE / DEVOPS</p>
              <h1 className="mt-1 text-lg font-semibold">CI/CD Dashboard</h1>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Local development
            </div>
          </header>

          <div className="space-y-8 p-5 sm:p-8 lg:p-10">
            <section id="overview" className="scroll-mt-6">
              <p className="text-sm font-medium text-blue-400">
                AUTOMATION · TESTING · DEPLOYMENT
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
                Build confidently.
                <span className="block text-slate-400">
                  Deploy continuously.
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                A practical DevOps portfolio demonstrating how source code,
                automated tests, build checks, and deployment fit together.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    document
                      .getElementById("pipeline")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500"
                >
                  Explore pipeline →
                </button>
                <a
                  href="https://github.com/Sayuminahettiarachchi/ci-cd-pipelines"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/5"
                >
                  View source code ↗
                </a>
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  label: "CI workflow",
                  value: "Configured",
                  note: "Python checks",
                  color: "text-emerald-400",
                },
                {
                  label: "Unit tests",
                  value: "3",
                  note: "Current Python test cases",
                  color: "text-blue-400",
                },
                {
                  label: "Frontend",
                  value: "Next.js",
                  note: "Development server",
                  color: "text-white",
                },
                {
                  label: "Deployment",
                  value: "Pending",
                  note: "Vercel setup required",
                  color: "text-amber-400",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-[#0d1424] p-5"
                >
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className={`mt-4 text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">{stat.note}</p>
                </div>
              ))}
            </section>

            <section
              id="pipeline"
              className="scroll-mt-6 rounded-2xl border border-white/10 bg-[#0d1424] p-5 sm:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">Delivery workflow</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    The journey from a code change to a deployed application.
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  Target architecture
                </span>
              </div>

              <div className="mt-7 grid gap-3 md:grid-cols-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    <div className="h-full rounded-xl border border-white/10 bg-[#080d18] p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          STEP {step.number}
                        </span>
                        <span className="text-xl text-blue-400">
                          {step.icon}
                        </span>
                      </div>
                      <h4 className="mt-5 font-semibold">{step.name}</h4>
                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        {step.detail}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-slate-500 md:block">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                Note: this diagram shows the intended workflow. Production
                deployment has not been configured yet.
              </p>
            </section>

            <section id="projects" className="scroll-mt-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">Projects</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    A look at the current work in this repository.
                  </p>
                </div>
                <a
                  href="https://github.com/Sayuminahettiarachchi/ci-cd-pipelines"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  GitHub repository ↗
                </a>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-2">
                {projects.map((project) => (
                  <article
                    key={project.name}
                    className="rounded-xl border border-white/10 bg-[#0d1424] p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-2xl">{project.icon}</span>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {project.status}
                      </span>
                    </div>
                    <h4 className="mt-5 text-lg font-semibold">
                      {project.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>
                    <p className="mt-4 text-xs text-blue-300">{project.stack}</p>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="about"
              className="scroll-mt-6 rounded-xl border border-white/10 bg-[#0d1424] p-6"
            >
              <h3 className="text-lg font-semibold">About this project</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                This portfolio is being built to demonstrate practical
                continuous integration and continuous delivery. The aim is to
                validate changes automatically and deploy only when the
                required checks succeed.
              </p>
            </section>

            <footer className="border-t border-white/10 pt-6 text-xs text-slate-500">
              CI/CD Pipeline Hub · Built with Next.js, TypeScript, and Tailwind CSS
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
