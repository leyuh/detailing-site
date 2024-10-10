
import { PACKAGES_DATA } from "@/pricingModule"
import { Check } from "./Icons"
import Link from "next/link"

export default function PackageDiv ({ name }) {
    return <div className={`${name === "CRIMSON" ? "bg-primary primary-gradient border-primary" : name === "WHITE" ? "bg-zinc-50 text-zinc-600 white-gradient border-zinc-500" : "bg-zinc-950 black-gradient border-zinc-900"} border-[1px] box-border relative transition-all package-div rounded-sm p-4 pt-8 w-full z-10 shadow-md`}>
        <h1 className="text-center text-2xl my-2 font-[400]">{name}</h1>
        <hr className="w-[90%] mx-auto" />

        <ul className="m-4 text-lg font-[400] pb-28">
            {PACKAGES_DATA[name].features.map((val, i) => (
                <li className="flex shrink-0 gap-2" key={i}>
                    <div className="mt-1"><Check dimensions="size-5" className="inline-block shrink-0" /></div>
                    <p className="inline-block">{val}</p>
                </li>
            ))}
        </ul>

        <div className="left-0 mx-auto w-full absolute bottom-4">
            {(name != "CRIMSON") ? (<>
                <h3 className="w-full text-center"><i>Starting at</i></h3>
                <div className="flex flex-row gap-6 justify-center">
                    {Object.keys(PACKAGES_DATA[name].prices).map((type, i) => (
                        <div className="flex flex-col text-center" key={i}>
                            <p className="text-2xl font-bold">{PACKAGES_DATA[name].prices[type]}</p>
                            <p className="text-sm -mt-[4px]">{type}</p>
                        </div>
                    ))}
                </div>
            </>) : (
                <p className="text-2xl font-bold w-full text-center mb-12">{PACKAGES_DATA[name].price}</p>
            )}
            
            <Link href={"/contact"} className={`block text-center border-[1px] mt-4 rounded-sm w-32 ${name === "WHITE" ? "hoverSecondary border-zinc-500" : "hoverPrimary border-white"} transition-all duration-300 mx-auto`}>Inquire</Link>
        </div>
    </div>
}