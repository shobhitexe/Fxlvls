import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/subheading";
import Image from "next/image";

const list = [
  {
    title: "WISE",
    desc: "All payouts can be processed through Rise which allows to use up to 15 payment methods",
    img: "/images/fastreliablepayouts/wise.svg",
  },
  {
    title: "CRYPTO",
    desc: "Enjoy instant payouts with any crypto currency of your choice  ",
    img: "/images/fastreliablepayouts/btc.svg",
  },
  {
    title: "WIRE TRANSFER",
    desc: "Withdraw funds to almost any bank account worldwide, supporting multiple currencies.",
    img: "/images/fastreliablepayouts/wire.svg",
  },
];

export default function FastReliablePayouts() {
  return (
    <div className="my-20 flex flex-col gap-10 sm:px-40">
      <div className="flex flex-col sm:gap-5 gap-2 items-center text-center px-5">
        <Heading>Fast & Reliable Payouts</Heading>
        <SubHeading>
          All payouts can be requested through Rise which allows to use up to 15
          payment methods
        </SubHeading>
      </div>
      <div className="flex flex-wrap items-stretch gap-10 justify-around">
        {list.map((item, idx) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 items-center justify-center text-center max-w-sm"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={idx === 2 ? 100 : 50}
              height={idx === 2 ? 100 : 50}
            />
            <h1 className="font-bold text-2xl mt-2">{item.title}</h1>
            <p className="max-xs:max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
