
type Props = {
  imageUrl: string
  children: React.ReactNode
}

export default function ImageCard({ imageUrl, children }: Props) {
  return (
    <figure className="md:w-[40%] w-[90%] overflow-hidden rounded-base hover:border-r-8 hover:border-b-8 border-black dark:border-white bg-main font-base  ">
      <img className="w-full" src={imageUrl} alt="image" />
      <figcaption className="text-text  p-4">
        {children}
      </figcaption>
    </figure>
  )
}