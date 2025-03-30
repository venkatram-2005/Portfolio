import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import jobsphere from "@/assets/images/jobsphere.png"
import powerbi from "@/assets/images/powerbi.png"
import telegram from "@/assets/images/telegram.png"
import insurance from "@/assets/images/insurance.png"
import houseprice from "@/assets/images/houseprice.png"

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

import Image from "next/image";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "Job Sphere",
    results: [
      { title: "MERN Stack application with deployment" },
      { title: "Optimized for all devices" },
      { title: "Clerk authentication for users, JWT auth for recruiters" },
      { title: "Cloudinary for storage of images, resumes" },
    ],
    link: "https://job-sphere-dun.vercel.app",
    image: jobsphere,
  },
  {
    company: "Infosys SpringBoard",
    year: "2024",
    title: "My Policy Hub",
    results: [
      { title: "Java Full Stack Application" },
      { title: "Front End: JSP, CSS, JS" },
      { title: "Backend: JDBC, Servlets" },
      { title: "Database: MySQL" },
    ],
    link: "https://github.com/venkatram-2005/My-Policy-Hub---An-Online-Insurance-Management-System",
    image:insurance ,
  },
  {
    company: "Data Analytics",
    year: "2024",
    title: "Power BI Dashboards",
    results: [
      { title: "Comprehensive Data Visualization" },
      { title: "Customizable & User-Friendly" },
      { title: "Historical Data Insights" },
      { title: "Actionable Insights & Decision-Making" },
    ],
    link: "https://github.com/venkatram-2005/PowerBI-DashBoards",
    image: powerbi,
  },
  {
    company: "Web Scraping to Model Development",
    year: "2024",
    title: "House Price Prediction",
    results: [
      { title: "Web Scraping with BeautifulSoup" },
      { title: "Data Processing & Feature Engineering " },
      { title: "Model Development & Training" },
      { title: "Deployment for Real-World Use " },
    ],
    link: "https://house-price-prediction-web-scraping-to.onrender.com",
    image: houseprice,
  },
  {
    company: "Telegram Bot",
    year: "2024",
    title: "AI Bot For All",
    results: [
      { title: "AI-Powered Conversations" },
      { title: "Multi-Functionality" },
      { title: "Scalable & Customizable" },
      { title: "Power BI Integration" },
    ],
    link: "https://github.com/venkatram-2005/Gemini-Telegram-Bot",
    image: telegram,
  },

];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container mt-10">
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
                      <span>Visit Live Site / Repository</span>
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
