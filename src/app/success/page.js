import MessageForm from "@/components/MessageForm";
import Image from "next/image";
import { Mail, Phone, Pin } from "@/components/Icons";

export default function Success () {
    return <section>
        <div className="bg-zinc-900 w-full min-h-[100vh] md:min-h-[calc(100vh-64px)]">
            <div className="w-full h-[300px] relative">
                <div className="flex w-full h-full items-center justify-center">
                    <h1 className="text-zinc-50 font-[300] text-4xl text-center z-20 items-center">CONTACT</h1>
                </div>
                <div className="w-full h-[300px] absolute top-0">
                    <Image 
                        src="/cleaning/wheel-1.jpeg"
                        alt="interior"
                        fill={true}
                        quality="100"
                        className="brightness-[35%] contrast-[125%] saturate-[0%] object-cover object-center"
                    />
                </div>
            </div>
            <div className="text-center flex items-center text-zinc-50 rounded-sm max-w-5xl p-4 mx-auto relative mt-2 md:mt-12"> 
                <div className="flex  md:flex-row gap-x-8 gap-y-4 items-center w-full items-center">
                    <div className="flex flex-col mx-auto">
                        <div className="m-4 text-lg text-center">
                            <p className="text-3xl leading-tight mb-2"><i>Thank you!</i></p>
                            <p className="leading-tight mt-4">We should get back to you within 24 hours.</p>
                        </div>
                        <div className="m-4 text-lg text-center font-semibold">
                            <p>Claire Devlin</p>
                            <span className="flex gap-1 items-center justify-center">
                                <Phone dimensions={"size-4"} />
                                <p>541-829-9512</p>
                            </span>
                            <span className="flex gap-1 items-center justify-center">
                                <Mail dimensions={"size-4"} />
                                <p>devlinautodetail@gmail.com</p>
                            </span>
                            <span className="flex gap-1 items-center justify-center">
                                <Pin dimensions={"size-4"} />
                                <p>Brownsville, OR 97327</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}