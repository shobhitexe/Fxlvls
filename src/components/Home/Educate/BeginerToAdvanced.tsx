import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Image from "next/image";

export default function BeginerToAdvanced() {
  return (
    <div className="flex flex-col gap-10 bg-[#0E0E0E] rounded-3xl p-10 h-full">
      <div className="flex flex-col gap-2">
        <div>Beginner</div>
        <div className="flex items-center gap-2 justify-between">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx.toString()}>
              <Image
                src={"/images/educate/beginer.png"}
                alt={"beginer"}
                width={248}
                height={127}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Advanced</div>
        <div className="flex items-center gap-2 justify-between">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx.toString()}>
              <Image
                src={"/images/educate/advanced.png"}
                alt={"beginer"}
                width={248}
                height={127}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Expert</div>
        <div className="flex items-center gap-2 justify-between">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx.toString()}>
              <Image
                src={"/images/educate/advanced.png"}
                alt={"beginer"}
                width={248}
                height={127}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Heading className="text-4xl">
          Education from
          <br />
          Beginner to Advanced
        </Heading>

        <Button className="w-fit text-lg py-6">Start Challenge</Button>
      </div>
    </div>
  );
}
