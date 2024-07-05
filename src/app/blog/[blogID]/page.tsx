'use client';
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"


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



export default function Detailed({params}:{params:any}) {
    const router = useRouter();
    const blog = blogs[params.blogID-1]
    return (

        <>


            <section className="dark:bg-darkBg bg-purple-200 w-full md:h-full snap-start snap-always shrink-0 ">
                <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                        <Button onClick={()=>router.back()}>Go Back</Button>
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
            <Footer></Footer>

        </>


    )
}