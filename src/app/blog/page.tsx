import Community from "@/components/community"
import Footer from "@/components/footer"
import Marquee from "react-fast-marquee"
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
const flags = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17]
import Image from "next/image"



let Cards = [
    {
        img: '/assets/flags/1.webp',
        title: "Being Gay",
        description: "It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
    },
    {
        img: '/assets/flags/2.webp',
        title: "Being Lesbian",
        description: "A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
    },
    {
        img: '/assets/flags/3.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
    {
        img: '/assets/flags/4.webp',
        title: "Being Gay",
        description: "It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
    },
    {
        img: '/assets/flags/5.webp',
        title: "Being Lesbian",
        description: "A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
    },
    {
        img: '/assets/flags/6.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
    {
        img: '/assets/flags/7.webp',
        title: "Being Gay",
        description: "It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
    },
    {
        img: '/assets/flags/8.webp',
        title: "Being Lesbian",
        description: "A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
    },
    {
        img: '/assets/flags/9.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
    {
        img: '/assets/flags/10.webp',
        title: "Being Gay",
        description: "It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
    },
    {
        img: '/assets/flags/11.webp',
        title: "Being Lesbian",
        description: "A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
    },
    {
        img: '/assets/flags/12.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
    {
        img: '/assets/flags/13.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },

    {
        img: '/assets/flags/14.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },

    {
        img: '/assets/flags/15.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
    {
        img: '/assets/flags/16.webp',
        title: "Being Bisexual",
        description: "Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

    },
]


export default function Detailed() {
    return (

        <>


            <section className="dark:bg-darkBg bg-purple-200 w-full md:h-full snap-start snap-always shrink-0 ">
                <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                    <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                        Blogposts
                    </h2>
                    <div className=" justify-between items-center  border-12 ">
                        <Community></Community>
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