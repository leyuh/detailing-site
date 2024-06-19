import Link from "next/link"
export default function CallToAction ({ text, destination, classes }) {
    return <Link
        href={destination}
        className={`call-to-action-btn border-2 duration-300 w-[260px] transition-all rounded-sm text-center text-xl px-8 py-2 hoverPrimary ${classes}`}
    >
        {text}
    </Link>
}