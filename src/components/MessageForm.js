"use client"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser";
import useStickyState from "@/useStickyState";

export default function MessageForm () {
    const form = useRef();

    const nameField = useRef();
    const emailField = useRef();
    const phoneField = useRef();
    const modelField = useRef();
    const msgField = useRef();
    const sendBtn = useRef();

    const leatherSeats = useRef();
    const fabricSeats = useRef();
    const clothSeats = useRef();

    const badCarpet = useRef();
    const midCarpet = useRef();
    const goodCarpet = useRef();

    const textMe = useRef();
    const emailMe = useRef();
    
    const [formError, setFormError] = useState(false);
    const [formDisabled, setFormDisabled] = useStickyState(false, "formDisabled");


    const sendEmail = (e) => {
        e.preventDefault();

        if (formDisabled === true) return;

        if (nameField.current.value == "" || phoneField.current.value == "" || modelField.current.value == "") {
            setFormError("Please fill out all required fields before submitting.");
            return;
        }

        if (emailMe.current.checked && emailField.current.value == "") {
            setFormError("Please provide an email address if you would like to receive an email.");
            return;
        }

        emailjs.init(process.env.PUBLIC_KEY);

        emailjs.send(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            {
                "user_name": nameField.current.value,
                "user_phone": phoneField.current.value,
                "user_email": emailField.current.value,
                "vehicle_model": modelField.current.value,
                "seat_material": [leatherSeats, fabricSeats, clothSeats].filter(ref => ref.current.checked == true)[0].current.value,
                "carpet_condition": [badCarpet, midCarpet, goodCarpet].filter(ref => ref.current.checked == true)[0].current.value,
                "method": [textMe, emailMe].filter(ref => ref.current.checked == true)[0].current.value,
                "message": msgField.current.value
            }
        )
            .then(() => {
                console.log("Message sent");

                setFormError(false);
                setFormDisabled(true);

                nameField.current.value = "";
                phoneField.current.value = "";
                emailField.current.value = "";
                modelField.current.value = "";
                msgField.current.value = "";
                
                leatherSeats.current.checked = false;
                fabricSeats.current.checked = false;
                clothSeats.current.checked = false;

                badCarpet.current.checked = false;
                midCarpet.current.checked = false;
                goodCarpet.current.checked = false;

                textMe.current.checked = false;
                emailMe.current.checked = false;

                return false;
            }, (error) => {
                console.log(error);
                return false;
            })

        return false;
    }


    return <div className="bg-primary rounded-sm shadow-lg p-2 xl:px-6 xl:py-8 py-6 text-md md:text-lg mb-6 w-full relative">
        <form ref={form} disabled={formDisabled === "false"} onSubmit={sendEmail}>
            {formError && <p className="ml-2 font-semibold text-xl text-center my-2">{formError}</p>}

            <label className="ml-2">Full name *</label>
            <input
                ref={nameField}
                type="text"
                name="user_name"
                className="mb-2 rounded-sm px-1 font-semibold mx-2 w-[calc(100%-16px)] text-black"
            />

            <label className="ml-2">Phone *</label>
            <input
                ref={phoneField}
                type="text"
                name="user_phone"
                className="font-semibold rounded-sm px-1 mb-2 mx-2 w-[calc(100%-16px)] text-black"
            />

            <label className="ml-2">Email</label>
            <input
                ref={emailField}
                type="text"
                name="user_email"
                className="font-semibold rounded-sm px-1 mb-2 mx-2 w-[calc(100%-16px)] text-black"
            />

            <label className="ml-2">Vehicle Make &amp; Model *</label>
            <input
                ref={modelField}
                type="text"
                name="vehicle_model"
                className="font-semibold rounded-sm px-1 mb-2 mx-2 w-[calc(100%-16px)] text-black"
            />

            <fieldset className="border-2 px-2 mx-2 mb-2 pb-1 rounded-sm">
                <legend className="ml-2 px-2 mb-0">Seat Material</legend>
                <div className="flex gap-2">
                    <input
                        ref={leatherSeats}
                        type="radio"
                        id="leather"
                        name="seat"
                        value="leather"
                    />
                    <label htmlFor="leather">Leather / Vinyl</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={fabricSeats}
                        type="radio"
                        id="fabric"
                        name="seat"
                        value="fabric"
                    />
                    <label htmlFor="fabric">Fabric</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={clothSeats}
                        type="radio"
                        id="cloth"
                        name="seat"
                        value="cloth"
                    />
                    <label htmlFor="cloth">Cloth</label>
                </div>
            </fieldset>

            <fieldset className="border-2 px-2 mx-2 mb-2 pb-1 rounded-sm">
                <legend className="ml-2 px-2 mb-0">How's the carpet?</legend>
                <div className="flex gap-2">
                    <input
                        ref={badCarpet}
                        type="radio"
                        id="bad-carpet"
                        name="carpet"
                        value="bad" 
                    />
                    <label htmlFor="bad-carpet">Lots of pet hair or heavy stains.</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={midCarpet}
                        type="radio"
                        id="mid-carpet"
                        name="carpet"
                        value="mediocre" 
                    />
                    <label htmlFor="mid-carpet">Mild stains, needs a wash.</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={goodCarpet}
                        type="radio"
                        id="good-carpet"
                        name="carpet"
                        value="good"
                    />
                    <label htmlFor="good-carpet">Good, just needs a vacuum.</label>
                </div>
            </fieldset>

            <fieldset className="border-2 px-2 mx-2 mb-2 pb-1 rounded-sm">
                <legend className="ml-2 px-2 mb-0">How would you like to receive your estimate?</legend>
                <div className="flex gap-2">
                    <input
                        ref={textMe}
                        type="radio"
                        id="text-me"
                        name="method"
                        value="text" 
                    />
                    <label htmlFor="text-me">Text me</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={emailMe}
                        type="radio"
                        id="email-me"
                        name="method"
                        value="email" 
                    />
                    <label htmlFor="email-me">Email me</label>
                </div>
            </fieldset>

            <label className="ml-2 mt-2">Questions or other details:</label>
            <textarea
                ref={msgField}
                name="message"
                className="font-semibold rounded-sm px-1 mb-2 mx-2 w-[calc(100%-16px)] text-black resize-none h-20"
            />


            <input
                ref={sendBtn}
                type="submit"
                value={formDisabled ? "Sent!" : "Send"}
                className={`border-2 duration-300 w-[50%] transition-all rounded-sm text-center text-lg px-12 py-1 relative my-2 mx-auto block hoverPrimary hover`}
            />

            
        </form>
    </div>
}