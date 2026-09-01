import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProjectShowcase from "@/components/ProjectShowcase";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import WorkGrid from "@/components/WorkGrid";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import UGCVideos from "@/components/UGCVideos";
import Philosophy from "@/components/Philosophy";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <ProjectShowcase />
      <BeforeAfter />
      <UGCVideos />
      <Testimonials />
      <Services />
      <WorkGrid />
      <Process />
      <Philosophy />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
