import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/subheading";
import BeginerToAdvanced from "./BeginerToAdvanced";
import LiveWebinars from "./LiveWebinars";
import MasterTrader from "./MasterTrader";
import Discord from "./Discord";

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

      <div className="grid grid-cols-4 grid-rows-6 gap-4 mt-10">
        <div className="col-span-2 row-span-6">
          <BeginerToAdvanced />
        </div>
        <div className="col-span-2 row-span-3 col-start-3">
          <LiveWebinars />
        </div>
        <div className="row-span-3 col-start-3 row-start-4">
          <Discord />
        </div>
        <div className="row-span-3 col-start-4 row-start-4">
          <MasterTrader />
        </div>
      </div>
    </div>
  );
}
