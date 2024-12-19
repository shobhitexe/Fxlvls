import { ContactUsForm, Help, PageHeader, StayInformed } from "@/components";
import Image from "next/image";

const contactMethods = [
  {
    title: "Call Us",
    sub: "+11 1111 10000",
    gradient: "radial-gradient(at left bottom, #8616C2 -100%, #060606 60%)",
    icon: "/images/contact-us/phone.svg",
  },
  {
    title: "Email Us",
    sub: "support@levels.com",
    gradient: "radial-gradient(at bottom, #8616C2 -100%, #060606 60%)",
    icon: "/images/contact-us/mail.svg",
  },
  {
    title: "Headquaters",
    sub: "Bangkok, Thailand",
    gradient: "radial-gradient(at right bottom, #8616C2 -100%, #060606 60%)",
    icon: "/images/contact-us/headquaters.svg",
  },
];

export default function page() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="For company updates, please follow us on social media. For enquiries, press and job opportunities, please use the contact form below."
      >
        <Socials />
      </PageHeader>

      <div className="bg-[#14081F] pb-10">
        <div className="flex md:flex-row flex-col flex-wrap items-center gap-5 justify-center relative sm:-top-14 -top-7">
          {contactMethods.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-5 p-4 max-w-xs w-full rounded-xl relative"
              style={{ background: item.gradient }}
            >
              <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-white/40 to-transparent h-px top-px w-2/3 mx-auto" />

              <Image
                src={item.icon}
                alt={item.title}
                width={70}
                height={70}
                className="sm:w-[70px] w-[40px]"
              />
              <div>
                <div className="sm:text-base text-sm">{item.title}</div>
                <div className="sm:text-lg text-base font-semibold">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        <ContactUsForm />
      </div>

      <Help />

      <StayInformed />
    </main>
  );
}

const links = [
  { title: "twitter", href: "/images/contact-us/twitter.svg" },
  { title: "facebook", href: "/images/contact-us/facebook.svg" },
  { title: "youtube", href: "/images/contact-us/youtube.svg" },
  { title: "discord", href: "/images/contact-us/discord.svg" },
];

function Socials() {
  return (
    <div className="flex items-center gap-3 mt-3">
      {links.map((item) => (
        <Image
          key={item.title}
          src={item.href}
          alt={item.title}
          width={45}
          height={45}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
}
