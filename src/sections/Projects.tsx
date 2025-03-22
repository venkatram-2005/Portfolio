import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import AnimeVaultImage from "@/assets/images/anime_vault.png";
import ChatAppImage from "@/assets/images/chat_app.png";
import MovieStreamingApp from "@/assets/images/MovieStreaming.png";
import SushiManImage from "@/assets/images/sushi_man.png";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

import Image from "next/image";

const portfolioProjects = [
  {
    company: "Infosys SpringBoard",
    year: "2024",
    title: "My Policy Hub",
    results: [
      { title: "" },
      { title: "" },
      { title: "" },
    ],
    link: "https://sushiman-jsm.netlify.app/",
    image: SushiManImage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Job Sphere",
    results: [
      { title: "" },
      { title: "" },
      { title: "" },
    ],
    link: "https://animevault-jsm.netlify.app/",
    image: AnimeVaultImage,
  },
  {
    company: "Telegram Bot",
    year: "2024",
    title: "AI Bot For All",
    results: [
      { title: "" },
      { title: "" },
      { title: "" },
    ],
    link: "https://github.com/Emperor-Grey/Portfolio/blob/master/src/assets/video/vid.mp4/",
    image: MovieStreamingApp,
  },
  {
    company: "Personal Work",
    year: "2024",
    title: "Power BI Dashboards",
    results: [
      { title: "" },
      { title: "" },
      { title: "" },
    ],
    link: "https://backend-node-js-chat-app.vercel.app/",
    image: ChatAppImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, i) => (
            <Card
              key={project.title}
              className="sticky px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{
                top: `calc(64px + ${i * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="mt-4 border-t-2 border-white/5" />
                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((results) => (
                      <li
                        key={results.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{results.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 md:w-auto md:px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
