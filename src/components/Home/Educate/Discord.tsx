import Heading from "@/components/ui/heading";
import Image from "next/image";

export default function Discord() {
  return (
    <div className="bg-[#0E0E0E] rounded-3xl p-10 flex flex-col gap-5 items-center justify-center">
      <Image
        src={"/images/educate/discord.png"}
        alt={"discord"}
        width={242}
        height={182}
      />{" "}
      <div className="flex flex-col gap-5">
        <Heading className="text-4xl">
          Live Webinars & Trade <br /> Breakdowns
        </Heading>

        <div className="w-fit text-lg underline">Watch Now</div>
      </div>
    </div>
  );
}
