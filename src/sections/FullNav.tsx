"use client";
import React, { useEffect, useState } from "react";
import { styles } from "@/lib/styles";
import logo from "@/assets/logo-rb.png";
import Menu from "@/assets/menu.svg";
import Close from "@/assets/close.svg";
import Image from "next/image";

interface NavLink {
    id: string;
    title: string;
}
const navLinks: NavLink[] = [
    {
        id: "overview",
        title: "Overview",
    },
    {
        id: "internships",
        title: "Work",
    },
    {
        id: "project",
        title: "Projects",
    },
    {
        id: "certifications",
        title: "Certifications",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const Navbar: React.FC = () => {
    const [active, setActive] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const Icon = toggle ? Close : Menu;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-custom-dark" : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <a
                    href='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <Image src={logo} alt="logo" width={36} height={36} className="object-contain" />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        Venkatram &nbsp;
                        <span className='sm:block hidden'> | Portfolio</span>
                    </p>
                </a>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <Icon
                        className="w-7 h-7 cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-gradient-to-r from-[#1a1a2e] to-[#16213e]
 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
