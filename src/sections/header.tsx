import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Saathilogo  from '@/assets/saathi.png'

export default function Header() {
  return (
    <header className="dark:bg-darkBg inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        
        <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
          <Image src={Saathilogo} width={5000} height={5000} alt='sfcfsdf'></Image>
        </h1>
        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">

          Saathi is IIT Bombay&349;s LGBTQ+ resource group. It was founded in 2011 to raise awareness on issues relating to the LGBTQ+ community and advocate for an inclusive campus experience for all. We are the oldest queer body in the IITs and one of the oldest across India :)
        </p>
        <Button
          size="lg"
          className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
        >
          More About Us
        </Button>
      </div>
    </header>
  )
}
