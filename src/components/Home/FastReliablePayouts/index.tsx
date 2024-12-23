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
    <div className="my-20 flex flex-col sm:gap-10 gap-5 sm:px-40 px-2">
      <div className="flex flex-col sm:gap-5 gap-2 sm:items-center sm:text-center px-3">
        <Heading className="text-left">Fast & Reliable Payouts</Heading>
        <SubHeading>
          All payouts can be requested through Rise which allows to use up to 15
          payment methods
        </SubHeading>
      </div>
      <div className="flex flex-wrap items-stretch sm:gap-10 gap-5 justify-around px-5">
        {list.map((item, idx) => (
          <div
            key={item.title}
            className="flex sm:flex-col flex-row sm:gap-3 gap-5 items-center justify-center text-center rounded-lg max-w-sm w-full p-5 max-sm:bg-[#0E0E0E]"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={idx === 2 ? 100 : 50}
              height={idx === 2 ? 100 : 50}
              className={`${
                idx === 2 ? "sm:w-[100px] w-[50px]" : "sm:w-[50px] w-[45px]"
              }`}
            />
            <div className="max-sm:text-left">
              <h1 className="font-bold sm:text-2xl text-xl sm:mt-2">
                {item.title}
              </h1>
              <p className="max-xs:max-w-60 sm:text-base text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
