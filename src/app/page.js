import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import PRICING_DATA from "./pricingModule";

export default function Home() {
  return (
    <main>
      <div className="hero w-full h-[90vh] relative top-0 flex items-center">

        <div className="w-full h-[90vh] absolute">
          <Image 
            src="/dummyHeroImage.jpeg"
            alt="interior"
            fill={true}
            quality="100"
            className="brightness-50 contrast-125 object-cover"
          />
        </div>

        <div className="info-box text-zinc-50 z-20 relative mx-auto md:mx-0 max-w-sm md:max-w-xl p-2 md:ml-6">
          <h1 className="text-3xl text-center md:text-left md:text-5xl mb-4 font-[300]">Quality, thorough interior detailing for all vehicles.</h1>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 mx-auto md:mx-0 items-center justify-center md:justify-left w-min">
            <CallToAction 
              text="PORTFOLIO"
              destination="/portfolio"
              classes="border-zinc-50 bg-transparent"
            />
            <CallToAction 
              text="GET IN TOUCH"
              destination="/contact"
              classes="bg-primary border-primary"
            />
          </div>
        </div>
        

      </div>



      <div className="about w-full relative top-0 bg-zinc-900">
        <div className="bg-primary absolute h-full w-[40%] lg:w-[30%] right-0 z-20" />

        <div className="flex flex-row w-full h-full z-30 relative px-4 py-6">
          <div className="relative w-full md:w-[50%] flex flex-col gap-4 justify-center items-center">

            <div className="w-full p-2 mt-4 text-zinc-50">
              <h1 className="font-[300] text-4xl text-left z-20 items-center mb-2">ABOUT</h1>
              <p className="text-base">It wouldn't be wrong to say I'm a bit of a perfectionist. I won't stop until I know the job is done to the fullest. So, when I detail your vehicle, you can be sure that you are getting your money's worth, and beyond.</p>
            </div>

            <div className="w-full mt-2 lg:mt-8 md:p-2 text-zinc-50">
              <span className="text-center z-20 items-center justify-center gap-1 mb-2 flex">
                <h1 className="font-[300] text-2xl text-center">PRICING</h1>
                <h1 className="font-[200] text-xl text-center">*</h1>
              </span>
              
              <div className="grid grid-rows-3 auto-rows-min grid-cols-4 grid-flow-col">
                <>
                  {Object.keys(PRICING_DATA[0]).map((key, j) => (
                    <div className="items-center flex h-min">
                      <h1 className="mr-4 text-right w-full font-semibold my-1">{key.toUpperCase()}</h1>
                    </div>
                  ))}
                </>

                {PRICING_DATA.map((item, i) => (
                  <>
                    {Object.values(item).map((val, j) => (
                      <div className="border-l-[1px] box-border items-center flex h-min">
                        <h1 className="mx-1 md:mx-2 text-center w-full my-1">{val}</h1>
                      </div>
                    ))}
                  </>
                ))}
              </div>
              <p className="mx-4 md:mx-8 xl:mx-16 mt-6 text-sm text-center">* Prices and durations are general estimates and may vary based on the vehicle type and condition. Call, text, or email for an accurate estimate on your vehicle.</p>
            </div>

          </div>
          <div className="hidden md:flex relative w-[50%] p-4 items-center justify-center">
            <Image 
              src="/dummyImage.png"
              alt="image"
              fill={true}
              className="object-contain object-center p-2"
            />
          </div>
        </div>
      </div>


      <section className="portfolio">
        
      </section>

      <section className="contact">
        
      </section>
    </main>
  );
}
