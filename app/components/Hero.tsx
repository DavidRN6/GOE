/* ======================
  table of contents
=========================

  1. Imports
  2. Background Image
  3. Shadow For Background
  4. Content
  5. Filter Box
  6. Location
  7. Date & People
  8. Button
*/

/*==============
  1. Imports
===============*/
import { TiLocationArrow } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import heroImg from "../../public/Home/hero.webp"
import Image from "next/image";

function Hero() {
  return (
    <section className="relative w-full h-auto min-h-[80vh] m-auto pt-10 px-5 lg:px-[150px] flex items-center lg:flex-row flex-col gap-10 bg-cover bg-center">

  {/*====================
    2. Background Image
  =======================*/}
  <Image src={heroImg} alt="hero-background" className="absolute inset-0 w-full h-full object-cover -z-10" />

  {/*=========================
    3. Shadow For Background
  ============================*/}
  <div className="absolute inset-0 bg-black/60 z-10"></div>

  {/*============
    4. Content
  ===============*/}
  <div className="flex flex-col gap-5 z-20 w-full max-w-screen-xl mx-auto md:mb-[2%]">

    <div className="flex gap-2 items-center text-lg sm:text-xl font-medium">
      <TiLocationArrow className="text-3xl sm:text-4xl" />
      <h2>Egypt</h2>
    </div>

    <div className="text-3xl sm:text-[40px] font-medium leading-tight">
      <h1>Hey!</h1>
      <h1>Tell us where you want to stay</h1>
    </div>

    <h3 className="text-xl sm:text-2xl">Book 450+ Curated Egyptian Hotels</h3>

    {/*===============
      5. Filter Box
    ==================*/}
    <div className="flex flex-col lg:flex-row justify-between gap-5 mt-7 bg-white/15 p-2 rounded-3xl lg:rounded-full font-medium">

      {/*=============
        6. Location
      ================*/}
      <div className="flex gap-2 items-center text-lg sm:text-xl cursor-pointer lg:ml-7">
        <MdLocationOn className="text-[#D2AC71] text-2xl sm:text-3xl" />
        <p>Cairo, Egypt</p>
      </div>

      {/*=================
        7. Date & People
      ====================*/}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">

        <div className="flex gap-2 items-center text-lg sm:text-xl">
          <p className="text-[#121212]/20 hidden sm:block">|</p>
          <FiCalendar className="text-[#D2AC71] text-2xl sm:text-3xl" />
          <p>19 March 2025 - 27 Mar..</p>
        </div>

        <div className="flex gap-2 items-center text-lg sm:text-xl">
          <p className="text-[#121212]/20 hidden sm:block">|</p>
          <GoPeople className="text-[#D2AC71] text-2xl sm:text-3xl" />
          <p>2 Adults, 1 Child, 1 Infant</p>
        </div>

      </div>

      {/*===========
        8. Button
      ==============*/}
      <div>
        <button className="bg-[#346D52] px-8 xl:px-12 py-3 xl:py-4 rounded-full text-white text-base sm:text-lg w-full lg:w-auto cursor-pointer">
          Explore Stays
        </button>
      </div>

    </div>

  </div>
</section>

  );
}

export default Hero;
