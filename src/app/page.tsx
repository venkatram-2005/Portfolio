import { AboutSection } from "@/sections/About";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { FloatingNav } from "@/components/NavBar";
import { Footer } from "@/sections/Footer";
import Roles from "@/sections/Roles";
import Internships from "@/sections/Internships";
import { ContactSection } from "@/sections/Contact"
import { TapeSection } from "@/sections/Tape";
import { InfiniteImageScroll } from "@/sections/Scroll";
import Navbar from "@/sections/FullNav";

const navItems = [
  { name: "Overview", link: "#overview" },
  { name: "Internships", link: "#internships" },
  { name: "Projects", link: "#project" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

export default function Home() {
  return (
    <div>
      {/*<FloatingNav navItems={navItems} />*/}
      <Navbar />
      <HeroSection />
      <div className='relative z-0 flex flex-col items-center justify-center mx-auto '>
        <Roles idName="roles" />
        <Internships idName="work"/>
      </div>
      <ProjectsSection />
      {/* Grid Bento */}
      <TapeSection/>
      <AboutSection />
      {/*<InfiniteImageScroll/>*/}
      <ContactSection />
      <Footer />
    </div>
  );
}
