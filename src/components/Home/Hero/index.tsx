import Image from "next/image";

import { Button } from "@/components/ui/button";

const paymentMethods = [
  { src: "/images/hero/Visa.png", alt: "visa" },
  { src: "/images/hero/Mastercard.png", alt: "mastercard" },
  { src: "/images/hero/Bitcoin.png", alt: "bitcoin" },
  { src: "/images/hero/eth.png", alt: "eth" },
  { src: "/images/hero/usdt.png", alt: "usdt" },
];

export default function Hero() {
  return (
    <section id="hero" className="grid grid-cols-2 px-20 mt-10 mb-24">
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-col text-7xl">
          <h1>Your Expertise,</h1>
          <h2 className="font-semibold">Our Funding</h2>
        </div>
        <p className="text-xl text-subHeading">
          Get qualified by a private equity fund <br />
          Manage up to $2,000,000!
        </p>

        <Button className="w-fit text-lg h-14 px-20">Start Trading</Button>

        <div className="flex items-center gap-1">
          {paymentMethods.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={60}
              height={60}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Image
          src={"/images/hero/main.webp"}
          alt={"main"}
          width={480}
          height={480}
          className="relative -bottom-20"
        />
        <Image
          src={"/images/hero/misc.png"}
          alt={"misc"}
          width={150}
          height={200}
        />
      </div>
    </section>
  );
}
