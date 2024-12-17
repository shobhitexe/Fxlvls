import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

export default function SuccessStories() {
  return (
    <div className="my-20 bg-guaranteedPayouts p-20 mx-auto flex flex-col items-center justify-center gap-10">
      <Heading>Payouts & Success Stories</Heading>

      <div className="flex items-center gap-5">
        <Button variant="white">Start Trading</Button>
        <Button variant="outline">More Testimonials</Button>
      </div>
    </div>
  );
}
