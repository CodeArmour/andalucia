"use client";

import { useEffect, useState } from "react";
import type { PageId, ServiceId } from "@/lib/content";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ServicesPage from "@/components/pages/ServicesPage";
import IndustriesPage from "@/components/pages/IndustriesPage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import TeamPage from "@/components/pages/TeamPage";
import InsightsPage from "@/components/pages/InsightsPage";
import CareersPage from "@/components/pages/CareersPage";
import ContactPage from "@/components/pages/ContactPage";

export default function AndaluciaApp({ initialPage = "home" }: { initialPage?: PageId }) {
  const [activePage, setActivePage] = useState<PageId>(initialPage);
  const [activeService, setActiveService] = useState<ServiceId>("civil");

  const navigate = (page: PageId, service?: ServiceId) => {
    if (service) setActiveService(service);
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      const img = document.querySelector<HTMLElement>(".hero-img");
      if (img && activePage === "home")
        img.style.transform = `scale(1.04) translateY(${window.scrollY * 0.15}px)`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activePage]);

  useEffect(() => {
    const selector =
      ".pf-img, .ic-item, .project-grid-photo, .career-photo, .fnd-img, .about-hero-img";
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("motion-photo", "is-visible"),
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => {
      element.classList.add("motion-photo");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activePage]);

  return (
    <>
      <Navigation activePage={activePage} onNavigate={navigate} />
      {activePage === "home" && <HomePage onNavigate={navigate} />}
      {activePage === "about" && <AboutPage onNavigate={navigate} />}
      {activePage === "services" && (
        <ServicesPage
          activeService={activeService}
          setActiveService={setActiveService}
          onNavigate={navigate}
        />
      )}
      {activePage === "industries" && <IndustriesPage onNavigate={navigate} />}
      {activePage === "projects" && <ProjectsPage onNavigate={navigate} />}
      {activePage === "team" && <TeamPage onNavigate={navigate} />}
      {activePage === "insights" && <InsightsPage onNavigate={navigate} />}
      {activePage === "careers" && <CareersPage onNavigate={navigate} />}
      {activePage === "contact" && <ContactPage onNavigate={navigate} />}
      <Footer onNavigate={navigate} />
    </>
  );
}
