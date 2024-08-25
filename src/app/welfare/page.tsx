"use client";

import { useState } from 'react'

import Tabs from '@/components/Tabs'
import img from '@/assets/image.png'
import Image from 'next/image'
import Footer from '@/components/footer';


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


    const [activeTab, setActiveTab] = useState('Coming Out')
    const tabsArray = ['Coming Out', 'For allies', 'Mental Health']



    return (

        <>
            <section className="bg-purple-200 dark:bg-purple-800 w-full md:h-full snap-start snap-always shrink-0 ">
                <div className="px-5 md:px-24 h-full py-20 2xl:p-32 ">
                    <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                        Welfare Resources
                    </h2>
                    <div className=" justify-between items-center  border-12 margin">
                        Through these resources, we bring to you some concepts based around the welfare of the LGBTQ+ community. These resources are not comprehensive either in the terms or in their explanation. These cover various topics like Coming Out, Resources for Allies, Mental Health resources, LGBTQ+ NGOs, college clubs and more.
                        We hope that this will serve as a useful starting point for you to understand different aspects, ways to provide support and become better allies to the
                        LGBTQ+ community.
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center  border-12 ">
                        <div className=" rounded-base w-full">
                            <Tabs
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                tabsArray={tabsArray}
                            />
                            <div className="max-w-full rounded-b-base border-2 border-border dark:border-darkBorder bg-white dark:bg-darkBg p-5 font-base">
                                {activeTab === 'Coming Out' && (
                                    <div>
                                        <section className="bg-pink-200 dark:bg-pink-800 w-full md:h-full snap-start snap-always shrink-0 ">
                                            <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                                                <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                                                    Coming Out
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>
                                                        Coming out is a process of valuing, understanding, accepting your sexual orientation/identity. There's no right way, right time or right way to say it. Everyone has different experiences and ways to express themselves. If you don't want to or feel like doing so could cause harm to you, it's completely OK not to do so.</p>
                                                    <p>You are well within your rights to ask whoever you tell to keep it private. If you are still closeted to some people, tell your loved ones not to disclose until you are comfortable. Remember you will always find a community of people around you who's celebrating, supporting and inspiring you for who you are.</p>
                                                    <p>Coming out is also only a part of your LGBTQ+ journey, and while it may be an important one for many people, it doesn’t define who you are, or the ways in which you love and accept yourself.</p>
                                                    <p>If you are ready to come out, know that there is no right or wrong time to do it. You also don’t need to find a specific reason – if you want to come out, that’s reason enough!</p>

                                                </div>

                                                <div className=" justify-between items-center  border-12 margin">
                                                    <h3><p>Few things to check/remind yourself before coming out: </p></h3>
                                                    <p>
                                                        <ul>
                                                            <li>1. Choose people whom you trust the most and are supportive with your decision.</li>
                                                            <li>2. Don't judge or question yourself by people's reaction. Some people might take time to adjust to what they hear.</li>
                                                            <li>3. Don't give up hope if you don't get the reaction you expected. Remember everyone has the right to be who they are and are to be about all important aspects of your identity including their sexual orientation. </li>
                                                            <li>4. Find trusted allies/people/friends/family who can help, support, motivate you all the time.</li>
                                                            <li>5. Get help if you feel like and make use of resources available to you.</li>
                                                        </ul>

                                                    </p>
                                                    <div className="flex  justify-center items-center mt-0.5">
                                                        <Image src={img} width={800} height={1000} alt="fsdf" />
                                                    </div>
                                                </div>

                                                <div className=" justify-between items-center  border-12 margin">
                                                    <h3><p>Helplines, community groups and agencies
                                                    </p></h3>
                                                    <p>
                                                        <ul>
                                                            <li>1. Humsafar Trust : +011-46016699</li>
                                                            <li>2. Nazariya : +91-98181 51707</li>
                                                            <li>3. Naz foundation : +91 11 4132 5042</li>
                                                            <li>4. Find trusted allies/people/friends/family who can help, support, motivate you all the time.</li>
                                                        </ul>
                                                    </p>
                                                </div>

                                            </div>
                                        </section>
                                    </div>
                                )}
                                {activeTab === 'For allies' && (
                                    <div>
                                        <section className="bg-green-200 dark:bg-green-800 w-full md:h-full snap-start snap-always shrink-0 ">
                                            <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                                                <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                                                    For allies
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>An ally is an individual who speaks up and stands up for a person or group that is targeted and discriminated against. For the lesbian, gay, bisexual, transgender and queer (LGBTQ+) community, an ally is a person who supports and respects members of the LGBTQ+ community. Active allies take action in supporting equal civil rights, gender equality and stand up against discrimination. Anyone, regardless of their sexual orientation and/or gender identity, can support lesbian, gay, bisexual, and transgender (LGBT) people.
                                                        At an institute, all students are at risk of being bullied, harassed or called names at, but LGBTQ+ students face particularly hostile environments. Lack of an inclusive environment can seriously hamper growth of these students. Many of them may possess talent and potential that is hindered by the challenges they face in college. Your visible support for these students will have a significant impact on the students and the university as a whole.
                                                        Thus, allies help students feel safer and more included in the college, resulting in a more positive and successful college experience. </p>
                                                </div>
                                                <h3 className="text-4xl md:text-5xl mb-12 tracking-tight font-bold">Assessing your beliefs</h3>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>People aren’t born prejudiced, so where does it come from? From the moment we are born, we are inundated with messages, spoken and unspoken, about different types of people. Often we learn stereotypes and prejudices without even realizing it.</p>
                                                    <p>Try to remember:
                                                        <ul>
                                                            <li>1. When was the first time you can remember learning that some people are lesbian, gay, bisexual, transgender or queer?</li>
                                                            <li>2. Where did most of the influence of your initial impressions come from? (e.g., family, friends, television, books, news)?</li>
                                                            <li>3. Were these positive references or did they have negative connotations? </li>
                                                        </ul>
                                                        It is important to understand your own beliefs to become an ally. It makes you realize if you have internalized homophobia, biphobia or transphobia. It’s important to be aware of your stand and recognize & challenge your own biases.
                                                    </p>
                                                </div>
                                                <h3 className="text-4xl md:text-5xl mb-12 tracking-tight font-bold">How to respond to someone coming out</h3>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p className='my-5'>Simply put, coming out is a means to publicly declare one’s identity, whether to a person in private or a group of people. In our society, most people are generally presumed to be heterosexual and cisgender. That’s why a person who is LGBT must decide whether or not to reveal to others their sexual orientation or gender identity.</p>
                                                    <p className='my-5'>To come out is to take a risk by sharing one’s identity, sometimes to one person in conversation, sometimes to a group, or in a public setting. The actual act of coming out can be as simple as saying, “I’m gay/lesbian/bisexual/transgender,” but it can be a difficult and emotional process for an LGBT student to go through.</p>
                                                    <p className='my-5'>That is why it is important to respond appropriately when someone comes out to you-
                                                        <ul className='my-5'>
                                                            <li>1. Allow them to tell you at their own pace. Be patient. Let them determine what is needed. Allow them to talk to you about everything because chances are they have put a lot of thought into what they would say and you want to allow them to speak with small reassuring gestures and words. Let them know you are there to listen. </li>
                                                            <li>2. Coming out to someone is a big step because they’re being vulnerable with you. Choosing to tell you means that they have a great deal of respect and trust for you. So, make sure you let them know how proud you are. Help them know that they made the right decision in choosing to tell you. It need not be a big deal, especially if they’ve been out for a while, but it’s still kind to acknowledge them</li>
                                                            <li>3. The main fear for people coming out is that their friends and family will reject them. The person probably feels that coming out will change everything in their life, and this is frightening. They are still the same person you knew before the disclosure; you just have more information about them, which might improve your relationship. Be the friend you have always been. Do what you have always done together. If y’all loved going out to that cafe nearby, then continue that. </li>
                                                            <li>4. The person told you and may or may not be ready to tell others. Let them know that the conversation is confidential and that you won’t share the information with anyone else unless they ask you to. If they want others to know, doing it in their own way with their own timing is important. Keep their confidence and respect their privacy. Offer and be available to support them as they come out to others. </li>
                                                        </ul>
                                                        So just keep calm and keep being their friend. If there are questions you can’t answer, or if the person does need some emotional support, refer them to a professional queer-affirmative counselor, a hotline or your institute’s LGBT support group.
                                                    </p>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl mb-12 tracking-tight font-bold">For IITB, you can suggest the person talk to a counselor at SWC or contact us at SAATHI.</h3>
                                            </div>
                                        </section>
                                    </div>
                                )}
                                {activeTab === 'Mental Health' && (


                                    <div>
                                        <section className="bg-green-200 dark:bg-green-800 w-full md:h-full snap-start snap-always shrink-0 ">
                                            <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                                                <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">

                                                    Challenges with being LGBTQ+
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>Being LGBTQ+ brings a diversity of thought, perspective, understanding and experience. This complexity is important to understand as a unique and valuable aspect of the LGBTQ+ community that can result in a strong sense of pride and resiliency. While belonging to the LGBTQ+ community can be a source of strength, it also brings unique challenges.
                                                        For those who identify as LGBTQ+, it’s important to recognize how your experience of sexual orientation and gender identity relates to your mental health. It’s scary to realize that your life path may be different than those around you and face stigma for the bravery of living the way you need and want. While we’ve come far, we still have a long way to go before LGBTQ people can live lives of equal dignity, safety, and material security.
                                                        People from the community, particularly LGBTQ+ youth are more likely to face bullying and interpersonal violence. Their familial acceptance also isn’t a guarantee, which results in more stress and sometimes hostility from their loved ones. The journey can be heart-aching and may increase the likelihood of mental health issues.
                                                        But your LGBTQ identity is also a great strength. It can help you see the world in a different and special way, and can allow you to love amazing people. It makes you a member of a beautiful, welcoming community of people from across the world and across history who have dared to live according to their truth. Remember, whether it’s your high school friends eating lunch together in the library, or any organization, you’re never, ever alone.</p>
                                                </div>
                                                <h3 className="text-4xl md:text-5xl mb-12 tracking-tight font-bold">Get Help</h3>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>Some of the issues that we LGBTIQA+ people face include confusion while discovering our sexualities, gender identities or intersex conditions, ostracism from family and society, marriage pressures on those of us who are not inclined to marry partners of the other sex, low-self esteem, depression and suicidal tendencies. If you can relate to any of these problems, we strongly encourage you to contact us at SAATHI or other similar groups. Students at IITB can also consult in confidence with counselors at SWC.</p>
                                                    <p>If you are in need of immediate help, please contact the hotline <a href='http://www.suicide.org/hotlines/international/india-suicide-hotlines.html'> <span className='font-bold'>here</span> </a>.
                                                    </p>
                                                </div>

                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p className='my-5'>Please do contact the helplines or us at Saathi for any immediate support. If you are unsure about your issues, Mental Health 101: LGBTQIA+ edition would be a great help. It will be beneficial for anyone who is looking for a basic understanding of mental health in the LGBTQIA+ community, what emotional distress looks like, and how to seek help.
                                                    </p>
                                                    <p className='my-5'>
                                                        <a href='https://docs.google.com/spreadsheets/d/1pzckT6ns2H1IlmwYwJa8EnBh_1u3gRA9cEOoA4zfilc/'><span className='font-bold'>https://docs.google.com/spreadsheets/d/1pzckT6ns2H1IlmwYwJa8EnBh_1u3gRA9cEOoA4zfilc/     </span></a>
                                                        This is a list of mental health professionals throughout the country with information about their approach to people from the community. Though each entry in this list is unverified it is more comprehensive and might be a valuable aid in your search for a compatible professional.</p>

                                                </div>
                                                <h3 className="text-2xl md:text-3xl mb-12 tracking-tight font-bold">Once again do not hesitate to ask for help. You can contact a professional outside or at SWC or us if you are unsure. Keep in mind that you are not alone!!.</h3>
                                            </div>
                                        </section>
                                    </div>
                                )}

                            </div>
                        </div>
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