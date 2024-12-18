import Image from "next/image";

export default function Discord() {
  return (
    <div className="bg-[#0E0E0E] rounded-3xl sm:p-10 p-5 flex flex-col gap-5 items-center justify-center">
      <Image
        src={"/images/educate/discord.png"}
        alt={"discord"}
        width={242}
        height={182}
        className="sm:w-[242px] w-[200px]"
      />{" "}
      <div className="flex flex-col gap-5">
        <div className="sm:text-4xl xs:text-3xl text-2xl">
          Live Webinars & Trade <br /> Breakdowns
        </div>

        <div className="w-fit sm:text-lg text-base underline">Watch Now</div>
      </div>
    </div>
  );
}
