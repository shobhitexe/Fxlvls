import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Image from "next/image";

const list = [
  {
    topic: "Trade Real Markets:",
    desc: "No simulations—experience true market conditions.",
  },
  {
    topic: "Aligned Interests:",
    desc: "Your success fuels our shared growth.",
  },
  {
    topic: "Proven Expertise:",
    desc: "Brokerage-backed risk management and live execution.",
  },
];

export default function GuaranteedPayouts() {
  return (
    <div className="my-20 bg-guaranteedPayouts sm:py-20 py-10 mx-auto">
      <div className="flex sm:flex-row flex-col items-center justify-center gap-10 w-[80%] mx-auto">
        <div className="flex flex-col gap-5 basis-1/2">
          <Heading>Guaranteed Payouts</Heading>
          <p className="sm:text-base text-sm">
            <span className="font-bold">
              Are you tired of simulated trading environments designed for you
              to fail?
            </span>{" "}
            Discover how Levels Funding aligns its success with yours by
            offering real trading in live markets, backed by a proven brokerage
            model.
            <br />
            <br />
            Watch the video to see how we redefine prop trading with fairness,
            expertise, and shared success.
          </p>
          <div className="flex flex-col gap-1">
            {list.map((item) => (
              <div key={item.topic} className="flex items-center gap-2">
                <Image
                  src={"/images/payouts/check.svg"}
                  alt={item.topic}
                  width={20}
                  height={20}
                />
                <div>
                  <span className="font-bold">{item.topic}</span> {item.desc}
                </div>
              </div>
            ))}
          </div>

          <Button variant={"white"} className="w-fit">
            Start Trading
          </Button>
        </div>

        <div className="basis-1/2">
          {" "}
          <Image
            src={"/images/payouts/bg.png"}
            alt={"bg"}
            width={480}
            height={300}
            className="ml-auto bg-[#B459DD] p-3 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
