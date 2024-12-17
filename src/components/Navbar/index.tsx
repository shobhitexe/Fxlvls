import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

export const links = [
  { title: "Programs", href: "" },
  { title: "Pricing", href: "" },
  { title: "Trading Rules", href: "" },
  { title: "FAQ", href: "" },
  { title: "Affiliates", href: "" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-full items-center justify-between p-5 md:px-20 sm:px-10">
      <div className="pointer-events-none absolute inset-0  z-[1] h-[20vh] backdrop-blur-[0.0625px] [mask-image:linear-gradient(0deg,transparent_0%,#000_12.5%,#000_25%,transparent_37.5%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[2] h-[20vh] backdrop-blur-[0.125px] [mask-image:linear-gradient(0deg,transparent_12.5%,#000_25%,#000_37.5%,transparent_50%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[3] h-[20vh] backdrop-blur-[0.25px] [mask-image:linear-gradient(0deg,transparent_25%,#000_37.5%,#000_50%,transparent_62.5%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[4] h-[20vh] backdrop-blur-[0.5px] [mask-image:linear-gradient(0deg,transparent_37.5%,#000_50%,#000_62.5%,transparent_75%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[5] h-[20vh] backdrop-blur-[1px] [mask-image:linear-gradient(0deg,transparent_50%,#000_62.5%,#000_75%,transparent_87.5%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[6] h-[20vh] backdrop-blur-[2px] [mask-image:linear-gradient(0deg,transparent_62.5%,#000_75%,#000_87.5%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[7] h-[20vh] backdrop-blur-[4px] [mask-image:linear-gradient(0deg,transparent_75%,#000_87.5%,#000_100%,transparent_112.5%)]"></div>
      <div className="mx-auto flex w-full items-center justify-between">
        <Link className="z-[10]" href="/">
          <Image
            src={"/images/navbar/logo.png"}
            alt={"logo"}
            width={150}
            height={100}
          />
        </Link>
        <div className="z-[10] sm:flex hidden items-center gap-5">
          {links.map((item) => (
            <Link href={item.href} key={item.title}>
              {item.title}
            </Link>
          ))}

          <Button>Log in</Button>
        </div>

        <div className="sm:hidden flex">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
