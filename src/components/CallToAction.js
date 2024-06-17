import Link from "next/link"
export default function CallToAction ({ text, destination, classes }) {
    return <Link
        href={destination}
        className={`call-to-action-btn border-2 duration-300 w-[240px] transition-all rounded-sm text-center text-lg px-12 py-1 hoverPrimary ${classes}`}
    >
        {text}
    </Link>
}