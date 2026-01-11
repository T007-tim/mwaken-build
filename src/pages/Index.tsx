import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RequestServiceModal from "@/components/RequestServiceModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      <Header onRequestService={openModal} />
      <main>
        <Hero onRequestService={openModal} />
        <About />
        <Services onRequestService={openModal} />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <RequestServiceModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
