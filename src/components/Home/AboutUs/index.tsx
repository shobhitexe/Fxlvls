import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/subheading";
import Image from "next/image";
import AboutUsCarousel from "./Carousel";

export default function AboutUs() {
  return (
    <div className="my-20 w-full mx-auto flex flex-col items-center justify-center gap-5 relative overflow-hidden">
      <div className="sm:bg-black left-0 translate-y-1/2 h-1/2 rounded-3xl blur-3xl absolute w-32 z-10" />
      <div className="sm:bg-black right-0 translate-y-1/2 h-1/2 rounded-3xl blur-3xl absolute w-32 z-10" />
      <Image
        src={"/images/aboutus/trustpilot.png"}
        alt={"trustpilot"}
        width={250}
        height={65}
        className="mx-auto"
      />

      <div className="text-[#A426FF] text-xl font-bold">TESTIMONIALS</div>

      <div className="flex flex-col sm:gap-5 gap-2 items-center">
        <Heading>What they say about us</Heading>
        <SubHeading>Have a look at the client feedback we received.</SubHeading>
      </div>

      <AboutUsCarousel />
    </div>
  );
}
