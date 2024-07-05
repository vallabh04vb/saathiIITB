
import Footer from "@/components/footer"
import ImageCard from "@/components/ImageCard"
import Image from "next/image"
import about1 from "@/assets/about1.webp"
import i1 from '@/assets/flags/1.webp'
import i2 from '@/assets/flags/2.webp'
import i3 from '@/assets/flags/3.webp'
import i4 from '@/assets/flags/4.webp'
import i5 from '@/assets/flags/5.webp'
import i6 from '@/assets/flags/6.webp'
import i7 from '@/assets/flags/7.webp'
import i8 from '@/assets/flags/8.webp'
import i9 from '@/assets/flags/9.webp'
import i10 from '@/assets/flags/10.webp'
import i11 from '@/assets/flags/11.webp'
import i12 from '@/assets/flags/12.webp'
import i13 from '@/assets/flags/13.webp'
import i14 from '@/assets/flags/14.webp'
import i15 from '@/assets/flags/15.webp'
import i16 from '@/assets/flags/16.webp'
import i17 from '@/assets/flags/17.webp'
import Marquee from "react-fast-marquee";
const flags = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17]


export default function Detailed() {
    return (

        <>


            <section id="identity" className="bg-black w-full h-[calc(100vh-80px)] min-h-screen snap-start snap-always shrink-0 pt-">

                <div className="w-full h-full relative bg-cover bg-no-repeat bg-center bg-scroll bg-aboutUsMobile md:bg-aboutUs">
                    <div className="px-5 md:px-40 flex flex-col md:flex-row items-center  gap-8 md:gap-12">
                    </div>
                </div>
            </section>

            <section id="identity" className="bg-black w-full h-full min-h-screen snap-start snap-always shrink-0 pt-">

                <div className="w-full h-full relative bg-cover bg-no-repeat bg-center bg-scroll bg-pink-200 dark:bg-pink-950 pb-10">
                    <div className="flex flex-col md:flex-col items-center  ">
                        <div className=" px-5 md:px-24 h-full py-20 2xl:p-10 md:w-[80%]">
                            <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                                About Saathi
                            </h2>
                            <p className="text-xl">
                                Saathi (&349;companion&349; in hindi) at IIT Bombay is an LGBTQ+ support and resource group. We are committed to providing a community for LGBTQ+ individuals on campus. We organize events all through the year such as workshops, awareness days, movie screenings and informal meetups. Most of these events are open to all, irrespective of gender identity or sexual orientation. Even if you identify as straight (as many of our members do), these events will be a great place to know more about the community and learn how to be great allies and support your LGBTQ+ friends. </p>

                        </div>
                        <Image src={about1} width={1000} height={500} alt="adaf"></Image>
                        <div className=" px-5 md:px-24 h-full py-20 2xl:p-10 md:w-[80%]">
                            <p className="text-xl">
                                Saathi (&349;companion&349; in hindi) at IIT Bombay is an LGBTQ+ support and resource group. We are committed to providing a community for LGBTQ+ individuals on campus. We organize events all through the year such as workshops, awareness days, movie screenings and informal meetups. Most of these events are open to all, irrespective of gender identity or sexual orientation. Even if you identify as straight (as many of our members do), these events will be a great place to know more about the community and learn how to be great allies and support your LGBTQ+ friends.
                            </p>

                        </div>
                        <div className=" px-5 md:px-24 h-full py-20 2xl:p-10 md:w-[80%]">
                            <div className="text-xl"  >
                                <h3 className="text-5xl font-medium">Our Policy</h3>
                                All our events are safe spaces wherein we even do not ask anyone their sexuality or gender identity. However, we understand that you may be apprehensive of your identity being disclosed outside the group. You can still get in touch with us via Facebook or Instagram. To remain up-to-date with our events and other information, join our Google group, look up ‘Saathi, IIT Bombay’ on Google Groups or send an email at saathi-iitb+subscribe@googlegroups.com. If required, you can also contact us on +91-6201506712, with your anonymity completely assured.
                            </div>
                        </div>
                        <ImageCard imageUrl="/about2.webp">   We invite you to be a part of Saathi, irrespective of your gender or orientation. We hope that your stay at IIT Bombay will be as bright and vibrant as the colours of the rainbow!</ImageCard>

                    </div>
                </div>
            </section>



            {/* Marquee Component */}

            <div>
                <Marquee
                    className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-darkBg border-y-2 bg-white py-3 font-base sm:py-5"
                    direction="left"
                >
                    {Array(17)
                        .fill('xd')
                        .map((x, id) => {
                            return (
                                <div className="flex items-center" key={id}>
                                    <span className="mx-10 text-xl font-heading sm:text-2xl lg:text-4xl">

                                    </span>
                                    <Image
                                        src={flags[id]}
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                </div>
                            )
                        })}
                </Marquee>
            </div>

            <Footer></Footer>

        </>


    )
}