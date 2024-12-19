import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/subheading";
import Image from "next/image";

export default function StartChallenge() {
  return (
    <div className="mb-20 md:mt-72 sm:mt-40 mt-10 sm:grid grid-cols-2 bg-numbersGradient md:p-20 sm:p-10 max-sm:px-6 max-sm:pt-10 relative flex flex-col-reverse">
      <Image
        src={"/images/challenge/mobile.webp"}
        alt={"mobile"}
        width={513}
        height={617}
        className="sm:absolute bottom-0 sm:left-1/4 sm:-translate-x-1/2 md:w-[513px] sm:w-[450px] w-[300px] max-sm:mx-auto"
      />
      <div></div>
      <div>
        <div className="flex flex-col md:gap-5 gap-3 sm:ml-10">
          <Heading>
            Invest in your Future, Today,
            <br /> Start your Challenge Now!
          </Heading>
          <SubHeading className="max-w-md">
            Your journey to financial freedom starts with action. Invest in
            yourself today, take the challenge, and unlock the tools to achieve
            trading success!
          </SubHeading>

          <Button variant={"white"} className="w-fit">
            Start your Challenge
          </Button>
        </div>
      </div>
    </div>
  );
}
