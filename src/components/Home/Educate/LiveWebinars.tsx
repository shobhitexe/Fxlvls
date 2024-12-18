import { Button } from "@/components/ui/button";

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
    <div className="sm:p-10 p-5 rounded-3xl bg-[#0E0E0E] flex flex-col gap-10 h-full">
      <div className="flex sm:flex-row flex-col gap-3">
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
        <div className="sm:text-4xl xs:text-3xl text-2xl">
          Live Webinars & Trade <br /> Breakdowns
        </div>

        <Button className="w-fit sm:text-lg text-base">
          Start your Challenge Now
        </Button>
      </div>
    </div>
  );
}
