"use client";

import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ContactUsForm() {
  return (
    <form className="flex flex-col items-center justify-center placeholder-white gap-5 max-w-2xl mx-auto px-7 max-sm:mt-5">
      <div className="w-full mx-auto flex sm:flex-row flex-col justify-center gap-5">
        <input
          className="h-14 bg-black px-4 rounded-lg w-full"
          placeholder="Name*"
          required
        />
        <input
          className="h-14 bg-black px-4 rounded-lg w-full"
          placeholder="Email*"
          required
        />
      </div>

      <Select>
        <SelectTrigger className="w-full bg-black border-none h-14">
          <SelectValue placeholder="Your Inquiry about" />
        </SelectTrigger>
        <SelectContent className="bg-black border-none text-white">
          <SelectItem
            className="focus:bg-purple-500/20 focus:text-white cursor-pointer"
            value="general"
          >
            General Inquiry
          </SelectItem>
          <SelectItem
            className="focus:bg-purple-500/20 focus:text-white cursor-pointer"
            value="support"
          >
            Support
          </SelectItem>
          <SelectItem
            className="focus:bg-purple-500/20 focus:text-white cursor-pointer"
            value="business"
          >
            Business
          </SelectItem>
          <SelectItem
            className="focus:bg-purple-500/20 focus:text-white cursor-pointer"
            value="other"
          >
            Other
          </SelectItem>
        </SelectContent>
      </Select>

      <textarea
        className="bg-black p-4 rounded-lg w-full"
        placeholder="Message*"
        rows={7}
        required
      />

      <div className="flex items-center gap-2 self-start sm:text-base text-sm">
        <input
          type="checkbox"
          className="cursor-pointer h-4 w-4 accent-[#5532C7]"
          required
        />
        <div>I accept terms & condition</div>
      </div>

      <Button className="rounded-none sm:text-lg sm:h-12 font-semibold">
        Send Message
      </Button>
    </form>
  );
}
