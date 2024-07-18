import Saathilogo from "@/assets/saathi.png"
import iitb from "@/assets/iitb.png"
import Image from "next/image"
import insta from '@/assets/instagram.svg'
import fb from '@/assets/facebook.svg'
import tw from '@/assets/twitter.svg'
import heart from '@/assets/heart.png'
export default function Footer() {
  return (
    <>
      <section className="bg-black w-full snap-start snap-always shrink-0 ">
        <div className="mx-[2.5%] pt-5 mb-5">


          <div className="flex flex-col md:flex-row justify-between md:items-center items-left md:mb-[5%]">
            <div className="md:w-[20%] w-[50%] mb-12 md:mb-0 flex flex-row">
              <Image src={insta}
                width={35}
                height={35}
                alt="Picture of the author" className="mr-[2%]"></Image>
              <Image src={fb}
                width={35}
                height={35}
                alt="Picture of the author" className="mr-[2%]"></Image>
              <Image src={tw}
                width={35}
                height={35}
                alt="Picture of the author"></Image>

            </div>

            <div className="md:w-[12%] w-[40%] mb-12 md:mb-0 md:bl-white">
            </div>
            <div className="md:w-[38%] mb-12 md:mb-0">
              <span className="text-xl text-white">
                Saathi
                <p>IIT Bombay, Powai, Mumbai, IN</p>
                <p><a href="mailto:saathi.iitbombay@gmail.com">saathi.iitbombay@gmail.com</a></p>
                <p>+91-7506110914</p>
              </span>

            </div>

          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center items-left">
            <span className="text-xl text-white"> An initiative by the students of IIT Bombay</span>

          </div>

          <div className="flex flex-col md:flex-row justify-between md:items-center items-left">

          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center items-left md:mb-[3%]">
            <div className="md:w-[20%] w-[50%] mb-12 md:mb-0">
              <Image src={Saathilogo}
                width={1000}
                height={500}
                alt="Picture of the author"></Image>
            </div>

            <div className="md:w-[12%] w-[40%] mb-12 md:mb-0 md:bl-white">
              <Image src={iitb}
                width={1000}
                height={5000}
                alt="Picture of the author"></Image>
            </div>
            <div className="md:w-[38%] mb-12 md:mb-0 flex flex-row">
              <span className=" text-xl text-white ">Developed with</span>
              <div className="hover:scale-150"><Image src={heart} width={50} height={50} alt="heart logo" className="hover:scale-100"></Image></div>
              <span className="text-xl text-white  ">by</span>
              <span className="text-xl text-purple-500 font-black"><a href="https://www.eshway.com" target="_blank">&nbsp; ESH</a></span>
              <span className="text-xl text-white font-black "><a href="https://www.eshway.com" target="_blank">WAY</a></span>
            </div>
          </div>
        </div>
        <div className="md:h-2 h-1 w-full rounded-md bg-rainbow-gradient ">
        </div>
      </section>
    </>
  )
}
