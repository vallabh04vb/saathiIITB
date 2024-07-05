'use client';
import { Button } from './ui/button'
import Image from 'next/image';
import sa from '@/assets/ss.png'
import Link from 'next/link';


const blogs = [
    {
        name: "Harish",
        department: "EP-2007-11",
        title: "Stories of the Campus-1",
        id:"1",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Harish1",
        department: "EP-2007-11",
        title: "Stories of the Campus-2",
        id:"2",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Harish2",
        department: "EP-2007-11",
        title: "Stories of the Campus-3",
        id:"3",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Harish3",
        department: "EP-2007-11",
        title: "Stories of the Campus-4",
        id:"4",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Harish4",
        department: "EP-2007-11",
        title: "Stories of the Campus-5",
        id:"5",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
    {
        name: "Harish5",
        department: "EP-2007-11",
        title: "Stories of the Campus-6",
        id:"6",
        story: "I spent my first year at IITB making as few friends as I possibly could, having convinced myself that no friend would ever forgive me when they eventually learnt about my sexuality. The plan was to lie low for my 4 years on campus, and then flee to some country with nice white liberals. Thankfully, despite not being an especially friendly person, several batchmates had enough patience that we started becoming friends. Frustrated at having to pretend to be someone I wasn't, I summoned the courage to come out to a handful of these friends. Although I was initially terrified of what their reaction might be, I was pleasantly surprised by how chill they were about the whole affair. It felt truly wonderful and liberating to have friends with whom I had no secrets to hide! By the time I entered my final semester in 2011, I had come out to close to a dozen friends on campus. Contrary to my fears, none of them took the news badly; every single one of them had been warm and accepting. My sense of self-worth skyrocketed as a result, and I even summoned the courage to put up pro-LGBTQ posters across campus in the dead of night. Eventually, buoyed by the support I received from my friends, and realizing how impactful LGBTQ visibility could be for other closeted folks, I decided to use my valfi for a public coming-out. After that, there was no looking back. The Insight editorial team invited me to write an article about my experience as the only openly LGBTQ person on campus, which I gladly used as an opportunity to publicize the recently-formed Saathi. The outpouring of support we received on campus, from students to faculty to staff, was overwhelming. It was especially heartwarming to hear from people whose attitudes towards LGBTQ folks had changed as a result. Being a part of Saathi's foundation was an incredible privilege, and it remains the proudest chapter of my life. "
    },
]


export default function Community() {

    return (
        <section className="border-b-border dark:border-b-darkBorder dark:bg-darkBg inset-0 flex w-full flex-col items-center justify-center border-b-2 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
            <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
                <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
                    Stories from the community
                </h2>
                <div className="grid grid-cols-3 gap-4 lg:gap-8 w900:grid-cols-1 w900:gap-0">
                    {[
                        [blogs[0], blogs[1]],
                        [blogs[3], blogs[2], blogs[0]],
                        [blogs[4], blogs[5]],

                    ].map((card, index) => (
                        <div className="group flex flex-col justify-center" key={index} >
                            {card.map(({ name, id,department, title, story }, index) => (
                                <div
                                    className="border-border dark:border-darkBorder shadow-light dark:shadow-dark dark:bg-darkBg mb-4 min-h-48 w-full rounded-base border-2 bg-bg p-5 lg:mb-8 w900:mx-auto w900:min-h-20 w900:w-2/3 w500:w-full"
                                    key={index}
                                >
                                    <div className="flex items-center gap-5">
                                        <Image src={sa} width={50} height={50} alt='pfp'></Image>
                                        <div>
                                            <h4 className="text-lg font-heading">{name}</h4>
                                            <p className="text-sm font-base">{department}</p>
                                        </div>
                                    </div>
                                    <div className="mt-5">{title}<p>{story.slice(0, 130) + "............"}</p></div>
                                    <Link href={'/blog/' + id}>
                                        <Button>Know more</Button>
                                    </Link>

                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


// TODO: Create a github page which will kind of be an index of all the markdown files