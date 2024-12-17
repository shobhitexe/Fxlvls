import Heading from "@/components/ui/heading";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const list = [
  {
    icon: "/images/help/1.png",
    title: "24/7 Chat Support",
    desc: "Get 24/7 chat support with our friendly customer service agents at your service.",
    link: { title: "Chat now", href: "" },
  },
  {
    icon: "/images/help/2.png",
    title: "FAQs",
    desc: "View FAQs for detailed instructions on specific features.",
    link: { title: "Learn more", href: "" },
  },
  {
    icon: "/images/help/3.png",
    title: "Blog",
    desc: "Stay up to date with the latest stories and commentary.",
    link: { title: "Learn more", href: "" },
  },
];

export default function Help() {
  return (
    <div className="sm:my-20 my-14 text-center flex flex-col sm:gap-10 gap-5">
      <Heading>Need Help?</Heading>

      <div className="flex flex-wrap gap-10 items-center justify-around px-5 max-sm:mt-5">
        {list.map((item) => (
          <div
            key={item.title}
            className="flex gap-2 items-start max-w-sm text-left"
          >
            <Image src={item.icon} alt={item.title} width={82} height={82} />
            <div className="flex flex-col gap-2">
              <div className="font-bold sm:text-xl text-lg">{item.title}</div>
              <div className="text-subHeading sm:text-base text-sm">
                {item.desc}
              </div>
              <div className="bg-joinTextGradient bg-clip-text text-transparent sm:text-base text-sm font-semibold flex items-center gap-3 cursor-pointer">
                {item.link.title}{" "}
                <ChevronRight className="w-4 h-4 text-purple-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
