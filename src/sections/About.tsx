"use client";

import CSSIcon from "@/assets/icons/css3.svg";
import GitIcon from "@/assets/icons/git.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import JavaIcon from "@/assets/icons/java.svg";
import NodeJsIcon from "@/assets/icons/node.svg";
import ReactIcon from "@/assets/icons/react.svg";
import SQLIcon from "@/assets/icons/sql.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import MapImage from "@/assets/images/new_map_india.png";

import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import ToolboxItems from "@/components/ToolboxItems";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import "@/app/about.css";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

import {
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiSpringboot,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiVuedotjs,
  SiNodedotjs,
  SiReact,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const profiles = [
  { name: "HackerRank", icon: <FaHackerrank className="text-green-500 text-2xl" />, link: "https://www.hackerrank.com/profile/venkatram_2005" },
  { name: "LeetCode", icon: <SiLeetcode className="text-yellow-500 text-2xl" />, link: "https://leetcode.com/u/venkatram_2005/" },
  //{ name: "CodeChef", icon: <SiCodechef className="text-gray-500 text-2xl" />, link: "https://www.codechef.com/" },
  { name: "GeeksforGeeks", icon: <SiGeeksforgeeks className="text-green-700 text-2xl" />, link: "https://www.geeksforgeeks.org/user/22501ansdn/" },
];


const toolboxItems = [
  {
    title: "Java",
    iconType: FaJava,
  },
  {
    title: "Spring Boot",
    iconType: SiSpringboot,
  },
  {
    title: "Angular",
    iconType: SiAngular,
  },
  {
    title: "TypeScript",
    iconType: SiTypescript,
  },
  {
    title: "JavaScript",
    iconType: SiJavascript,
  },
  {
    title: "React",
    iconType: SiReact,
  },
  {
    title: "Vue.js",
    iconType: SiVuedotjs,
  },
  {
    title: "Node.js",
    iconType: SiNodedotjs,
  },
  {
    title: "MySQL",
    iconType: SiMysql,
  },
  {
    title: "MongoDB",
    iconType: SiMongodb,
  },
  {
    title: "Docker",
    iconType: SiDocker,
  },
  {
    title: "Git",
    iconType: SiGit,
  },
  {
    title: "GitHub",
    iconType: SiGithub,
  },
  {
    title: "HTML5",
    iconType: SiHtml5,
  },
  {
    title: "CSS3",
    iconType: SiCss,
  },
];

const hobbies = [
  {
    title: "Watching Anime",
    emoji: "📺",
    left: "5%",
    top: "10%",
  },
  {
    title: "Phone",
    emoji: "📱",
    left: "70%",
    top: "15%",
  },
  {
    title: "Sleeping",
    emoji: "😴",
    left: "50%",
    top: "10%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "50%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "10%",
    top: "75%",
  },
  {
    title: "Reading Comics",
    emoji: "📖",
    left: "60%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about Who I am, What I do, and What inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[340px] md:col-span-2 lg:col-span-1 overflow-hidden">
                <CardHeader
                  title="Coding Profiles"
                  description="Competitive programming achievements and coding platforms."
                />

                <div className="flex h-full flex-col px-6 pb-5">
                  {/* Profile Links */}
                  <div className="flex flex-col gap-3">
                    {profiles.map((profile) => (
                      <a
                        key={profile.name}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-gradient-to-r from-emerald-300/10 to-sky-400/10 px-4 py-3 transition-all duration-300 hover:scale-[1.02] hover:border-emerald-300/40"
                      >
                        <div className="flex items-center gap-3">
                          {profile.icon}
                          <span className="font-medium text-white">
                            {profile.name}
                          </span>
                        </div>

                        <span className="text-xs text-white/40 transition-colors group-hover:text-white/70">
                          Visit →
                        </span>
                      </a>
                    ))}
                  </div>

                  <p className="mt-auto pt-4 text-center text-xs text-white/50">
                    Passionate about algorithms, problem solving, and continuous learning.
                  </p>
                </div>
             </Card>
            <Card className="h-[340px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Web Development Toolkit"
                description="Explore the technologies and tools I use to build dynamic web applications."
              />
              <ToolboxItems
                items={toolboxItems}
                className="animate-move-left [animation-duration:20s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:13s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="col-span-3 flex h-[320px] flex-col p-0 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    drag
                    dragConstraints={constrainRef}
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="relative col-span-3 h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="My Location in Map"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
                {/* Dot for animation to sit on the top */}
                <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]"></div>
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                <Image
                  src={SmileEmoji}
                  alt="My Smile Emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};