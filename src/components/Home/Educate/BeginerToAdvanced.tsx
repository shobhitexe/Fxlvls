import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BeginerToAdvanced() {
  return (
    <div className="flex flex-col sm:gap-10 gap-5 bg-[#0E0E0E] rounded-3xl sm:p-10 p-5 h-full">
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
        <div className="sm:text-4xl xs:text-3xl text-2xl">
          Education from
          <br />
          Beginner to Advanced
        </div>

        <Button className="w-fit text-lg py-6">Start Challenge</Button>
      </div>
    </div>
  );
}
