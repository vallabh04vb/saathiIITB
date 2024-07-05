
import Image from "next/image";
import Link from "next/link";

type CardType = {
  thumbnail: string;
  date?: string;
  title?: string;
  description?: string;
  callToActionText?: string;
  calllToActionLink: string;
};

const Card = ({
  thumbnail,
  title,
  description,
  callToActionText,
}: CardType) => {
  return (
    <Link href={'/identity/detailed'}>
    <div className="w-full max-w-2xl h-full md:h-[200px] 2xl:h-[400px] border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_rgba(256,256,256,1)] bg-white dark:bg-fuchsia-200" >
      <article className="w-full h-full">
        <figure className="w-full border-black border-b-2">
          <Image
            src={thumbnail}
            alt="thumbnail"
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="px-6 py-5 text-left h-full">
          {title && (
            <h1 className="text-[32px] leading-8 font-bold mb-4"><span className="text-[black]">{title}</span></h1>
          )}
          {description && (
            <p className="text-xs mb-4 line-clamp-2 lg:line-clamp-4">
              <span className="text-[black]">{description}</span>
            </p>
          )}
          {<strong><span className="text-[black]">{callToActionText}</span></strong>}

        </div>
      </article>
    </div>
    </Link>
    
  );
};

export default Card;
