"use client"
import { useRef } from "react"
import emailjs from "@emailjs/browser";

export default function MessageForm () {
    const form = useRef();

    const nameField = useRef();
    const emailField = useRef();
    const msgField = useRef();
    const sendBtn = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
            publicKey: process.env.PUBLIC_KEY
        })
            .then(() => {
                console.log("Message sent");

                sendBtn.current.value = "Sent!";
                nameField.current.value = "";
                emailField.current.value = "";
                msgField.current.value = "";
                return false;
            }, (error) => {
                console.log(error);
                return false;
            })

        return false;
    }


    return <div className="bg-primary rounded-sm p-2 mb-6 w-full relative">
        <form ref={form} onSubmit={sendEmail}>
            <h1 className="ml-2 text-2xl my-2 mt-4">Send a message</h1>
            <label className="ml-2">Full name</label>
            <input
                ref={nameField}
                type="text"
                name="user_name"
                className="mb-2 font-semibold mx-2 w-[calc(100%-16px)] text-black"
            />
            <label className="ml-2">Email</label>
            <input
                ref={emailField}
                type="text"
                name="user_email"
                className="font-semibold mb-2 mx-2 w-[calc(100%-16px)] text-black"
            />
            <label className="ml-2">Message</label>
            <textarea
                ref={msgField}
                name="message"
                className="font-semibold mb-2 mx-2 w-[calc(100%-16px)] text-black resize-none h-32"
            />

            <input
                ref={sendBtn}
                type="submit"
                value="Send"
                className="hover border-2 duration-300 w-[160px] transition-all rounded-sm text-center text-lg px-12 py-1 relative my-2 mx-auto block hoverPrimary"
            />
        </form>
    </div>
}