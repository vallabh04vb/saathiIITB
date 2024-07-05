
import Footer from "@/components/footer"
import ImageCard from "@/components/ImageCard"
import Image from "next/image"
import about1 from "@/assets/about1.webp"

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

            <Footer></Footer>

        </>


    )
}