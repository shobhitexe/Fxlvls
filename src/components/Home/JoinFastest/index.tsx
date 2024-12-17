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
    <div className="my-20 grid grid-cols-2 items-center w-[90%] mx-auto">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
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

        <div className="flex items-center gap-5">
          {points.map((item) => (
            <div key={item.title}>
              <div className="bg-joinTextGradient bg-clip-text text-transparent text-4xl font-semibold">
                {item.title}
              </div>
              <div className="text-xl">{item.sub}</div>
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
