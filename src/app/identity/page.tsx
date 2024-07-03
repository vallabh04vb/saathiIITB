import { Button } from "@/components/ui/button"
import Card from "@/components/card"
import Marquee from "react-fast-marquee"
import Image from "next/image"

import i1 from '../../assets/flags/1.webp'
import i2 from '../../assets/flags/2.webp'
import i3 from '../../assets/flags/3.webp'
import i4 from '../../assets/flags/4.webp'
import i5 from '../../assets/flags/5.webp'
import i6 from '../../assets/flags/6.webp'
import i7 from '../../assets/flags/7.webp'
import i8 from '../../assets/flags/8.webp'
import i9 from '../../assets/flags/9.webp'
import i10 from '../../assets/flags/10.webp'
import i11 from '../../assets/flags/11.webp'
import i12 from '../../assets/flags/12.webp'
import i13 from '../../assets/flags/13.webp'
import i14 from '../../assets/flags/14.webp'
import i15 from '../../assets/flags/15.webp'
import i16 from '../../assets/flags/16.webp'
import i17 from '../../assets/flags/17.webp'

const flags = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17]




let date = "June 15th, 2023"
let title = "Want to browse the components?"
let description = "Let's take a look at what components are available. You can quickly integrate them into your project with copy and paste."
let callToActionText = "Go to Components Page"



let Cards = [
  {
    img:'/assets/flags/1.webp',
    title:"Being Gay",
    description:"It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
  },
  {
    img:'/assets/flags/2.webp',
    title:"Being Lesbian",
    description:"A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
  },
  {
    img:'/assets/flags/3.webp',
    title:"Being Bisexual",
    description:"Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

  },
  {
    img:'/assets/flags/4.webp',
    title:"Being Gay",
    description:"It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
  },
  {
    img:'/assets/flags/5.webp',
    title:"Being Lesbian",
    description:"A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
  },
  {
    img:'/assets/flags/6.webp',
    title:"Being Bisexual",
    description:"Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

  },
  {
    img:'/assets/flags/7.webp',
    title:"Being Gay",
    description:"It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
  },
  {
    img:'/assets/flags/8.webp',
    title:"Being Lesbian",
    description:"A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
  },
  {
    img:'/assets/flags/9.webp',
    title:"Being Bisexual",
    description:"Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

  },
  {
    img:'/assets/flags/10.webp',
    title:"Being Gay",
    description:"It refers to a person primarily emotionally, physically, and/or sexually attracted to members of the same sex/gender. It also refers to a person's sense of identity based on those attractions, related behaviors, and membership in a community of others who share those attractions."
  },
  {
    img:'/assets/flags/11.webp',
    title:"Being Lesbian",
    description:"A woman whose enduring physical, romantic, and/or emotional attraction is to other women. Some lesbians may prefer to identify as gay (adj.) or as gay women. ",
  },
  {
    img:'/assets/flags/12.webp',
    title:"Being Bisexual",
    description:"Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

  },
  {
    img:'/assets/flags/13.webp',
    title:"Being Bisexual",
    description:"Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

  },

  {
    img:'/assets/flags/14.webp',
    title:"Being Bisexual",
    description:"Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

  },

  {
    img:'/assets/flags/15.webp',
    title:"Being Bisexual",
    description:"Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

  },
  {
    img:'/assets/flags/16.webp',
    title:"Being Bisexual",
    description:"Someone having the capacity to be emotionally, physically, and/or sexually attracted to some people of one’s gender and another gender. This attraction does not have to be equally split or indicate a level of interest that is the same across the genders an individual may be attracted to",

  },
]





export default function Identity() {
  return (
    <>
      <section className="bg-teal-200 w-full h-[calc(100vh-80px)] min-h-screen snap-start snap-always shrink-0">
        <div className="w-full h-full bg-pink-200 relative bg-cover bg-no-repeat bg-center bg-scroll bg-mobile md:bg-desktop">
          <div className="px-5 md:px-40 flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12">
            <div className="mt-32 md:mt-10">
              <h1 className="text-5xl md:text-6xl font-black md:pt-14 tracking-tight hero-font mb-5">
                Identity Resources
              </h1>
              <p className="text-2xl md:text-1xl hero-font">
                These resources introduce common terms for various sexual orientations. They are not exhaustive in terms or explanations. Labels aim to help people express their feelings, not to categorize them. We hope this serves as a helpful starting point for understanding different sexual orientations and supporting the LGBTQ+ community.
              </p>
            </div>
            <Button >Common Terms</Button>
          </div>
        </div>
      </section>

      <section className="bg-purple-200 w-full md:h-full snap-start snap-always shrink-0 ">
        <div className="px-5 md:px-24 h-full py-20 2xl:p-32 ">
          <h2 className="text-6xl md:text-7xl mb-12 tracking-tight font-bold">
            Identities
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center   md:mb-6">
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[0].img}
                title={Cards[0].title}
                description={Cards[0].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[1].img}
                title={Cards[1].title}
                description={Cards[1].description}
                callToActionText="Know More"
                calllToActionLink="components/card"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[2].img}
                title={Cards[2].title}
                description={Cards[2].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[3].img}
                title={Cards[1].title}
                description={Cards[1].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center  md:mb-6">
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[4].img}
                title={Cards[0].title}
                description={Cards[0].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[5].img}
                title={Cards[1].title}
                description={Cards[1].description}
                callToActionText="Know More"
                calllToActionLink="components/card"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[6].img}
                title={Cards[2].title}
                description={Cards[2].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[7].img}
                title={Cards[1].title}
                description={Cards[1].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center  md:mb-6">
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[9].img}
                title={Cards[0].title}
                description={Cards[0].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[10].img}
                title={Cards[1].title}
                description={Cards[1].description}
                callToActionText="Know More"
                calllToActionLink="components/card"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[11].img}
                title={Cards[2].title}
                description={Cards[2].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[12].img}
                title={Cards[1].title}
                description={Cards[1].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center  md:mb-6">
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[13].img}
                title={Cards[0].title}
                description={Cards[0].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[14].img}
                title={Cards[1].title}
                description={Cards[1].description}
                callToActionText="Know More"
                calllToActionLink="components/card"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[15].img}
                title={Cards[2].title}
                description={Cards[2].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />
            </div>
            <div className="md:w-[20%] mb-12 md:mb-0">
              <Card
                thumbnail={Cards[8].img}
                title={Cards[1].title}
                description={Cards[1].description}
                callToActionText="Know More"
                calllToActionLink="/overview"
              />

            </div>
          </div>
        </div>


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
      </section>

    </>
  )
}
