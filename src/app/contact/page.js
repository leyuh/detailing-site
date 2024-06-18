import MessageForm from "@/components/MessageForm";

export default function Contact () {
    return <section>
        <div className="bg-zinc-900 w-full min-h-[100vh] md:min-h-[calc(100vh-64px)]">
            <h1 className="font-[300] text-zinc-50 text-4xl text-center z-20 items-center pt-10">CONTACT</h1>
            <div className="flex flex-col text-zinc-50 rounded-sm max-w-2xl p-4 mx-auto relative mt-2 md:mt-12"> 
                <div className="flex flex-col md:flex-row gap-4 w-full items-center">
                    <div className="hidden md:block m-4 text-lg text-center md:text-left">
                        <p>Claire Devlin</p>
                        <p>541-829-9512</p>
                        <p>devlinautodetail@gmail.com</p>
                        <p>Brownsville, Oregon</p>
                    </div>

                    <MessageForm />
                </div>
            </div>
        </div>
    </section>
}