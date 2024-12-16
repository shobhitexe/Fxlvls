import {
  AboutUs,
  FastReliablePayouts,
  GetStarted,
  GuaranteedPayouts,
  Hero,
  PayoutTicker,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <PayoutTicker />
      <GetStarted />
      <GuaranteedPayouts />
      <AboutUs />
      <FastReliablePayouts />
    </main>
  );
}
