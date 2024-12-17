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

      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-6">
        <div className="col-span-1 md:col-span-2 lg:row-span-6">
          <BeginerToAdvanced />
        </div>

        <div className="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-3 lg:col-start-3">
          <LiveWebinars />
        </div>

        <div className="col-span-1 md:col-span-1 lg:row-span-3 lg:col-start-3 lg:row-start-4">
          <Discord />
        </div>

        <div className="col-span-1 md:col-span-1 lg:row-span-3 lg:col-start-4 lg:row-start-4">
          <MasterTrader />
        </div>
      </div>
    </div>
  );
}
