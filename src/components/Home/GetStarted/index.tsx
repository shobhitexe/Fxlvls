import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/subheading";

const arr = [
  {
    title: "Choose your program",
    desc: "Your account and personal identity are guaranteed safe.",
    gradient: "radial-gradient(at right bottom, #8616C2 -100%, #0E0E0E 60%)",
  },
  {
    title: "Start Trading",
    desc: "Connect the bank account to start transactions never been easy like that.",
    gradient: "radial-gradient(at bottom, #8616C2 -100%, #0E0E0E 60%)",
  },
  {
    title: "Get your first payout",
    desc: "Buy and sell popular currencies and keep track of them in one single place.",
    gradient: "radial-gradient(at left bottom, #8616C2 -100%, #0E0E0E 60%)",
  },
];

export default function GetStarted() {
  return (
    <div className="w-[80%] mx-auto sm:my-20 my-14">
      <div className="flex flex-col sm:gap-5 gap-2">
        <Heading>How to get Started</Heading>
        <SubHeading>
          Simple and easy way to start your investment in cryptocurrency.
        </SubHeading>
      </div>
      <div className="flex items-center flex-wrap justify-center sm:gap-10 gap-7 w-full sm:mt-20 mt-10 px-5">
        {arr.map((item, idx) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 max-w-sm mx-auto text-subHeading p-10 rounded-2xl relative"
            style={{
              background: item.gradient,
            }}
          >
            <div className="absolute -top-5 -right-5 bg-numbersGradient md:text-2xl sm:text-xl text-lg font-bold p-3 rounded-2xl aspect-square">
              0{idx + 1}
            </div>

            <div className="md:text-2xl sm:text-xl text-lg font-bold">
              {item.title}
            </div>
            <div>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
