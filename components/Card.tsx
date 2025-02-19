import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import TextRotate from "./animations/TextRotate";
import CardButtons from "./CardButtons";

const Card = () => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-primary-black flex-1 rounded-[32px] w-full sm:w-[500px] sm:h-screen mx-auto lg:h-[85vh]">
      <div className="flex flex-col w-full items-center">
        <div className="left-0 w-full flex justify-center">
          <Image
            className="w-full rounded-tr-[32px] rounded-tl-[32px]"
            src="/assets/images/avatar.jpeg"
            width={500}
            height={500}
            alt="photo"
          />
        </div>

        <div className="flex items-center justify-center mt-10 text-primary-green text-xl">
          <TextRotate
            text={[
              "Web Developer",
              "Front end Developer",
              "React.js Developer",
            ]}
          />
        </div>

        <h2 className="text-2xl sm:text-4xl mt-4 font-bold">Mohamed Elmougy</h2>

        <div className="flex mt-7 gap-7">
          {socialLinks.map((link) => (
            <Link href={link.url} key={link.label} target="_blank">
              <Image
                className="dark:invert"
                src={link.iconURL}
                width={20}
                height={20}
                alt={`${link.label} icon`}
              />
            </Link>
          ))}
        </div>

        <CardButtons />
      </div>
    </div>
  );
};
export default Card;
