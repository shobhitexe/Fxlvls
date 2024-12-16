import Image from "next/image";

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
    <section className="bg-[#B653F4] flex items-center w-full py-3">
      <div className="flex items-center -rotate-[0.5deg] bg-payoutTickerBg w-full py-3 gap-5 justify-around">
        {payouts.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center divide-x-2 divide-purple-400/20"
          >
            <div className="flex items-center gap-4 pr-4">
              <Image src={item.img} alt={item.name} width={50} height={50} />
              <div className="flex flex-col">
                <div className="text-xl font-semibold">{item.payout}</div>
                <div>{item.name}</div>
              </div>
            </div>
            <div className="flex flex-col pl-4">
              <div>{item.info.title}</div>
              <div>{item.info.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
