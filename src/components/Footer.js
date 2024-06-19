import { Mail, Phone, Pin } from "./Icons";

export default function Footer () {
    return <>
        <hr />
        <div className="w-full text-zinc-50 bg-primary font-[400] bottom-[-2px] justify-center flex flex-col text-center z-50 pb-1 px-4 pt-8">
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
            <p className="mt-8 text-black text-sm">&copy; 2024 Devlin Auto Detail. All Rights Reserved.</p>
        </div>
    </>
}