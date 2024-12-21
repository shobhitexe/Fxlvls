import { Faqs, PageHeader, RightSideFaq, StayInformed } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "@/components/ui/heading";
import SubHeading from "@/components/ui/subheading";

export default function page() {
  return (
    <main>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="We hope you find what you're looking for. If your answer is not in the below FAQ responses, please feel free to ask your question through our contact us form."
        className="md:text-6xl sm:text-5xl text-4xl"
      />

      <div className="sm:w-[80%] w-[90%] mx-auto flex sm:flex-row flex-col gap-10">
        <div className="flex flex-col sm:gap-20 gap-10 w-full">
          <div className="flex flex-col sm:gap-5 gap-2">
            <Heading>Popular Questions</Heading>
            <SubHeading className="max-w-2xl sm:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
            </SubHeading>
          </div>

          <div className="text-[#E1B0FF] border-b border-[#9F3CF6] text-3xl font-semibold sm:pb-10 pb-5">
            About accounts
          </div>

          <div className="flex flex-col gap-2">
            {" "}
            <div className="text-[#9F3CF6] text-2xl font-semibold">
              Can i retry my account?
            </div>
            <SubHeading className="max-w-2xl sm:text-base text-sm">
              Pretium mauris viverra eget nulla eu auctor scelerisque risus.
              Ornare morbi pulvinar ipsum gravida rutrum. Aliquam aliquet ac
              vitae pellentesque lectus elementum. Nunc mus et, pulvinar
              facilisi viverra. At amet mauris fermentum sed. Aliquam ut rhoncus
              et semper non.
            </SubHeading>
            <div className="flex flex-col sm:gap-16 gap-12">
              {Faqs.map((item) => (
                <div key={item.topic} className="flex flex-col sm:gap-3 gap-1">
                  <div className="text-[#E1B0FF] text-3xl font-semibold">
                    {item.topic}
                  </div>

                  <Accordion type="single" collapsible>
                    {item.faqs.map((item) => (
                      <AccordionItem key={item.que} value={item.que}>
                        <AccordionTrigger className="text-left">
                          {item.que}
                        </AccordionTrigger>
                        <AccordionContent>{item.ans}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>

        <RightSideFaq />
      </div>

      <StayInformed />
    </main>
  );
}
