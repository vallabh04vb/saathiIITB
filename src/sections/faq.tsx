import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import i1 from '../assets/flags/1.webp'
import i2 from '../assets/flags/2.webp'
import i3 from '../assets/flags/3.webp'
import i4 from '../assets/flags/4.webp'
import i5 from '../assets/flags/5.webp'
import i6 from '../assets/flags/6.webp'
import i7 from '../assets/flags/7.webp'
import i8 from '../assets/flags/8.webp'
import i9 from '../assets/flags/9.webp'
import i10 from '../assets/flags/10.webp'
import i11 from '../assets/flags/11.webp'
import i12 from '../assets/flags/12.webp'
import i13 from '../assets/flags/13.webp'
import i14 from '../assets/flags/14.webp'
import i15 from '../assets/flags/15.webp'
import i16 from '../assets/flags/16.webp'
import i17 from '../assets/flags/17.webp'

const flags = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17]

const Star3 = () => {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 434 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M433.6 217.001L430.6 216.401C382.2 206.801 321.9 201.101 259.5 199.401C303.3 153.001 342.6 105.401 370.1 63.8008C328.5 91.3008 280.9 130.601 234.5 174.401C232.7 110.601 226.8 49.2008 216.9 0.300781C207 49.2008 201.1 110.601 199.3 174.401C152.9 130.601 105.3 91.3008 63.7002 63.8008C91.2002 105.401 130.5 153.001 174.3 199.401C110.5 201.201 49.1002 207.101 0.200195 217.001C49.1002 226.901 110.5 232.801 174.3 234.601C131.4 280.001 92.8002 326.601 65.4002 367.601L63.7002 370.201L66.3002 368.501C107.3 341.001 153.9 302.401 199.3 259.601C201.1 322.001 206.7 382.201 216.3 430.701L216.9 433.701L217.5 430.701C227.1 382.301 232.8 322.001 234.5 259.601C279.9 302.501 326.5 341.101 367.5 368.501L370.1 370.201L368.4 367.601C340.9 326.601 302.3 280.001 259.5 234.601C321.9 232.801 382.1 227.201 430.6 217.601L433.6 217.001Z"
        className="fill-text dark:fill-darkText"
      />
    </svg>
  )
}

export default function Faq() {
  return (
    <div>
      <section className="  bg-faq py-20 font-base lg:py-[100px] ">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-6xl lg:mb-20 lg:text-4xl">
          <span className='text-[black] bg-white'>Frequently asked questions</span>
        </h2>



        <div className="mx-auto grid w-[700px] max-w-full px-5">
          <Accordion className="text-base sm:text-lg" type="single" collapsible>
            <AccordionItem className="mb-2" value="item-1">
              <AccordionTrigger>Lorem ipsum dolor sit amet</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium suscipit sed nihil fuga sapiente facere dolore
                corrupti labore illum reiciendis?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-2">
              <AccordionTrigger>Lorem ipsum dolor sit amet</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium suscipit sed nihil fuga sapiente facere dolore
                corrupti labore illum reiciendis?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="mb-2" value="item-3">
              <AccordionTrigger>Lorem ipsum dolor sit amet</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium suscipit sed nihil fuga sapiente facere dolore
                corrupti labore illum reiciendis?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Lorem ipsum dolor sit amet</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium suscipit sed nihil fuga sapiente facere dolore
                corrupti labore illum reiciendis?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>




      <div>
        <Marquee
          className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-darkBg border-y-2 bg-white py-3 font-base sm:py-5"
          direction="right"
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
    </div>
  )
}
