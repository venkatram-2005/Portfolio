"use client";

import Image from "next/image";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import StarIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";
import HeroOrbit from "@/components/HeroOrbit";
import MagicButton from "@/components/MagicButton";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {

  const handleConnect = () => {
    window.open("https://www.linkedin.com/in/valluri-venkatram")
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "./pdf/Valluri_Venkatram.pdf";
    link.download = "";
    link.click();
  };

  return (
    <section id="home" className="relative z-0 py-32 md:py-48 lg:py-60">
      <div className="absolute inset-0 -z-30 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[830px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>

        {/* Sparkle */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        {/* Sparkle */}
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        {/* Circle */}
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        {/* Sparkle */}
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        {/* Stars orbiting the hero section */}
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        {/* Stars orbiting the hero section */}
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        {/* Circle */}
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        {/* Sparkle */}
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        {/* Circle */}
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>

        {/* Stars orbiting the hero section */}
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-48 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        {/* Container for the Image */}
        <div className="group relative mx-auto flex w-fit flex-col items-center justify-center">
          {/* Image with hover behavior */}
          <Image
            onClick={handleResumeDownload}
            className="group size-24 hover:cursor-pointer"
            src="/exp2.svg"  // Changed from memojiImage to SVG path
            alt="Experience illustration"
            width={96}      // Added width (required for Next.js Image)
            height={96}     // Added height (required for Next.js Image)
          />
          {/* <Image
                onClick={handleResumeDownload}
                className="group size-24 hover:cursor-pointer"
                src={memojiImage}
                alt="Person Looking at the laptop"
              />*/}

          {/* Tooltip */}
          <span className="absolute top-2 ml-12 hidden translate-x-1/2 transform rounded-3xl rounded-bl-none bg-black px-2 py-1 text-xs font-medium text-white group-hover:block">
            Download Resume
          </span>

          {/* Availability Section */}
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            {/* FOR DOT, AVAILABILITY DOT */}
            <div className="relative size-2.5 rounded-full bg-green-500">
              {/* Animation Ping Thingy Needed */}
              <div className="absolute inset-0 animate-ping-large rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm font-medium">Actively Looking for Opportunities</div>
          </div>
        </div>

        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 gap-4 text-center text-3xl md:text-5xl font-serif">
            <span className="font-serif text-white">Hi! I am Venkatram, </span>
            <span className="font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              <Typewriter
                words={[
                  //"Venkatram",
                  "a Full-Stack Web Developer",
                  "a Machine Learning Enthusiast",
                  "a Data Analyst",
                  "a Data Science Practitioner",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                cursorColor="#ffffff"  // Explicitly set cursor color
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Pre-final year Software Developer with experience in Full-stack development, Machine Learning and Data Science. Open to new opportunities and collaborations.
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <MagicButton
            title="Download Resume"
            icon={<ArrowDown className="size-4" />}
            position="right"
            handleClick={handleResumeDownload}
          />

          <MagicButton
            title="Let's Connect 👋"
            icon={null}
            position="right"
            handleClick={handleConnect}
          />

        </div>
      </div>
    </section>
  );
};
