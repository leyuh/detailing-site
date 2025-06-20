import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import { PRICING_DATA } from "@/pricingModule"
import { Fragment } from "react"
import PORTFOLIO_ITEMS from "@/portfolioModule";
import PortfolioItem from "@/components/PortfolioItem";
import Link from "next/link";
import PackageDiv from "@/components/PackageDiv";

import { ADDONS_DATA } from "@/pricingModule";

const featuredPortfolioItems = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <>
      <div className="hero w-full h-[100vh] md:h-[calc(100vh-80px)] top-0 relative flex items-center">

        <div className="w-full h-full absolute overflow-hidden z-10">
          <Image 
            src="/cleaning/dash-1.jpeg"
            alt="interior"
            fill={true}
            quality="100"
            className="brightness-[45%] contrast-[125%] saturate-[80%] object-cover z-10"
          />
        </div>

        <div className="info-box text-zinc-50 z-20 mt-0 lg:mt-8 relative mx-auto md:mx-0 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl p-2 md:ml-6">
          <h1 className="text-4xl sm:text-4xl text-center md:text-left md:text-6xl mb-4 font-[300]">Exceptional auto detailing in Brownsville, Oregon.</h1>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-3 mx-auto md:mx-0 items-center justify-center md:justify-left w-min">
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

      <div className="about w-full relative top-0 bg-zinc-900 min-h-[50vh]">
        <div className="bg-primary absolute h-full w-[40%] lg:w-[30%] right-0 z-20" />

        <div className="flex flex-row w-full h-full z-30 relative px-8 sm:px-12 py-6 gap-8 2xl:gap-16 lg:px-24">
          <div className="relative w-full md:w-[40%] flex justify-center items-center my-[10%]">

              <div className="w-full p-2 my-20 text-zinc-50">
                <h1 className="font-[300] text-4xl text-left z-20 items-center mb-2">ABOUT</h1>
                <p className="text-lg">It wouldn't be wrong to say I'm a bit of a perfectionist. I won't stop until I know the job is done to the fullest. So, when I detail your vehicle, you can be sure that you are getting your money's worth, and beyond.</p>
              </div>

        

          </div>
          <div className="hidden md:flex relative w-[60%] px-2 my-12 items-center justify-center rounded-sm overflow-hidden">
              <Image 
                src="/portfolio-items/item-11/after-3.png"
                alt="image"
                fill={true}
                className="object-cover brightness-[105%] contrast-[105%] saturation-[90%] rounded-sm object-center p-2"
              />
          </div>
        </div>
      </div>

      

      {<div className="packages w-full relative top-0 bg-zinc-950 min-h-[70vh] pb-8">

        <div className="w-full text-zinc-50 z-30 relative">

          <div className="bg-zinc-400 absolute w-full h-[70%] md:h-[65%]">
            <Image 
              src="/cleaning/controls.jpeg"
              alt="interior"
              fill={true}
              quality="100"
              className="brightness-[35%] contrast-[125%] saturate-[80%] object-cover z-10"
            />
          </div>

          <span className="text-center z-20 items-start justify-center gap-1 mb-6 pt-16 flex">
              <h1 className="font-[300] text-4xl text-center z-20">PACKAGES</h1>
          </span>
          
          <div className="flex px-6 flex-col md:flex-row gap-6 max-w-sm md:px-0 md:max-w-3xl lg:max-w-5xl mx-auto pb-10">
            <PackageDiv 
                name="WHITE"
              />
              <PackageDiv 
                name="CRIMSON"
              />
              <PackageDiv 
                name="BLACK"
              />
          </div>

          <div className="relative w-full top-8">
            <h1 className="font-[600] text-3xl text-center z-20 mt-20 pb-2">ADD-ONS</h1>
            <div className="flex flex-col pb-6 md:flex-row md:gap-12 w-full px-12 md:px-0 md:w-[80%] lg:w-[60%] mx-auto justify-center">
              <div className="flex-grow">
                <h2 className="text-2xl text-center">INTERIOR</h2>
                <ul className="">
                  {Object.keys(ADDONS_DATA).filter((item, i) => ADDONS_DATA[item].type == "Interior").map((item, i) => <li className="my-2">
                    <span className="flex text-lg font-[600] justify-between">
                      <h3>{item}</h3>
                      <h3 className="">${ADDONS_DATA[item].price}</h3>
                    </span>
                    <p className="ml-2">{ADDONS_DATA[item].desc}</p>
                  </li>)}
                </ul> 
              </div>
              
              <div className="flex-grow">
                <h2 className="text-2xl text-center">EXTERIOR</h2>
                <ul className="">
                  {Object.keys(ADDONS_DATA).filter((item, i) => ADDONS_DATA[item].type == "Exterior").map((item, i) => <li className="my-2">
                    <span className="flex text-lg font-[600] justify-between">
                      <h3>{item}</h3>
                      <h3>${ADDONS_DATA[item].price}</h3>
                    </span>
                    <p className="ml-2">{ADDONS_DATA[item].desc}</p>
                  </li>)}
                </ul>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>}

      <section className="portfolio bg-zinc-900">
        <h1 className="font-[300] text-4xl pt-12 z-20 items-center mb-2 text-zinc-50 text-center">MY WORK</h1>
        <div className="relative no-scrollbar flex gap-4 w-[calc(100vw-32px)] m-4 overflow-x-scroll">
          {PORTFOLIO_ITEMS.filter((item, i) => (featuredPortfolioItems.indexOf(i-1) !== -1)).reverse().map((item, i) => (
            <div className="flex flex-row items-center w-[320px] md:w-[480px] relative shrink-0 grow-0 rounded-sm overflow-hidden shadow-md">
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

      {/*<div className="pricing w-full relative top-0 bg-zinc-900">
        <div className="bg-primary absolute h-full w-[40%] lg:w-[30%] z-20" />
        <div className="w-full md:p-2 text-zinc-50 z-30 relative">

          <span className="text-center z-20 items-start justify-center gap-1 mb-6 pt-16 flex">
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
          <p className="max-w-sm sm:max-w-lg md:max-w-3xl text-center mx-auto mt-2 text-sm px-2 pb-16">* Prices and durations are general estimates and vary based on the vehicle type and condition. <Link href="/contact" className="underline">Click here</Link> for an accurate estimate on your vehicle.</p>
        </div>
      </div>*/}

    </>
  );
}
