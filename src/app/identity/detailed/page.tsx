"use client";

import { useState } from 'react'

import Tabs from '@/components/Tabs'
import img from '@/assets/gender-bread.webp'
import Image from 'next/image'
import Footer from '@/components/footer';


export default function Detailed() {


    const [activeTab, setActiveTab] = useState('Gay/Lesbian')
    const tabsArray = ['Gay/Lesbian', 'Bi/Pan', 'Trans', 'Ace/Aro', 'Non Binary', 'Intersex']



    return (

        <>
            <section className="bg-teal-400 dark:bg-teal-950 w-full md:h-full snap-start snap-always shrink-0 ">
                <div className="px-5 md:px-24 h-full py-20 2xl:p-32 ">
                    <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                        Identities in detail
                    </h2>
                    <div className="flex flex-col md:flex-row justify-between items-center  border-12 ">
                        <div className=" rounded-base w-full">
                            <Tabs
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                tabsArray={tabsArray}
                            />
                            <div className="max-w-full rounded-b-base border-2 border-border dark:border-darkBorder bg-white dark:bg-darkBg p-5 font-base">
                                {activeTab === 'Gay/Lesbian' && (
                                    <div>
                                        <section className="bg-purple-200 dark:bg-fuchsia-800 w-full md:h-full snap-start snap-always shrink-0 ">
                                            <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                                                <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                                                    Basics Of Gender And Sexuality
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>The following are a starting point to understand Gender and Sexuality. It might be more complicated as you study more about it but the basics are simple enough.</p>
                                                    <p><b className='md:text-2xl'>Sex:</b> The classification of a person as male or female. At birth, infants are assigned a sex, usually based on the appearance of their external anatomy. \(This is what is written on the birth certificate.) A person&#39;s sex, however, is actually a combination of bodily characteristics including: chromosomes, hormones, internal and external reproductive organs, and secondary sex characteristics.</p>
                                                    <p><b className='md:text-2xl'>Gender Identity:</b> A person&#39;s internal, deeply held sense of their gender. For transgender people, their own internal gender identity does not match the sex they were assigned at birth. Most people have a gender identity of man or woman (or boy or girl). For some people, their gender identity does not fit neatly into one of those two choices (see non-binary and/or genderqueer below.) Unlike gender expression (see below) gender identity is not visible to others.</p>
                                                    <p><b className='md:text-2xl'>Gender Expression:</b> External manifestations of gender, expressed through a person&#39;s name, pronouns, clothing, haircut, behavior, voice, and/or body characteristics. Society identifies these cues as masculine and feminine, although what is considered masculine or feminine changes over time and varies by culture. Typically, transgender people seek to align their gender expression with their gender identity, rather than the sex they were assigned at birth.</p>
                                                    <p><b className='md:text-2xl'>Sexual Orientation:</b> The scientifically accurate term for an individual&#39;s enduring physical, romantic and/or emotional attraction to members of the same and/or opposite sex, including lesbian, gay, bisexual and heterosexual (straight) orientations.</p>
                                                </div>
                                                <div className="flex  justify-center items-center mt-0.5">
                                                    <Image src={img} width={800} height={1000} alt="fsdf" />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )}
                                {activeTab === 'Bi/Pan' && (
                                    <div>

                                        <section className="bg-indigo-200 dark:bg-indigo-800 w-full md:h-full snap-start snap-always shrink-0 ">
                                            <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                                                <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                                                    Basics Of Gender And Sexuality
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>The following are a starting point to understand Gender and Sexuality. It might be more complicated as you study more about it but the basics are simple enough.</p>
                                                    <p><b className='md:text-2xl'>Sex:</b> The classification of a person as male or female. At birth, infants are assigned a sex, usually based on the appearance of their external anatomy. \(This is what is written on the birth certificate.) A person&#39;s sex, however, is actually a combination of bodily characteristics including: chromosomes, hormones, internal and external reproductive organs, and secondary sex characteristics.</p>
                                                    <p><b className='md:text-2xl'>Gender Identity:</b> A person&#39;s internal, deeply held sense of their gender. For transgender people, their own internal gender identity does not match the sex they were assigned at birth. Most people have a gender identity of man or woman (or boy or girl). For some people, their gender identity does not fit neatly into one of those two choices (see non-binary and/or genderqueer below.) Unlike gender expression (see below) gender identity is not visible to others.</p>
                                                    <p><b className='md:text-2xl'>Gender Expression:</b> External manifestations of gender, expressed through a person&#39;s name, pronouns, clothing, haircut, behavior, voice, and/or body characteristics. Society identifies these cues as masculine and feminine, although what is considered masculine or feminine changes over time and varies by culture. Typically, transgender people seek to align their gender expression with their gender identity, rather than the sex they were assigned at birth.</p>
                                                    <p><b className='md:text-2xl'>Sexual Orientation:</b> The scientifically accurate term for an individual&#39;s enduring physical, romantic and/or emotional attraction to members of the same and/or opposite sex, including lesbian, gay, bisexual and heterosexual (straight) orientations.</p>
                                                </div>
                                                <div className="flex  justify-center items-center mt-0.5">
                                                    <Image src={img} width={800} height={1000} alt="fsdf" />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )}
                                {activeTab === 'Trans' && (
                                    <div>


                                        <section className="bg-blue-200 dark:bg-blue-800 w-full md:h-full snap-start snap-always shrink-0 ">
                                            <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                                                <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                                                    Basics Of Gender And Sexuality
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>The following are a starting point to understand Gender and Sexuality. It might be more complicated as you study more about it but the basics are simple enough.</p>
                                                    <p><b className='md:text-2xl'>Sex:</b> The classification of a person as male or female. At birth, infants are assigned a sex, usually based on the appearance of their external anatomy. \(This is what is written on the birth certificate.) A person&#39;s sex, however, is actually a combination of bodily characteristics including: chromosomes, hormones, internal and external reproductive organs, and secondary sex characteristics.</p>
                                                    <p><b className='md:text-2xl'>Gender Identity:</b> A person&#39;s internal, deeply held sense of their gender. For transgender people, their own internal gender identity does not match the sex they were assigned at birth. Most people have a gender identity of man or woman (or boy or girl). For some people, their gender identity does not fit neatly into one of those two choices (see non-binary and/or genderqueer below.) Unlike gender expression (see below) gender identity is not visible to others.</p>
                                                    <p><b className='md:text-2xl'>Gender Expression:</b> External manifestations of gender, expressed through a person&#39;s name, pronouns, clothing, haircut, behavior, voice, and/or body characteristics. Society identifies these cues as masculine and feminine, although what is considered masculine or feminine changes over time and varies by culture. Typically, transgender people seek to align their gender expression with their gender identity, rather than the sex they were assigned at birth.</p>
                                                    <p><b className='md:text-2xl'>Sexual Orientation:</b> The scientifically accurate term for an individual&#39;s enduring physical, romantic and/or emotional attraction to members of the same and/or opposite sex, including lesbian, gay, bisexual and heterosexual (straight) orientations.</p>
                                                </div>
                                                <div className="flex  justify-center items-center mt-0.5">
                                                    <Image src={img} width={800} height={1000} alt="fsdf" />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )}
                                {activeTab === 'Ace/Aro' && (
                                    <div>


                                        <section className="bg-pink-200 dark:bg-pink-800 w-full md:h-full snap-start snap-always shrink-0 ">
                                            <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                                                <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                                                    Basics Of Gender And Sexuality
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>The following are a starting point to understand Gender and Sexuality. It might be more complicated as you study more about it but the basics are simple enough.</p>
                                                    <p><b className='md:text-2xl'>Sex:</b> The classification of a person as male or female. At birth, infants are assigned a sex, usually based on the appearance of their external anatomy. \(This is what is written on the birth certificate.) A person&#39;s sex, however, is actually a combination of bodily characteristics including: chromosomes, hormones, internal and external reproductive organs, and secondary sex characteristics.</p>
                                                    <p><b className='md:text-2xl'>Gender Identity:</b> A person&#39;s internal, deeply held sense of their gender. For transgender people, their own internal gender identity does not match the sex they were assigned at birth. Most people have a gender identity of man or woman (or boy or girl). For some people, their gender identity does not fit neatly into one of those two choices (see non-binary and/or genderqueer below.) Unlike gender expression (see below) gender identity is not visible to others.</p>
                                                    <p><b className='md:text-2xl'>Gender Expression:</b> External manifestations of gender, expressed through a person&#39;s name, pronouns, clothing, haircut, behavior, voice, and/or body characteristics. Society identifies these cues as masculine and feminine, although what is considered masculine or feminine changes over time and varies by culture. Typically, transgender people seek to align their gender expression with their gender identity, rather than the sex they were assigned at birth.</p>
                                                    <p><b className='md:text-2xl'>Sexual Orientation:</b> The scientifically accurate term for an individual&#39;s enduring physical, romantic and/or emotional attraction to members of the same and/or opposite sex, including lesbian, gay, bisexual and heterosexual (straight) orientations.</p>
                                                </div>
                                                <div className="flex  justify-center items-center mt-0.5">
                                                    <Image src={img} width={800} height={1000} alt="fsdf" />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )}
                                {activeTab === 'Non Binary' && (
                                    <div>


                                        <section className="bg-purple-200 dark:bg-fuchsia-800 w-full md:h-full snap-start snap-always shrink-0 ">
                                            <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                                                <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                                                    Basics Of Gender And Sexuality
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>The following are a starting point to understand Gender and Sexuality. It might be more complicated as you study more about it but the basics are simple enough.</p>
                                                    <p><b className='md:text-2xl'>Sex:</b> The classification of a person as male or female. At birth, infants are assigned a sex, usually based on the appearance of their external anatomy. \(This is what is written on the birth certificate.) A person&#39;s sex, however, is actually a combination of bodily characteristics including: chromosomes, hormones, internal and external reproductive organs, and secondary sex characteristics.</p>
                                                    <p><b className='md:text-2xl'>Gender Identity:</b> A person&#39;s internal, deeply held sense of their gender. For transgender people, their own internal gender identity does not match the sex they were assigned at birth. Most people have a gender identity of man or woman (or boy or girl). For some people, their gender identity does not fit neatly into one of those two choices (see non-binary and/or genderqueer below.) Unlike gender expression (see below) gender identity is not visible to others.</p>
                                                    <p><b className='md:text-2xl'>Gender Expression:</b> External manifestations of gender, expressed through a person&#39;s name, pronouns, clothing, haircut, behavior, voice, and/or body characteristics. Society identifies these cues as masculine and feminine, although what is considered masculine or feminine changes over time and varies by culture. Typically, transgender people seek to align their gender expression with their gender identity, rather than the sex they were assigned at birth.</p>
                                                    <p><b className='md:text-2xl'>Sexual Orientation:</b> The scientifically accurate term for an individual&#39;s enduring physical, romantic and/or emotional attraction to members of the same and/or opposite sex, including lesbian, gay, bisexual and heterosexual (straight) orientations.</p>
                                                </div>
                                                <div className="flex  justify-center items-center mt-0.5">
                                                    <Image src={img} width={800} height={1000} alt="fsdf" />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )}
                                {activeTab === 'Intersex' && (
                                    <div>


                                        <section className="bg-pink-200 dark:bg-pink-800 w-full md:h-full snap-start snap-always shrink-0 ">
                                            <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                                                <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                                                    Basics Of Gender And Sexuality
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>The following are a starting point to understand Gender and Sexuality. It might be more complicated as you study more about it but the basics are simple enough.</p>
                                                    <p><b className='md:text-2xl'>Sex:</b> The classification of a person as male or female. At birth, infants are assigned a sex, usually based on the appearance of their external anatomy. \(This is what is written on the birth certificate.) A person&#39;s sex, however, is actually a combination of bodily characteristics including: chromosomes, hormones, internal and external reproductive organs, and secondary sex characteristics.</p>
                                                    <p><b className='md:text-2xl'>Gender Identity:</b> A person&#39;s internal, deeply held sense of their gender. For transgender people, their own internal gender identity does not match the sex they were assigned at birth. Most people have a gender identity of man or woman (or boy or girl). For some people, their gender identity does not fit neatly into one of those two choices (see non-binary and/or genderqueer below.) Unlike gender expression (see below) gender identity is not visible to others.</p>
                                                    <p><b className='md:text-2xl'>Gender Expression:</b> External manifestations of gender, expressed through a person&#39;s name, pronouns, clothing, haircut, behavior, voice, and/or body characteristics. Society identifies these cues as masculine and feminine, although what is considered masculine or feminine changes over time and varies by culture. Typically, transgender people seek to align their gender expression with their gender identity, rather than the sex they were assigned at birth.</p>
                                                    <p><b className='md:text-2xl'>Sexual Orientation:</b> The scientifically accurate term for an individual&#39;s enduring physical, romantic and/or emotional attraction to members of the same and/or opposite sex, including lesbian, gay, bisexual and heterosexual (straight) orientations.</p>
                                                </div>
                                                <div className="flex  justify-center items-center mt-0.5">
                                                    <Image src={img} width={800} height={1000} alt="fsdf" />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-purple-400 dark:bg-purple-900 w-full md:h-full snap-start snap-always shrink-0 ">
                <div className="px-5 md:px-24 h-full py-20 2xl:p-32 space-y-9">
                    <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
                        Basics Of Gender And Sexuality
                    </h2>
                    <div className=" justify-between items-center  border-12 margin">
                        <p>The following are a starting point to understand Gender and Sexuality. It might be more complicated as you study more about it but the basics are simple enough.</p>
                        <p><b className='md:text-2xl'>Sex:</b> The classification of a person as male or female. At birth, infants are assigned a sex, usually based on the appearance of their external anatomy. \(This is what is written on the birth certificate.) A person&#39;s sex, however, is actually a combination of bodily characteristics including: chromosomes, hormones, internal and external reproductive organs, and secondary sex characteristics.</p>
                        <p><b className='md:text-2xl'>Gender Identity:</b> A person&#39;s internal, deeply held sense of their gender. For transgender people, their own internal gender identity does not match the sex they were assigned at birth. Most people have a gender identity of man or woman (or boy or girl). For some people, their gender identity does not fit neatly into one of those two choices (see non-binary and/or genderqueer below.) Unlike gender expression (see below) gender identity is not visible to others.</p>
                        <p><b className='md:text-2xl'>Gender Expression:</b> External manifestations of gender, expressed through a person&#39;s name, pronouns, clothing, haircut, behavior, voice, and/or body characteristics. Society identifies these cues as masculine and feminine, although what is considered masculine or feminine changes over time and varies by culture. Typically, transgender people seek to align their gender expression with their gender identity, rather than the sex they were assigned at birth.</p>
                        <p><b className='md:text-2xl'>Sexual Orientation:</b> The scientifically accurate term for an individual&#39;s enduring physical, romantic and/or emotional attraction to members of the same and/or opposite sex, including lesbian, gay, bisexual and heterosexual (straight) orientations.</p>
                    </div>
                    <div className="flex  justify-center items-center mt-0.5">
                        <Image src={img} width={800} height={1000} alt="fsdf" />
                    </div>
                </div>
            </section>
            <Footer></Footer>

        </>


    )
}