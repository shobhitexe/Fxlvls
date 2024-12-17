import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/subheading";

export default function Educate() {
  return (
    <div className="my-20 w-[90%] mx-auto">
      <div className="flex flex-col gap-5">
        <Heading>
          Educate & Learn with the <br />
          Levels University
        </Heading>
        <SubHeading>
          <strong>Levels University</strong> was created by successful, funded
          traders to share proven strategies and insights. Sharpen your skills
          and take the next step toward financial freedom!{" "}
          <strong>Learn from the best to become the best!</strong>
          <br />
          <br />
          <strong>Levels University</strong> offers comprehensive courses for
          beginners, intermediates, and advanced traders, along with market
          outlooks, live trade breakdowns, and community chats to support your
          growth. Access to the University is exclusive to traders with an
          active challenge, ensuring a focused and engaged learning experience.
        </SubHeading>
      </div>
    </div>
  );
}
