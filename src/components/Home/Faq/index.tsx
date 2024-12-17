import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/subheading";
import { ArrowRight } from "lucide-react";

const Faqs = [
  { que: "Does Levels Have an Own MT5 License?", ans: "" },
  { que: "What is the profit split at Levels?", ans: "" },
  { que: "When can i get my account?", ans: "" },
];

export default function Faq() {
  return (
    <div className="my-20 w-[90%] mx-auto grid grid-cols-2">
      <div className="flex flex-col gap-5">
        <Heading>
          Frequently Asked
          <br />
          Questions!
        </Heading>
        <SubHeading>
          Didn&apos;t find an answer to your question? Drop us a line here.
        </SubHeading>

        <Button
          variant={"outline"}
          className="border-white/80 rounded-none w-fit hover:bg-white/40 hover:text-white"
        >
          Ask a question <ArrowRight />
        </Button>
      </div>

      <div className="flex flex-col gap-10">
        <Accordion type="single" collapsible>
          {Faqs.map((item, idx) => (
            <AccordionItem key={item.que} value={idx.toString()}>
              <AccordionTrigger>{item.que}</AccordionTrigger>
              <AccordionContent>{item.ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-[#8800FF] font-semibold cursor-pointer">
          Show more
        </div>
      </div>
    </div>
  );
}
