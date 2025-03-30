"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const handleClick = () => {
    window.location.href =
      "mailto:vallurivenkatram@gmail.com?subject=Contact Request";
  };

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="relative z-0 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:text-left">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src}))`,
            }}
          ></div>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
              Looking for exciting opportunities to collaborate and work on real-time solutions.
              </h2>
              <p className="mt-2 text-sm md:text-base">
               Open to roles where I can contribute, innovate, and grow—let&apos;s connect!
              </p>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="mt-8 inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};