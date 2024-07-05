'use client';
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
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

import Image from "next/image";
import Marquee from "react-fast-marquee";
const flags = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17]




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


const blogs = [
    {
        name: "Rajkumar Bala",
        department: "EP-2007-11",
        title: "Stories of the Campus-1",
        id: "1",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Tanmoy Mondal",
        department: "EP-2007-11",
        title: "Stories of the Campus-2",
        id: "2",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Rajdeep Dutta",
        department: "EP-2007-11",
        title: "Stories of the Campus-3",
        id: "3",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Harish3",
        department: "EP-2007-11",
        title: "Stories of the Campus-4",
        id: "4",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Harish4",
        department: "EP-2007-11",
        title: "Stories of the Campus-5",
        id: "5",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Harish5",
        department: "EP-2007-11",
        title: "Stories of the Campus-6",
        id: "6",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
]



export default function Detailed({ params }: { params: any }) {
    const router = useRouter();
    const blog = blogs[params.blogID - 1]
    return (

        <>


            <section className="dark:bg-darkBg bg-purple-200 w-full md:h-full snap-start snap-always shrink-0 ">
                <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                    <Button onClick={() => router.back()}>Go Back</Button>
                    <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                        {blog.title}
                    </h2>
                    <div className=" justify-between items-center  border-12 ">


                        <section className="border-b-border dark:border-b-darkBorder dark:bg-darkBg inset-0 flex w-full flex-col items-center justify-center border-b-2 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
                            <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
                                <p className="font-medium text-3xl pb-10"> {blog.name} &#124; {blog.department} </p>
                                {blog.story}
                            </div>
                        </section>
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