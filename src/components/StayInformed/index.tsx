import Image from "next/image";
import { Button } from "../ui/button";
import Heading from "../ui/heading";

export default function StayInformed() {
  return (
    <div className="mb-20 md:mt-72 sm:mt-60 mt-10 sm:grid grid-cols-2 bg-numbersGradient md:py-32 sm:py-28 md:p-20 sm:p-10 max-sm:px-6 max-sm:pt-10 relative flex flex-col-reverse">
      <Image
        src={"/images/challenge/mobile.webp"}
        alt={"mobile"}
        width={513}
        height={617}
        className="sm:absolute bottom-0 sm:left-1/4 sm:-translate-x-1/2 md:w-[513px] sm:w-[450px] w-[300px] max-sm:mx-auto"
      />
      <div></div>
      <div>
        <div className="flex flex-col gap-5 sm:ml-10">
          <Heading>
            Stay Informed & <br />
            Never Miss an Levels Update!
          </Heading>

          <div className="flex sm:flex-row flex-col items-center sm:gap-5 gap-3">
            <input
              placeholder="Your Email Address"
              className="h-10 bg-transparent border border-white max-w-xs w-full placeholder-white px-2"
            />
            <Button variant={"white"} className="w-fit rounded-none">
              <span className="bg-numbersGradient bg-clip-text text-transparent">
                Subscribe
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
