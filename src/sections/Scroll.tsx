"use client";
import aicte from "@/assets/cert/aicte.png"
import aws from "@/assets/cert/aws.png"
import codegnan from "@/assets/cert/codegnan.png"
import gdg from "@/assets/cert/gdg.png"
import hackerrank from "@/assets/cert/hackerrank.png"
import infy from "@/assets/cert/infy.png"
import nptel from "@/assets/cert/nptel.png"
import linkedin from "@/assets/cert/linkedin.png"
import si from "@/assets/cert/si.png"
import spokentutorials from "@/assets/cert/spokentutorials.png"
import udemy from "@/assets/cert/udemy.png"
import Card from "@/components/Card";
import MagicButton from "@/components/MagicButton"
import SectionHeader from "@/components/SectionHeader";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import React from "react";

const certifications = [
  {
    name: "AICTE Internship Certifications",
    issuer: "AICTE",
    description: "Successfully completed an AICTE-approved internships, gaining practical experience in various fields.",
    img: aicte,
    link: "https://drive.google.com/drive/folders/1dpUA4GcVyU-cKdC5keBWRH5tR0zJkMXH?usp=sharing",
  },
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    description: "Covers fundamental cloud computing concepts, AWS services, security, pricing models and data engineering concepts.",
    img: aws,
    link: "https://drive.google.com/drive/folders/1vtbGaz0JDSMUKgdDZfX60IFt5OXJnKOI?usp=sharing",
  },
  {
    name: "Hackathon Conducted By Codegnan",
    issuer: "Codegnan",
    description: "Completed a 2-day web scraping workshop and applied the concepts in a hackathon to develop a data-driven solution.",
    img: codegnan,
    link: "https://drive.google.com/drive/folders/1q-Glh4RI3duJ1uWOQ31iRrJaMwO1GzP9?usp=sharing",
  },
  {
    name: "Google Developer Groups (GDG) Campaign",
    issuer: "Google Developer Groups",
    description: "Actively participated in GDG campaigns, enhancing technical and networking skills.",
    img: gdg,
    link: "https://drive.google.com/drive/folders/1V6o3MCviPAbn6mZ_0DuZExAUiLs-mIIS?usp=sharing",
  },
  {
    name: "Problem Solving Certification",
    issuer: "HackerRank",
    description: "Demonstrates problem-solving skills in algorithms and data structures with a HackerRank certification.",
    img: hackerrank,
    link: "https://www.hackerrank.com/profile/venkatram_2005",
  },
  {
    name: "Infosys Springboard Certification",
    issuer: "Infosys",
    description: "Completed training on industry-relevant technologies and business problem-solving approaches.",
    img: infy,
    link: "https://drive.google.com/drive/folders/1qIkRWtzts4xEifXvJ7UckK81OspttrRM?usp=sharing",
  },
  {
    name: "NPTEL Course Certification",
    issuer: "NPTEL",
    description: "Successfully completed an NPTEL-certified course covering core concepts in computer science.",
    img: nptel,
    link: "https://drive.google.com/drive/folders/1Ei3MqFPh2pzsga3Fr0FXY2lChysy713U?usp=sharing",
  },
  {
    name: "Smart Interviews DSA Certification (Diamond Rank)",
    issuer: "Smart Interviews",
    description: "Gained expertise in Data Structures and Algorithms through Smart Interviews training sessions.",
    img: si,
    link: "https://drive.google.com/drive/folders/1raH8unjWlAoTl99rNu7PoP6EJ1g0Wa9s?usp=sharing",
  },
  {
    name: "Spoken Tutorial Certification",
    issuer: "Spoken Tutorials, IIT Bombay",
    description: "Completed a Spoken Tutorial courses on technologies such as Python, Java & Linux.",
    img: spokentutorials,
    link: "https://drive.google.com/drive/folders/1h341d-D8qWQijcF5Z4I2UeNNPOzSBS4R?usp=sharing",
  },
  {
    name: "Git & GitHub",
    issuer: "Udemy",
    description: "Comprehensive training on vesrion control system.",
    img: udemy,
    link: "https://drive.google.com/drive/folders/147Vm-LsJO-GVypH7cJi9Qq56Syg6hUwZ?usp=sharing",
  },
  {
    name: "Vue.js and TypeScript",
    issuer: "Udemy",
    description: "Comprehensive training on Vue.js and TypeScript.",
    img: udemy,
    link: "https://drive.google.com/drive/folders/1P17HYBw7Er6Nfico1ysBu2eHS2IbKBF4?usp=sharing",
  },
  {
    name: "Spring Boot, Hibernate and JPA",
    issuer: "Udemy",
    description: "Comprehensive training on Spring Boot, Hibernate and JPA.",
    img: udemy,
    link: "https://drive.google.com/drive/folders/100QYLT_xrHSpCGbjm0OzLLWotytED8wA?usp=sharing",
  },
  {
    name: "Career Essentials in GitHub",
    issuer: "LinkedIn Learning",
    description: "Comprehensive training on Git, GitHub.",
    img: linkedin,
    link: "https://drive.google.com/drive/folders/12aBFGn2sotxpNqZimTJnz3DA8URqecRH?usp=drive_link",
  },
  {
    name: "Ubuntu Linux Professional by Canonical",
    issuer: "LinkedIn Learning",
    description: "Comprehensive training on Ubuntu Linux.",
    img: linkedin,
    link: "https://drive.google.com/drive/folders/1jTVKoaHqAWyuda6544a6_kTpmq40MpH8?usp=drive_link",
  },
];



export const InfiniteScroll = () => {
  return (
    <section id="certifications" className="pb-16 lg:py-24">
      <div className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Certifications"
            title="What Certifications Have I Earned ?"
            description="Don't just take my word for it. See what certifications I have done."
          />
          <div className="-my-4 mt-12 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-20">
            <div className="flex flex-none animate-move-left gap-8 pr-8 [animation-duration:40s] hover:[animation-play-state:paused]">
              {...new Array(2).fill(0).map((_, i) => (
                <React.Fragment key={i}>
                  {certifications.map((cert) => (
                    <Card
                      key={cert.name}
                      className="max-w-xs p-6 flex flex-col h-full justify-between transition duration-300 hover:-rotate-3 md:max-w-md md:p-8"
                    >
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-700">
                            <Image
                              src={cert.img}
                              alt={cert.issuer}
                              className="max-h-full rounded-full"
                            />
                          </div>
                          <div>
                            <div className="font-semibold">{cert.name}</div>
                            <div className="text-sm text-white/40">{cert.issuer}</div>
                          </div>
                        </div>
                        <p className="mt-4 text-sm md:mt-6 md:text-base">{cert.description}</p>
                      </div>

                      {/* Button section stays at the bottom */}
                      <div className="mt-6 flex items-center justify-center">
                        <MagicButton
                          title="View Credential"
                          icon={<ArrowUpRightIcon className="size-4" />}
                          position="right"
                          handleClick={() => window.open(cert.link, "_blank")}
                        />
                      </div>
                    </Card>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};