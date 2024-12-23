import Image from "next/image";
import { HorizontalTicker } from "./Ticker";

const payouts = [
  {
    img: "/images/payouts/certi.png",
    name: "Zanka, Canada",
    payout: "$8,273.75",
    info: { title: "180+", subtitle: "Countries" },
  },
  {
    img: "/images/payouts/certi.png",
    name: "Zanka, Canada",
    payout: "$4,659.58",
    info: { title: "$3.7M", subtitle: "Payouts" },
  },
  {
    img: "/images/payouts/certi.png",
    name: "Zanka, Canada",
    payout: "$8,273.75",
    info: { title: "180+", subtitle: "Countries" },
  },
  {
    img: "/images/payouts/certi.png",
    name: "Zanka, Canada",
    payout: "$4,659.58",
    info: { title: "$3.7M", subtitle: "Payouts" },
  },
];

export default function PayoutTicker() {
  return (
    <section className="bg-[#B653F4] flex items-center justify-center w-full sm:py-2 py-1">
      <HorizontalTicker duration={30000}>
        <div className="flex sm:items-center overflow-auto animate-tickesr items-start px-3 -rotate-[0.5deg]s bg-[#B653F4] bg-payoutTickerBg w-full py-3 md:gap-5 gap-0 justify-around">
          {payouts.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 items-center divide-x-2 divide-purple-400/20 md:min-w-[350px] sm:min-w-[300px] min-w-[280px] w-full"
            >
              <div className="flex items-center gap-4 pr-4 w-f">
                <Image src={item.img} alt={item.name} width={50} height={50} />
                <div className="flex flex-col">
                  <div className="md:text-xl sm:text-lg text-base font-semibold">
                    {item.payout}
                  </div>
                  <div className="md:text-base sm:text-sm text-xs">
                    {item.name}
                  </div>
                </div>
              </div>
              <div className="flex flex-col pl-4 md:text-base sm:text-sm text-xs">
                <div>{item.info.title}</div>
                <div>{item.info.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </HorizontalTicker>
    </section>
  );
}
