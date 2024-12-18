import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/subheading";
import Image from "next/image";

const points = [
  { title: "1,300,000+", sub: "Total Payouts" },
  { title: "5000+", sub: "Funded Traders" },
  { title: "6 Hours", sub: "Avg. Payout Time" },
];

export default function JoinFastest() {
  return (
    <div className="sm:my-28 my-14 grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-5 items-center sm:w-[80%] w-[85%] mx-auto">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:gap-5 gap-2">
          <Heading>
            Join the Fastest
            <br />
            Growing Prop Firm
          </Heading>
          <SubHeading className="max-w-md">
            All payouts can be requested through Rise which allows to use up to
            15 payment methods
          </SubHeading>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          {points.map((item) => (
            <div key={item.title}>
              <div className="bg-joinTextGradient bg-clip-text text-transparent md:text-4xl sm:text-3xl text-2xl font-semibold whitespace-nowrap">
                {item.title}
              </div>
              <div className="md:text-xl sm:text-lg text-base whitespace-nowrap">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={"/images/join/map.png"}
        alt={"map"}
        width={669}
        height={375}
        className="mx-auto"
      />
    </div>
  );
}
