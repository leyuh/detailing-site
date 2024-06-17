import Image from "next/image"
import Link from "next/link"

export default function Navbar () {
    return <div className="hidden md:flex flex-row justify-between pl-4 pr-8 h-16 bg-primary items-center text-zinc-50">
        <div className="items-center relative h-24 w-24">
            <Link href="/">
                <Image 
                    src="/dummyLogo.png"
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
}