
import { PACKAGES_DATA } from "@/pricingModule"
import { Check } from "./Icons"

export default function PackageDiv ({ name }) {
    return <div className={`${name === "CRIMSON" ? "bg-primary" : "bg-zinc-950 border-[1px]"} border-zinc-900 box-border relative transition-all package-div rounded-sm p-4 pt-8 w-full z-10 shadow-md`}>
        <h1 className="text-center text-2xl my-2 font-[300]">{name}</h1>
        <hr className="w-[90%] mx-auto" />

        <ul className="m-4 text-lg font-[300] pb-16">
            {PACKAGES_DATA[name].features.map((val, i) => (
                <li className="flex shrink-0 gap-2" key={i}>
                    <div className="mt-1"><Check dimensions="size-5" className="inline-block shrink-0" /></div>
                    <p className="inline-block">{val}</p>
                </li>
            ))}
        </ul>

        <div className="left-0 flex flex-row gap-6 mx-auto w-full justify-center font-bold absolute bottom-10">
            {Object.keys(PACKAGES_DATA[name].prices).map((type, i) => (
                <div className="flex flex-col text-center" key={i}>
                    <p>{type}</p>
                    <p>{PACKAGES_DATA[name].prices[type]}</p>
                </div>
            ))}
        </div>
    </div>
}