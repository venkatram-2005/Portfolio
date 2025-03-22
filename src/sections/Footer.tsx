import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};