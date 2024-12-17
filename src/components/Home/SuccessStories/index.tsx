import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "@/components/ui/heading";
import Image from "next/image";

export default function SuccessStories() {
  return (
    <div className="sm:my-20 my-14 bg-guaranteedPayouts md:p-20 xs:p-10 p-5 mx-auto flex flex-col items-center justify-center sm:gap-10 gap-5">
      <Heading>Payouts & Success Stories</Heading>

      <Carousel opts={{ loop: true }} className="w-[80%] mx-auto">
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, idx) => (
            <CarouselItem key={idx} className="sm:basis-1/5 xs:basis-1/4">
              <Image
                src={`/images/payouts/${idx + 1}.png`}
                alt={"image"}
                width={193}
                height={279}
                className="h-full mx-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex sm:flex-row flex-col items-center sm:gap-5 gap-2">
        <Button variant="white" className="w-full">
          Start Trading
        </Button>
        <Button variant="outline">More Testimonials</Button>
      </div>
    </div>
  );
}
