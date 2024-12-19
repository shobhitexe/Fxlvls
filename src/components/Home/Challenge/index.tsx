"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { productLinks } from "./productLinks";

const programs = ["Instant Funding", "Two-Phase"];
const accountSizes = [
  [
    "$1,250",
    "$2,500",
    "$5,000",
    "$10,000",
    "$20,000",
    "$40,000",
    "$80,000",
    "$100,000",
  ],
  ["$2,500", "$5,000", "$10,000", "$25,000", "$50,000", "$100,000", "$200,000"],
];

const pricing = [
  [80, 119, 220, 440, 850, 1700, 3350, 4700],
  [15, 20, 42, 120, 220, 450, 900],
];

export default function ChallengeConfig() {
  const [platform, setPlatform] = useState(0);
  const [program, setProgram] = useState(0);
  const [accountSize, setAccountSize] = useState(0);

  const [splitChecked, setSplitChecked] = useState(false);
  const [holdingWeekendChecked, setHoldingWeekend] = useState(false);
  const [holdingOnNews, setHoldingOnNews] = useState(false);

  const metrics = [
    { label: "Profit Target", value: program === 0 ? "8%" : "10%" },
    { label: "Daily drawdown", value: program === 0 ? "2%" : "5%" },
    { label: "Max drawdown", value: program === 0 ? "4%" : "10%" },
    { label: "Max DD Threshold", value: program === 0 ? "96%" : "95%" },
    { label: "Target", value: program === 0 ? "-" : "5%" },
    { label: "Minimum trading days", value: program === 0 ? "-" : "3" },
    {
      label: "Holding over weekends",
      value: holdingWeekendChecked ? "Available" : "Not available",
    },
    {
      label: "Holding on news",
      value: holdingOnNews ? "Available" : "Not available",
    },
    { label: "Baseline profit split", value: splitChecked ? "90%" : "80%" },
    { label: "Swap Free", value: "No" },
    {
      label: "Leverage",
      value: (
        <div className="space-y-1">
          <div>Currencies - 1:100</div>
          <div>Commodities - 1:20</div>
          <div>Indices - 1:20</div>
          <div>Crypto - 1:2</div>
        </div>
      ),
    },
  ];

  const calculateTotal = () => {
    const basePrice = pricing[program][accountSize];
    const weekendHoldingCost = holdingWeekendChecked ? basePrice * 0.1 : 0;
    const newsHoldingCost = holdingOnNews ? basePrice * 0.1 : 0;
    const profitSplitCost = splitChecked ? basePrice * 0.1 : 0;
    return basePrice + weekendHoldingCost + profitSplitCost + newsHoldingCost;
  };

  return (
    <div className="sm:w-[80%] w-[90%] mx-auto sm:my-20 my-14 flex flex-col sm:gap-10 gap-5">
      <Heading>Customize your Challenge</Heading>

      <div className="flex md:flex-row flex-col gap-5">
        {" "}
        <div className="flex flex-col lg:basis-3/4 md:basis-2/3 gap-5 sm:p-5 p-3 rounded-2xl bg-[#14081F] border border-[#8903FF]">
          <div className="bg-[#090210] sm:p-5 p-3 rounded-2xl flex flex-col gap-3">
            <Title>Platform</Title>
            <Button
              className="w-fit"
              variant={"outline"}
              onClick={() => {
                setPlatform(0);
              }}
              value={platform}
            >
              Match Trader{" "}
              <Image
                src={"/images/config/matchtrader.svg"}
                alt={"match trader"}
                width={25}
                height={25}
              />
            </Button>
          </div>

          <div className="bg-[#090210] sm:p-5 p-3 rounded-2xl flex flex-col gap-3">
            <Title>Programs</Title>
            <div className="grid grid-cols-2 gap-5">
              {programs.map((item, idx) => (
                <Button
                  key={item}
                  variant={idx === program ? "purple" : "outline"}
                  onClick={() => {
                    setProgram(idx);
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-[#090210] sm:p-5 p-3 rounded-2xl flex flex-col gap-3">
            <Title>Account size</Title>
            <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-5 gap-2">
              {accountSizes[program].map((item, idx) => (
                <Button
                  key={item}
                  variant={idx === accountSize ? "purple" : "outline"}
                  onClick={() => {
                    setAccountSize(idx);
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-[#090210] sm:p-5 p-3 rounded-2xl flex flex-col gap-3">
            <Title>Modify your experience</Title>
            <div className="flex items-center justify-start flex-wrap gap-5">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="cursor-pointer h-4 w-4 accent-[#5532C7]"
                  checked={splitChecked}
                  onChange={(e) => {
                    setSplitChecked(e.target.checked);
                  }}
                />
                <div className="sm:text-base text-sm text-[#A0A0A0]">
                  Add 10% to profit split
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="cursor-pointer h-4 w-4 accent-[#5532C7]"
                  value={holdingWeekendChecked === true ? "true" : "false"}
                  checked={holdingWeekendChecked}
                  onChange={(e) => {
                    setHoldingWeekend(e.target.checked);
                  }}
                />
                <div className="sm:text-base text-sm text-[#A0A0A0]">
                  Weekend holding
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="cursor-pointer h-4 w-4 accent-[#5532C7]"
                  checked={holdingOnNews}
                  onChange={(e) => {
                    setHoldingOnNews(e.target.checked);
                  }}
                />
                <div className="sm:text-base text-sm text-[#A0A0A0]">
                  Allow major news trading
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto sm:p-5 p-3 rounded-xl bg-gradient-to-br from-purple-950 to-black">
            <table className="w-full">
              <tbody>
                {metrics.map((metric) => (
                  <tr
                    key={metric.label}
                    className="border-b border-purple-800/20 hover:bg-purple-900/10 transition-colors"
                  >
                    <td className="py-4 text-purple-100 font-medium">
                      {metric.label}
                    </td>
                    <td className="py-4 text-right text-purple-100">
                      {metric.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col sm:gap-5 gap-3 lg:basis-1/4 md:basis-1/3">
          <div className="md:text-4xl sm:text-3xl text-2xl">Your Order :</div>
          <div className="flex flex-col gap-5 sm:p-5 p-4 rounded-2xl bg-[#14081F] border border-[#8903FF]">
            <div className="flex items-center justify-between font-semibold">
              <div>Platform</div>
              <div>Match Trader</div>
            </div>
            <Break />
            <div className="flex items-center justify-between font-semibold">
              <div>Program</div>
              <div>{programs[program]}</div>
            </div>
            <Break />
            <div className="flex items-center justify-between font-semibold">
              <div>Account Size</div>
              <div>{accountSizes[program][accountSize]}</div>
            </div>
            <Break />
            <div className="flex items-center justify-between font-semibold">
              <div>Weekend Account</div>
              <div>{holdingWeekendChecked ? "Yes" : "No"}</div>
            </div>
            <Break />
            <div className="flex items-center justify-between font-semibold">
              <div>News Trading</div>
              <div>{holdingOnNews ? "Enabled" : "Disabled"}</div>
            </div>
            <Break />
            <div className="flex items-center justify-between font-semibold">
              <div>Additional 10% Split</div>
              <div>{splitChecked ? "Yes" : "No"}</div>
            </div>
            <Break />
            <div className="flex items-center justify-between font-semibold">
              <div>Total</div>
              <div>${calculateTotal()}</div>
            </div>

            {holdingWeekendChecked && !holdingOnNews && !splitChecked && (
              <Link
                href={
                  productLinks[platform][program][accountSize].addons
                    .holdingWeekend
                }
                className={`${buttonVariants({ variant: "purple" })}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Place Order
              </Link>
            )}

            {holdingOnNews && !holdingWeekendChecked && !splitChecked && (
              <Link
                href={
                  productLinks[platform][program][accountSize].addons
                    .holdingOnNews
                }
                className={`${buttonVariants({ variant: "purple" })}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Place Order
              </Link>
            )}

            {holdingWeekendChecked && holdingOnNews && !splitChecked && (
              <Link
                href={
                  productLinks[platform][program][accountSize].addons
                    .holdingWeekendAndNews
                }
                className={`${buttonVariants({ variant: "purple" })}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Place Order
              </Link>
            )}

            {splitChecked && !holdingOnNews && !holdingWeekendChecked && (
              <Link
                href={productLinks[platform][program][accountSize].addons.split}
                className={`${buttonVariants({ variant: "purple" })}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Place Order
              </Link>
            )}

            {holdingWeekendChecked && splitChecked && !holdingOnNews && (
              <Link
                href={
                  productLinks[platform][program][accountSize].addons
                    .holdingWeekendAndSplit
                }
                className={`${buttonVariants({ variant: "purple" })}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Place Order
              </Link>
            )}

            {holdingOnNews && splitChecked && !holdingWeekendChecked && (
              <Link
                href={
                  productLinks[platform][program][accountSize].addons
                    .holdingOnNewsAndSplit
                }
                className={`${buttonVariants({ variant: "purple" })}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Place Order
              </Link>
            )}

            {holdingOnNews && splitChecked && holdingWeekendChecked && (
              <Link
                href={
                  productLinks[platform][program][accountSize].addons.allAddons
                }
                className={`${buttonVariants({ variant: "purple" })}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Place Order
              </Link>
            )}

            {!holdingOnNews && !splitChecked && !holdingWeekendChecked && (
              <Link
                href={productLinks[platform][program][accountSize].baseLink}
                className={`${buttonVariants({ variant: "purple" })}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Place Order
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Title({ children }: { children: ReactNode }) {
  return <div className="sm:text-lg text-base font-medium">{children}</div>;
}

function Break() {
  return <div className="border border-purple-900"></div>;
}
