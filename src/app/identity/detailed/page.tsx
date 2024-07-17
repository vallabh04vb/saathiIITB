"use client";

import { useState } from 'react'

import Tabs from '@/components/Tabs'
import img from '@/assets/gender-bread.webp'
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
                                                    Being Gay/Lesbian
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>
                                                        Being Gay/Lesbian
                                                        It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It "also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."</p>
                                                    <p><b className='md:text-2xl'>Gay:</b> The adjective used to describe people whose enduring physical, romantic, and/ or emotional attractions are to people of the same sex (e.g., gay man, gay people). </p>
                                                    <p><b className='md:text-2xl'>Lesbian:</b>  A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. </p>
                                                    <p><b className='md:text-2xl'>Homophobia:</b> noun : an umbrella term for a range of negative attitudes (e.g., fear, anger, intolerance, resentment, erasure, or discomfort) that one may have towards members of LGBTQ community. The term can also connote a fear, disgust, or dislike of being perceived as LGBTQ. Homophobic – adj. : a word used to describe an individual who harbors some elements of this range of negative attitudes towards gay people.</p>
                                                    <p>May be experienced inwardly by someone who identifes as queer (internalized homophobia).</p>
                                                    <p>Avoid identifying gay people as "homosexuals" - an outdated term considered derogatory and offensive to many lesbian and gay people. The term - “homosexual” is considered stigmatizing (particularly as a noun) due to its history as a category of mental illness, and is discouraged for common use (use gay or lesbian instead). Until 1973 “Homosexuality” was classifed as a mental disorder in the DSM Diagnostic and Statistical Manual of Mental Disorders. This is just one of the reasons that there are such heavy negative and clinical connotations with this term. </p>
                                                    <p>Adapted from A Guide to Gender (2nd Edition): The Social Justice Advocate's Handbook and GLAAD Media Reference Guide, 10th edition.</p>
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
                                                    Baeing Bi/Pan
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>
                                                        Being Bi/Pan
                                                        Individuals having the capacity to be emotionally, physically, and/or sexually attracted to more than one gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to..</p>
                                                    <p>Bisexuality can be defined to an individual having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to. Pansexuality is the attraction to people regardless of their gender. Pansexual people are sexually attracted to people of every gender identity. People of any gender identity can and do identify as pansexual. Some people use the terms “bisexual” and “pansexual” interchangeably, but there are distinctions between the two.
                                                        The distinction between the labels is a matter of personal choice, you can choose whatever you think describes you best. You might also find yourself sexually attracted to one gender and romantically attracted to another gender. This is called “mixed orientation” or “cross orientation.”
                                                        For example, you could be bisexual but homoromantic — meaning you’re sexually attracted to people of multiple genders, but you’re only romantically attracted to people who are the same gender as you.
                                                        Some people assume that attraction to more genders implies that pansexual or bisexual people act on their attraction more frequently than others. This can lead to the stereotype that they are promiscuous. However, just as with heterosexuality or homosexuality, they are all individuals. Any given pansexual or bisexual person will have their own preference for the amount of sexual activity they want, and they may also prefer to remain celibate.
                                                        Furthermore, these same stereotypes of promiscuity cause some people to accuse pansexual/bisexual people of being less likely to remain monogamous. This is untrue -- they are just as likely to prefer monogamy as hetero- or homosexual people. Pansexuality is not the same thing as polyamory. The attraction to all genders is not connected to a preference for multiple partners.</p>
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
                                                    Being Trans
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>
                                                        Being Trans
                                                        It’s an umbrella term that incorporates differences in gender identity wherein one’s assigned biological sex doesn’t match their felt identity. This umbrella term includes persons who do not feel they fit into a dichotomous sex structure through which they are identified as male or female. Being transgender does not imply any specific sexual orientation. Therefore, transgender people may identify as straight, gay, lesbian, bisexual, etc.</p>
                                                    <p>Some people may want to change their gender expression or biological sex according to their gender identity. This is known as transitioning. Transitioning is the time period during which a person begins to live according to their gender identity, rather than the gender they were thought to be at birth.
                                                        Gender transition looks different for every person. Possible steps in a gender transition may or may not include changing your clothing, appearance, name, or the pronoun people use to refer to you (like “she,” “he,” or “they”). Some people are able to change their identification documents, like their driver’s license or passport, to reflect their gender. And some people undergo hormone therapy or other medical procedures to change their physical characteristics and make their body better reflect the gender they know themselves to be.
                                                        Transitioning can help many transgender people lead healthy, fulfilling lives. No specific set of steps is necessary to “complete” a transition—it’s a matter of what is right for each person. All transgender people are entitled to the same dignity and respect, regardless of which legal or medical steps they have taken.
                                                        For some transgender people, the difference between the gender they are thought to be at birth and the gender they know themselves to be can lead to serious emotional distress that affects their health and everyday lives if not addressed. Gender dysphoria is the medical diagnosis for someone who experiences this distress.
                                                        Not all transgender people have gender dysphoria. On its own, being transgender is not considered a medical condition. Many transgender people do not experience serious anxiety or stress associated with the difference between their gender identity and their gender of birth, and so may not have gender dysphoria.
                                                        Gender dysphoria can often be relieved by expressing one’s gender in a way that the person is comfortable with. That can include dressing and grooming in a way that reflects who one knows they are, using a different name or pronoun, and, for some, taking medical steps to physically change their body.
                                                        Regardless of that, all transgender people should be treated with the same dignity and respect as anyone else and be able to live, and be respected, according to their gender identity. </p>
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
                                                    Being Asexual/Aromantic
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>Experiencing little or no sexual attraction to others and/or a lack of interest in sexual relationships/behavior. Asexuality exists on a continuum from people who experience no sexual

                                                        attraction nor have any desire for sex, to those who experience low levels, or sexual attraction only under specifc conditions; and many of these diferent places on the continuum have their own identity labels (see demisexual). Sometimes abbreviated to “ace.”



                                                        Experiencing little or no romantic attraction to others and/or has a lack of interest in romantic relationships/behavior. Aromanticism exists on a continuum from people who experience no romantic attraction nor have any desire for romantic activities, to those who experience low levels, or romantic attraction only under specific conditions; and many of these diferent places on the continuum have their own identity labels (see demiromantic). Sometimes abbreviated to “aro” (pronounced like“arrow”).</p>
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
                                                    Being Non-Binary
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>
                                                        Being Non-Binary
                                                        Nonbinary gender identity is just one term used to describe individuals who may experience a gender identity that is neither exclusively woman or man or is in between or beyond both genders.1﻿ Nonbinary individuals may identify as genderfluid, agender (without gender), genderqueer, or something else entirely.</p>
                                                    <p>A simple way to think about non-binary gender is with a scale that goes from man-to-woman, where folks could plot how they identify somewhere along the line. Perhaps close to the “man” end if they strongly identify as “man,” close to the “woman” end if they strongly identify as “woman,” or somewhere in-between if they identify as genderqueer, bigender, or another one of the non-binary gender identity labels we have.
                                                        The problem with this depiction of gender is that it implies that the more “man” someone is, the less “woman” they are. Our gut reaction is that this is accurate, but when you dissect gender into its component parts, you’ll see this isn’t necessarily true. Gender is best understood when broken up into three parts: gender identity, gender expression, and biological sex.
                                                        Gender identity can be thought of as one's innermost concept of self as male, female, a blend of both or neither – how individuals perceive themselves and what they call themselves. One's gender identity can be the same or different from their sex assigned at birth. Some folks identify with neither “man-ness” or “woman-ness,” but a third gender altogether. Some folks identify with aspects of both, and might use the label “genderqueer” to describe their identity.
                                                        Gender expression can be thought of as the aspects of masculinity and femininity you display in your clothing, grooming, speech, actions, demeanor, and more. As examples, masculine dress might be considered baggy, unprimed, or functional. Feminine dress is form-fitting, colorful, and frivolous. The term “androgynous” is used to describe gender expression that is both masculine and feminine.
                                                        Biological sex can be thought of as the aspects of “male-ness” or “female-ness” you embody in your physical self. Some folks are predominantly male or female, while others are intersex. There are multiple reasons and ways that our bodies look the way they do or are the way they are. </p>
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
                                                    Being Intersex
                                                </h2>
                                                <div className=" justify-between items-center  border-12 margin">
                                                    <p>
                                                        Being Intersex
                                                        It refers to the term for a combination of chromosomes, gonads,hormones, internal sex organs, and genitals that difers from the two expected patterns of male or female. Formerly known as hermaphrodite (or hermaphroditic), but these terms are now outdated and derogatory.</p>
                                                    <p>Intersex differences in and of themselves (for example, differences in genital appearance) are perfectly healthy and natural. Most people with intersex bodies are completely healthy. In some cases, being intersex may lead to health issues. But the actual risk level varies by medical diagnosis, and interesex people in general are healthy. Intersex traits are natural human variations, not disorders. The intersex movement wants this understanding. This is similar to the way that LGB and T people have fought against being seen as mentally “disordered.” While intersex traits are nothing to be ashamed of, there are sometimes other accompanying issues to keep in mind.
                                                        Intersex is usually an adjective that describes a person’s body. Their gender is something else. For example, there are intersex men, intersex women, intersex nonbinary people, and others. For many people, intersex traits strongly affect their relationship to their gender.</p>

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