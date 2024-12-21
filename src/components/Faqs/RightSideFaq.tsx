import Image from "next/image";
import { Button } from "../ui/button";

export default function RightSideFaq() {
  return (
    <div className="flex flex-col gap-3 font-semibold">
      <div className="text-xl">Can&apos;t Find Answer? Ask Us</div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <input
            className="h-14 bg-[#0E0E0F] px-4 rounded-lg w-full"
            placeholder="Name*"
            required
          />
          <input
            className="h-14 bg-[#0E0E0F] px-4 rounded-lg w-full"
            placeholder="Email*"
            required
          />

          <textarea
            className="bg-[#0E0E0F] p-4 rounded-lg w-full"
            placeholder="Message*"
            rows={7}
            required
          />

          <Button className="rounded-none font-semibold">Send Message</Button>
        </div>

        <Image
          src={"/images/faq/banner.avif"}
          alt={"banner"}
          width={528}
          height={853}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
