"use client"
import { Left, Right } from "@/components/Icons";
import Image from "next/image";

import { useState } from "react";

export default function PortfolioItem ({ item, scroll=true }) {
    const [currIndex, setCurrIndex] = useState(0);


    return <div className="portfolio-grid-item h-min">

        <div className="items-center flex flex-row">
            {scroll && <button className="text-zinc-50" onClick={() => {
                if (currIndex > 0) setCurrIndex(prev => prev - 1);
            }}>
                <Left dimensions="size-6" />
            </button>}

            <div className="flex flex-row items-center justify-center w-full relative rounded-sm overflow-hidden shadow-md">
                <h1 className="absolute z-30 text-zinc-50 text-left top-0 md:text-lg left-0 px-2 bg-black bg-opacity-70 w-full">{item.model}</h1>
                {Object.keys(item.images[currIndex]).map((label, i) => (
                    <div className="aspect-square w-full relative" key={i}>
                        <h1 className="absolute z-30 text-zinc-50 md:text-lg mb-1 ml-2 bottom-0 font-bold">{label.toUpperCase()}</h1>
                        <div className="absolute w-full aspect-square">
                            <Image 
                                src={item.images[currIndex][label]}
                                alt={label}
                                sizes="300px"
                                quality={100}
                                fill={true}
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {scroll && <button className="text-zinc-50" onClick={() => {
                if (currIndex < item.images.length - 1) setCurrIndex(prev => prev + 1);
            }}>
                <Right dimensions="size-6" />
            </button>}
        </div>
    </div>
}