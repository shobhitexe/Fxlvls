import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/subheading";
import Image from "next/image";

export default function StartChallenge() {
  return (
    <div className="mb-20 mt-72 grid grid-cols-2 bg-numbersGradient p-20 relative">
      <Image
        src={"/images/challenge/mobile.webp"}
        alt={"mobile"}
        width={513}
        height={617}
        className="absolute -top-[199px] left-1/4 -translate-x-1/2"
      />
      <div></div>
      <div>
        <div className="flex flex-col gap-5">
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
