import { ReactNode } from "react";
import Heading from "../ui/heading";
import SubHeading from "../ui/subheading";

export default function PageHeader({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <div
      className="flex flex-col justify-center items-center sm:pt-20 sm:pb-40 pb-20 py-10 px-5 sm:gap-5 gap-2"
      style={{
        background: "radial-gradient(at top, #9E07FB -100%, #000000 60%)",
      }}
    >
      <Heading className={`md:text-7xl sm:text-6xl text-5xl font-semibold`}>
        {" "}
        {title}
      </Heading>
      <SubHeading className="max-w-2xl sm:text-lg text-sm text-center">
        {subtitle}
      </SubHeading>

      {children}
    </div>
  );
}
