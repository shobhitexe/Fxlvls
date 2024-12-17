import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerNavs = [
  {
    label: "Product",
    items: [
      {
        href: "#",
        name: "Features",
      },
      {
        href: "#",
        name: "Pricing",
      },
      {
        href: "#",
        name: "FAQ",
      },
      {
        href: "mailto:support@example.com",
        name: "Support",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        href: "#",
        name: "About Us",
      },
      {
        href: "#",
        name: "Blog",
      },
      {
        href: "#",
        name: "Careers",
      },
      {
        href: "#",
        name: "Contact",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        href: "#",
        name: "Documentation",
      },
      {
        href: "#",
        name: "API Reference",
      },
      {
        href: "#",
        name: "Community",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        href: "#",
        name: "Privacy Policy",
      },
      {
        href: "#",
        name: "Terms of Service",
      },
    ],
  },
];

const footerSocials = [
  {
    href: "#",
    name: "twitter",
    icon: "/images/footer/twitter.svg",
  },
  {
    href: "#",
    name: "facebook",
    icon: "/images/footer/facebook.svg",
  },
  {
    href: "#",
    name: "youtube",
    icon: "/images/footer/youtube.svg",
  },
  {
    href: "#",
    name: "discord",
    icon: "/images/footer/discord.svg",
  },
];

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="gap-4 p-4 py-16 sm:pb-16 md:flex md:justify-between">
          <div className="mb-12 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/footer/logo.png"
                alt="Logo"
                width={195}
                height={32}
              />
            </Link>
            <span className="max-w-sm text-subHeading">
              We&apos;re headquartered in New York with offices in LA and Miami
              but you can also find our team members in London and Dubai.
            </span>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  {nav.label}
                </h2>
                <ul className="grid gap-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                      >
                        {item.name}
                        <ChevronRightIcon className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-4 sm:flex sm:items-center justify-center">
          <span className="text-sm tracking-tight text-neutral-500 dark:text-neutral-400 sm:text-center">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              Levels Technologies LLC.
            </Link>
            All Rights Reserved.
          </span>

          <div className="flex items-center gap-5">
            {footerSocials.map((item) => (
              <Image
                key={item.name}
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className="cursor-pointer hover:bg-purple-500 rounded-full px-2 py-3 aspect-square duration-500"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
