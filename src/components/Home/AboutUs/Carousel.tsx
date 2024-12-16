"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

const reviews = [
  {
    stars: 5,
    review:
      "The feedback on the product has been great. Users can quickly get information they need. It's intuitive and easy for them to find the right Hockey stats.",
    name: "Chris DeFuria",
    title: "Executive Chairman",
  },
  {
    stars: 5,
    review:
      "Every time I reach out, they respond quickly and with real solutions. So refreshing to have this support.",
    name: "John Kelly",
    title: "Super Fast Responses!",
  },
  {
    stars: 5,
    review:
      "Customer success managers at Levels are top-notch. They help keep me focused and motivated, ana their advice on handling trading pressures is invaluable.",
    name: "Adriano Marin",
    title: "CS Manager is Top Notch",
  },
  {
    stars: 5,
    review:
      "Levels doesn't just provide capital - they invest in your growth as a trader. Their reources and support structure make a real difference.",
    name: "Leslie Alexander",
    title: "Prop Firm That Invest In Your Growth",
  },
  {
    stars: 5,
    review:
      "I Received my First Payout within 3 hours after requesting it on the platform. Definitely the fastest i have ever seen.",
    name: "Janie Lawson",
    title: "Super Fast Payouts",
  },
];

export default function AboutUsCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
        dragFree: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="mt-5 z-0">
        {reviews.map((item) => (
          <CarouselItem
            key={item.name}
            className="flex flex-col gap-5 basis-1/4 text-[#F3F3F3] bg-[#1E1E1F] p-5 rounded-xl ml-5 justify-center"
          >
            <Image
              src={"/images/aboutus/star.png"}
              alt={"stars"}
              width={100}
              height={15}
            />
            <p>{item.review}</p>

            <div className="flex gap-2">
              <div className="w-5 h-5 p-5 rounded-full bg-white"></div>
              <div>
                <div className="font-bold">{item.name}</div>
                <div className="text-[#898990]">{item.title}</div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
