import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import PRICING_DATA from "@/app/pricingModule"
import { Fragment } from "react"
import PORTFOLIO_ITEMS from "@/portfolioModule";
import PortfolioItem from "@/components/PortfolioItem";

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
          <div className="relative w-full md:w-[50%] flex justify-center items-center">

              <div className="w-full p-2 my-20 text-zinc-50">
                <h1 className="font-[300] text-4xl text-left z-20 items-center mb-2">ABOUT</h1>
                <p className="text-base">It wouldn't be wrong to say I'm a bit of a perfectionist. I won't stop until I know the job is done to the fullest. So, when I detail your vehicle, you can be sure that you are getting your money's worth, and beyond.</p>
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

      <section className="portfolio bg-zinc-950">
        <h1 className="font-[300] text-4xl pt-12 z-20 items-center mb-2 text-zinc-50 text-center">MY WORK</h1>
        <div className="relative no-scrollbar flex gap-4 w-[calc(100vw-32px)] m-4 overflow-x-scroll">
          {PORTFOLIO_ITEMS.filter((item, i) => i < 6).map((item, i) => (
            <div className="flex flex-row items-center w-[320px] md:w-[480px] relative shrink-0 grow-0">
              {Object.keys(item.images[0]).map((label, i) => (
                  <div className="aspect-square w-full relative" key={i}>
                      <h1 className="absolute z-30 text-zinc-50 mb-1 ml-2 bottom-0">{label.toUpperCase()}</h1>
                      <div className="absolute w-full aspect-square">
                          <Image 
                              src={item.images[0][label]}
                              alt={label}
                              sizes="300px"
                              fill={true}
                              className="object-cover object-center"
                          />
                      </div>
                  </div>
              ))}
          </div>
          ))}
        </div>
        <div className="flex w-full pt-2 pb-12 items-center justify-center">
          <CallToAction 
            text="VIEW ALL"
            destination="/portfolio"
            classes="border-zinc-50 bg-transparent text-zinc-50"
          />
        </div>
      </section>

      <div className="pricing w-full relative top-0 bg-zinc-900">
        <div className="bg-primary absolute h-full w-[40%] lg:w-[30%] z-20" />
        <div className="w-full md:p-2 text-zinc-50 z-40 relative">
          <span className="text-center z-20 items-start justify-center gap-1 mb-6 pt-12 flex">
              <h1 className="font-[300] text-4xl text-center">PRICING</h1>
              <h1 className="font-[200] text-2xl text-center">*</h1>
          </span>
          
          <div className="grid grid-cols-4 max-w-sm sm:max-w-lg md:max-w-3xl xl:max-w-5xl mx-auto">
              {PRICING_DATA.map((row, r) => (
                  <Fragment key={r}>
                      {row.map((item, i) => (
                          <div className={`py-4 px-1 border-box ${i != 0 ? "border-l-2" : "border-0"}`} key={i}>
                              <h1 className={ `${i == 0 ? "text-right font-semibold pr-3" : "text-center"}`}>{item}</h1>
                          </div>
                      ))}
                  </Fragment>
              ))}
          </div>

          <hr className="mt-8 max-w-[80vw] mx-auto"/>
          <p className="max-w-sm sm:max-w-lg md:max-w-3xl text-center mx-auto mt-2 text-sm px-2 pb-8">* Prices and durations are general estimates and vary based on the vehicle type and condition. Call, text, or email for an accurate estimate on your vehicle.</p>
        </div>
      </div>


      <section className="contact">
        
      </section>
    </main>
  );
}