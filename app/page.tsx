import ContentSection from "@/components/content-3";
import FAQsThree from "@/components/faqs-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-8";



export default function Home() {
  return (
    <div>
      <HeroSection/>
      <IntegrationsSection/>
      <ContentSection/>
      <FAQsThree/>
      <FooterSection/>
    </div>
  );
}
