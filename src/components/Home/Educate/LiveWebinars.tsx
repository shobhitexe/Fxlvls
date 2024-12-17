import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const list = [
  {
    date: 10,
    month: "Dec",
    Time: "5pm-6pm",
    title: "Weekly smc outlook",
    desc: "Weekly Trade outlook with potential trade setups",
  },
  {
    date: 15,
    month: "Dec",
    Time: "5pm-6pm",
    title: "Weekly smc outlook",
    desc: "Weekly Trade outlook with potential trade setups",
  },
];

export default function LiveWebinars() {
  return (
    <div className="p-10 rounded-3xl bg-[#0E0E0E] flex flex-col gap-10 h-full">
      <div className="flex gap-3">
        {list.map((item) => (
          <div
            key={item.date}
            className="bg-[#898990]/40 p-5 flex flex-col gap-1 rounded-2xl"
          >
            <div className="flex items-start gap-2">
              <div className="text-3xl font-bold">{item.date}</div>
              <div className="text-sm text-subHeading">
                {item.month}
                <br />
                {item.Time}
              </div>
            </div>
            <div className="text-xl font-bold">{item.title}</div>
            <div className="text-subHeading">{item.desc}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <Heading className="text-4xl">
          Live Webinars & Trade <br /> Breakdowns
        </Heading>

        <Button className="w-fit text-lg">Start your Challenge Now</Button>
      </div>
    </div>
  );
}
