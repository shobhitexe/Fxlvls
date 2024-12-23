import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function BeginerToAdvanced() {
  return (
    <div className="flex flex-col sm:gap-10 gap-5 bg-[#0E0E0E] rounded-3xl sm:p-10 p-5 h-full">
      <div className="flex flex-col gap-2">
        <div>Beginner</div>

        <Carousel className="w-[90%] mx-auto">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, idx) => (
              <CarouselItem
                key={idx.toString()}
                className="sm:basis-1/3 basis-1/2"
              >
                <Image
                  src={`/images/educate/Beginner/${idx + 1}.png`}
                  alt={"beginer"}
                  width={177}
                  height={90}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="sm:w-8 w-5 sm:h-8 h-5 sm:-left-12 -left-7" />
          <CarouselNext className="sm:w-8 w-5 sm:h-8 h-5 sm:-right-12 -right-7" />
        </Carousel>
      </div>
      <div className="flex flex-col gap-2">
        <div>Advanced</div>

        <Carousel className="w-[90%] mx-auto">
          <CarouselContent>
            {Array.from({ length: 15 }).map((_, idx) => (
              <CarouselItem
                key={idx.toString()}
                className="sm:basis-1/3 basis-1/2"
              >
                <Image
                  src={`/images/educate/Advanced/${idx + 1}.png`}
                  alt={"beginer"}
                  width={177}
                  height={90}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="sm:w-8 w-5 sm:h-8 h-5 sm:-left-12 -left-7" />
          <CarouselNext className="sm:w-8 w-5 sm:h-8 h-5 sm:-right-12 -right-7" />
        </Carousel>
      </div>

      <div className="flex flex-col gap-2">
        <div>Intermediate</div>

        <Carousel className="w-[90%] mx-auto">
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, idx) => (
              <CarouselItem
                key={idx.toString()}
                className="sm:basis-1/3 basis-1/2"
              >
                <Image
                  src={`/images/educate/intermediate/${idx + 1}.png`}
                  alt={"beginer"}
                  width={177}
                  height={90}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="sm:w-8 w-5 sm:h-8 h-5 sm:-left-12 -left-7" />
          <CarouselNext className="sm:w-8 w-5 sm:h-8 h-5 sm:-right-12 -right-7" />
        </Carousel>
      </div>

      <div className="flex flex-col gap-2">
        <div>Expert</div>

        <Carousel className="w-[90%] mx-auto">
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, idx) => (
              <CarouselItem
                key={idx.toString()}
                className="sm:basis-1/3 basis-1/2"
              >
                <Image
                  src={`/images/educate/Expert/${idx + 1}.png`}
                  alt={"beginer"}
                  width={177}
                  height={90}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="sm:w-8 w-5 sm:h-8 h-5 sm:-left-12 -left-7" />
          <CarouselNext className="sm:w-8 w-5 sm:h-8 h-5 sm:-right-12 -right-7" />
        </Carousel>
      </div>

      <div className="flex flex-col gap-5">
        <div className="sm:text-4xl xs:text-3xl text-2xl">
          Education from
          <br />
          Beginner to Advanced
        </div>

        <Button className="w-fit sm:text-lg text-base py-6">
          Start Challenge
        </Button>
      </div>
    </div>
  );
}
