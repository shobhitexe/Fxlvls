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
    <div className="my-20 bg-guaranteedPayouts p-20 mx-auto flex flex-col items-center justify-center gap-10">
      <Heading>Payouts & Success Stories</Heading>

      <Carousel opts={{ loop: true }} className="w-[80%] mx-auto">
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, idx) => (
            <CarouselItem key={idx} className="basis-1/5">
              <Image
                src={`/images/payouts/${idx + 1}.png`}
                alt={"image"}
                width={193}
                height={279}
                className="h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex items-center gap-5">
        <Button variant="white">Start Trading</Button>
        <Button variant="outline">More Testimonials</Button>
      </div>
    </div>
  );
}
