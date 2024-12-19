import {
  AboutUs,
  ChallengeConfig,
  Educate,
  Faq,
  FastReliablePayouts,
  GetStarted,
  GuaranteedPayouts,
  Help,
  Hero,
  JoinFastest,
  PayoutTicker,
  StartChallenge,
  SuccessStories,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <PayoutTicker />
      <GetStarted />
      <ChallengeConfig />
      <GuaranteedPayouts />
      <AboutUs />
      <FastReliablePayouts />
      <JoinFastest />
      <SuccessStories />
      <Educate />
      <Faq />
      <Help />
      <StartChallenge />
    </main>
  );
}
