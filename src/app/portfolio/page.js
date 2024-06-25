import Image from "next/image"
import PORTFOLIO_ITEMS from "@/portfolioModule"
import { Left, Right } from "@/components/Icons";
import PortfolioItem from "@/components/PortfolioItem";

export default function Portfolio () {
    return <section>
        <div className="w-full h-32 relative">
            <div className="flex w-full h-full items-center justify-center">
                <h1 className="text-zinc-50 font-[300] text-4xl text-center z-20 items-center">PORTFOLIO</h1>
            </div>
            <div className="w-full h-32 absolute top-0">
                <Image 
                    src="/dummyHeroImage.jpeg"
                    alt="interior"
                    fill={true}
                    quality="100"
                    className="brightness-50 contrast-125 object-cover object-center"
                />
            </div>
        </div>
        <div className="w-full min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-190px)] bg-zinc-900">
        
            <div className="grid gap-4 w-full h-full px-2 py-6 grid-cols-1 content-start xl:grid-cols-2">
                {PORTFOLIO_ITEMS.map((item, i) => (
                    <PortfolioItem 
                        item={item}
                        key={i}
                    />
                ))}
            </div>

        </div>
    </section>
}