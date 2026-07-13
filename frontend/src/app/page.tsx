import CallToAction from "@/components/Home/CallToAction";
import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/HeroBanner";
import Highlights from "@/components/Home/Highlights";
import HowItWorks from "@/components/Home/HowItWorks";
import Statistics from "@/components/Home/Statistics";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Statistics />
      <Highlights />
      <Testimonials />
      <HowItWorks/>
      <FAQ />
      <CallToAction />
    </div>
  )
}