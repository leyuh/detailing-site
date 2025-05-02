"use client"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser";
import useStickyState from "@/useStickyState";

export default function MessageForm () {
    const form = useRef();

    const nameField = useRef();
    const phoneField = useRef();

    const modelField = useRef();

    const seatField = useRef();
    const lastDetailField = useRef();

    const whiteField = useRef();
    const crimsonField = useRef();
    const blackField = useRef();

    const ozoneField = useRef();
    const carpetShampooField = useRef();
    const seatShampooField = useRef();
    const leatherConditioningField = useRef();
    const sealantField = useRef();

    const petHairField = useRef();
    const stainingField = useRef();
    const dirtyField = useRef();

    const msgField = useRef();
    const sendBtn = useRef();

    const textMe = useRef();
    const callMe = useRef();
    
    const [formError, setFormError] = useState(false);
    const [formDisabled, setFormDisabled] = useStickyState(false, "formDisabled");


    const sendEmail = (e) => {
        e.preventDefault();

        if (formDisabled === true) return;

        if (nameField.current.value == "" || phoneField.current.value == "" || modelField.current.value == "") {
            setFormError("Please fill out all required fields before submitting.");
            return;
        }


        emailjs.init(process.env.PUBLIC_KEY);

        emailjs.send(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            {
                "user_name": nameField.current.value,
                "user_phone": phoneField.current.value,
                "vehicle_model": modelField.current.value,
                "seat_material": seatField.current.value,
                "last_detail": lastDetailField.current.value,
                "desired_package": [whiteField, crimsonField, blackField].filter(ref => ref.current.checked == true)[0].current.value,
                "add_ons": [ozoneField, carpetShampooField, seatShampooField, sealantField, leatherConditioningField].filter(ref => ref.current.checked == true).map(ref => ref.current.value),
                "vehicle_state": [petHairField, stainingField, dirtyField].filter(ref => ref.current.checked == true).map(ref => ref.current.value),
                "method": [textMe, callMe].filter(ref => ref.current.checked == true)[0].current.value,
                "message": msgField.current.value
            }
        )
            .then(() => {
                console.log("Message sent");

                setFormError(false);
                setFormDisabled(true);

                nameField.current.value = "";
                phoneField.current.value = "";

                modelField.current.value = "";
                seatField.current.value = "",
                lastDetailField.current.value = "",

                msgField.current.value = "";
                
                whiteField.current.checked = false;
                crimsonField.current.checked = false;
                blackField.current.checked = false;

                ozoneField.current.checked = false;
                carpetShampooField.current.checked = false;
                seatShampooField.current.checked = false;
                leatherConditioningField.current.checked = false;
                sealantField.current.checked = false;

                petHairField.current.checked = false;
                stainingField.current.checked = false;
                dirtyField.current.checked = false;

                textMe.current.checked = false;
                callMe.current.checked = false;

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

            <label className="ml-2">Phone number *</label>
            <input
                ref={phoneField}
                type="text"
                name="user_phone"
                className="font-semibold rounded-sm px-1 mb-2 mx-2 w-[calc(100%-16px)] text-black"
            />

            <label className="ml-2">Vehicle year, make, &amp; model *</label>
            <input
                ref={modelField}
                type="text"
                name="vehicle_model"
                className="font-semibold rounded-sm px-1 mb-2 mx-2 w-[calc(100%-16px)] text-black"
            />

            <label className="ml-2">Seat material *</label>
            <input
                ref={seatField}
                type="text"
                name="seat_material"
                className="font-semibold rounded-sm px-1 mb-2 mx-2 w-[calc(100%-16px)] text-black"
            />

            <label className="ml-2">Last time interior detailed</label>
            <input
                ref={lastDetailField}
                type="text"
                name="last_detail"
                className="font-semibold rounded-sm px-1 mb-2 mx-2 w-[calc(100%-16px)] text-black"
            />

            <fieldset className="border-2 px-2 mx-2 mb-2 pb-1 rounded-sm">
                <legend className="ml-2 px-2 mb-0">Desired package:</legend>
                <div className="flex gap-2">
                    <input
                        ref={whiteField}
                        type="radio"
                        id="white-package"
                        name="package"
                        value="white" 
                    />
                    <label htmlFor="white-package">White - Interior Only</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={crimsonField}
                        type="radio"
                        id="crimson-package"
                        name="package"
                        value="crimson" 
                    />
                    <label htmlFor="crimson-package">Crimson - Exterior Only</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={blackField}
                        type="radio"
                        id="black-package"
                        name="package"
                        value="black"
                    />
                    <label htmlFor="black-package">Black - Full Detail</label>
                </div>
            </fieldset>

            <fieldset className="border-2 px-2 mx-2 mb-2 pb-1 rounded-sm">
                <legend className="ml-2 px-2 mb-0">Add-ons:</legend>
                <div className="flex gap-2">
                    <input
                        ref={seatShampooField}
                        type="checkbox"
                        id="seat-shampoo"
                        name="add-ons"
                        value="seat-shampoo"
                    />
                    <label htmlFor="seat-shampoo">Seat shampoo ($30)</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={carpetShampooField}
                        type="checkbox"
                        id="carpet-shampoo"
                        name="add-ons"
                        value="carpet-shampoo" 
                    />
                    <label htmlFor="carpet-shampoo">Carpet shampoo ($30)</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={leatherConditioningField}
                        type="checkbox"
                        id="leather-conditioning"
                        name="add-ons"
                        value="leather-conditioning"
                    />
                    <label htmlFor="leather-conditioning">Leather conditioning ($15)</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={ozoneField}
                        type="checkbox"
                        id="ozone"
                        name="add-ons"
                        value="ozone" 
                    />
                    <label htmlFor="ozone">Odor elimination ($30)</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={sealantField}
                        type="checkbox"
                        id="sealant"
                        name="add-ons"
                        value="sealant" 
                    />
                    <label htmlFor="sealant">Paint sealant ($20)</label>
                </div>
            </fieldset>

            <fieldset className="border-2 px-2 mx-2 mb-2 pb-1 rounded-sm">
                <legend className="ml-2 px-2 mb-0">Select all that apply:</legend>
                <div className="flex gap-2">
                    <input
                        ref={petHairField}
                        type="checkbox"
                        id="pet-hair"
                        name="vehicle-state"
                        value="pet-hair" 
                    />
                    <label htmlFor="pet-hair">Significant pet hair build up</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={stainingField}
                        type="checkbox"
                        id="significant-staining"
                        name="vehicle-state"
                        value="significant-staining" 
                    />
                    <label htmlFor="significant-staining">Significant carpet / seat staining</label>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={dirtyField}
                        type="checkbox"
                        id="dirty"
                        name="vehicle-state"
                        value="dirty"
                    />
                    <label htmlFor="dirty">Excessive dirt &amp; debris</label>
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
                        ref={callMe}
                        type="radio"
                        id="call-me"
                        name="method"
                        value="call" 
                    />
                    <label htmlFor="call-me">Call me</label>
                </div>
            </fieldset>

            <label className="ml-2 mt-2">Questions, priorities, other info:</label>
            <textarea
                ref={msgField}
                name="message"
                className="font-semibold rounded-sm px-1 mb-2 mx-2 w-[calc(100%-16px)] text-black resize-none h-20"
            />


            <input
                ref={sendBtn}
                type="submit"
                value={formDisabled ? "Sent!" : "Submit"}
                className={`border-2 duration-300 w-[50%] transition-all rounded-sm text-center text-lg px-12 py-1 relative my-2 mx-auto block hoverPrimary hover`}
            />

            
        </form>
    </div>
}