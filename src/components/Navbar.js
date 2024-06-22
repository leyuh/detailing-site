"use client"
import Image from "next/image"
import Link from "next/link"
import { Menu, Close } from "./Icons"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar () {

    const [showMobileNav, setShowMobileNav] = useState(true);
    const router = useRouter();

    const NavBtn = ({ destination, text }) => {
        return <button
            className="text-left"
            onClick={() => {
                setShowMobileNav(true);
                router.push(destination);
            }}
        >
            {text}
        </button>
    }

    useEffect(() => {
        console.log(showMobileNav);
    }, [showMobileNav])

    return <>
        <button
            className="fixed md:hidden w-14 h-14 flex justify-center items-center text-zinc-50 z-50 m-2 right-0"
            onClick={() => setShowMobileNav(prev => !prev)}
        >
            {!showMobileNav ? (
                <Close 
                    dimensions="size-12"
                />
            ) : (
                <Menu 
                    dimensions="size-12"
                />
            )}
        </button>

        <div className={`w-[80vw] transition-all h-full z-40 text-zinc-50 shadow-xl p-6 text-xl font-white fixed ${showMobileNav ? "right-[-80vw]" : "right-0"} md:hidden bg-primary rounded-l-sm`}>
            <nav className="flex flex-col gap-8 font-[400] mt-[80%]">
                <NavBtn 
                    destination="/"
                    text="HOME"
                />
                <NavBtn 
                    destination="/portfolio"
                    text="PORTFOLIO"
                />
                <NavBtn 
                    destination="/contact"
                    text="CONTACT"
                />
            </nav>
        </div>

        <div className="hidden md:flex flex-row justify-between pl-4 pr-8 h-20 z-50 bg-primary items-center text-zinc-50">
            <div className="items-center relative h-28 w-28">
                <Link href="/">
                    <Image 
                        src="/logo-1.png"
                        alt="logo"
                        fill={true}
                        className="object-contain nav-logo"
                    />
                </Link>
            </div>

            <nav className="flex flex-row gap-6 items-center nav-div font-[300]">
                <Link
                    href="/"
                >
                    HOME
                </Link>
                <Link
                    href="/portfolio"
                >
                    PORTFOLIO
                </Link>
                <Link
                    href="/contact"
                >
                    CONTACT
                </Link>
            </nav>
        </div>
    </>
}