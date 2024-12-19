import Image from "next/image";

// import { Button } from "@/components/ui/button";
import InteractiveHoverButton from "@/components/ui/hover-button";

const paymentMethods = [
  { src: "/images/hero/Visa.png", alt: "visa" },
  { src: "/images/hero/Mastercard.png", alt: "mastercard" },
  { src: "/images/hero/Bitcoin.png", alt: "bitcoin" },
  { src: "/images/hero/eth.png", alt: "eth" },
  { src: "/images/hero/usdt.png", alt: "usdt" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid sm:grid-cols-2 grid-cols-1 md:px-40 sm:px-20 px-10 mb-24 pt-10 max-sm:pt-16"
      style={{
        backgroundImage: "url('/images/hero/bg.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center max-sm:items-center sm:gap-5 gap-4">
        <div className="flex flex-col md:text-7xl xs:text-6xl text-5xl max-sm:text-center">
          <h1 className="whitespace-nowrap">Your Expertise,</h1>
          <h2 className="font-semibold whitespace-nowrap">Our Funding</h2>
        </div>
        <p className="md:text-xl sm:text-lg text-base text-subHeading max-sm:text-center">
          Get qualified by a private equity fund <br />
          Manage up to $2,000,000!
        </p>
        {/* 
        <Button className="w-fit text-lg xs:h-14 h-10 md:px-20 xs:px-16 px-14">
          Start Trading
        </Button> */}

        <InteractiveHoverButton
          text="Start Trading"
          className="w-fit text-lg xs:h-14 h-10 md:px-20 xs:px-16 px-14"
        >
          Start Trading
        </InteractiveHoverButton>

        <div className="flex items-center max-sm:justify-center gap-1 max-sm:mt-2">
          {paymentMethods.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={60}
              height={60}
              className="xs:w-[60px] w-[50px]"
            />
          ))}
        </div>
      </div>
      <div className="md:flex items-center justify-between relative lg:right-20 right-0">
        <Image
          src={"/images/hero/main.webp"}
          alt={"main"}
          width={480}
          height={480}
          className="relative sm:-bottom-20 -bottom-10 md:w-[480px] sm:w-[380px] mx-auto"
        />
        <Image
          src={"/images/hero/misc.png"}
          alt={"misc"}
          width={150}
          height={200}
          className="lg:flex hidden"
        />
      </div>
    </section>
  );
}
