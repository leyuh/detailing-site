export default function Contact () {
    return <section>
        <div className="bg-zinc-900 w-full min-h-[100vh] md:min-h-[calc(100vh-64px)]">
            <h1 className="font-[300] text-zinc-50 text-4xl text-center z-20 items-center pt-10">CONTACT</h1>
            <div className="flex flex-col text-zinc-50 rounded-sm max-w-2xl p-4 mx-auto relative mt-2 md:mt-12"> 
                <div className="flex flex-col md:flex-row gap-4 w-full items-center">
                    <div className="m-4 text-lg text-center md:text-left">
                        <p>Claire Devlin</p>
                        <p>541-829-9512</p>
                        <p>clairesautocare@gmail.com</p>
                        <p>Brownsville, Oregon</p>
                    </div>

                    <div className="bg-primary rounded-sm p-2 mb-6 w-full relative">
                        <form>
                            <h1 className="ml-2 text-2xl my-2 mt-4">Send a message</h1>
                            <label className="ml-2">Full name</label>
                            <input
                                type="text"
                                className="mb-2 font-semibold mx-2 w-[calc(100%-16px)] text-black"
                            />
                            <label className="ml-2">Email</label>
                            <input
                                type="text"
                                className="font-semibold mb-2 mx-2 w-[calc(100%-16px)] text-black"
                            />
                            <label className="ml-2">Message</label>
                            <textarea
                                className="font-semibold mb-2 mx-2 w-[calc(100%-16px)] text-black resize-none h-32"
                            />

                            <button className="border-2 duration-300 w-[160px] transition-all rounded-sm text-center text-lg px-12 py-1 relative my-2 mx-auto block hoverPrimary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
}