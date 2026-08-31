import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import UGCVideos from "@/components/UGCVideos";
import Services from "@/components/Services";
import ProjectShowcase from "@/components/ProjectShowcase";
import BeforeAfter from "@/components/BeforeAfter";
import WorkGrid from "@/components/WorkGrid";
import Process from "@/components/Process";
import Philosophy from "@/components/Philosophy";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Testimonials />
      <UGCVideos />
      <Services />
      <ProjectShowcase />
      <BeforeAfter />
      <WorkGrid />
      <Process />
      <Philosophy />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
