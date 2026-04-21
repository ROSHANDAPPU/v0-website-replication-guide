"use client";

import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import './HistoricPreservation.css';

type Service = {
  id: string;
  title: string;
  tagline?: string;
  summary: string;
  year?: string;
  category?: string;
  image?: string; // url or import
};

const SERVICES: Service[] = [
  {
    id: "gc",
    title: "General Construction & Framing",
    summary:
      "Reliable structural work that forms the backbone of any home improvement project. This service covers essential framing, load bearing support, and solid foundational construction designed for long lasting performance.",
    category: "Construction",
    year: "2025",
    image: "/craftsman-restoring-vintage-wooden-staircase-1920s.jpg"
  },
  {
    id: "rm",
    title: "Full-Home Remodels",
    summary:
      "A complete transformation of interior spaces with thoughtful design choices, functional improvements, and modern aesthetics, tailored to bring a renewed identity to your home.",
    category: "Remodel",
    year: "2025",
    image: "/elegant-1920s-craftsman-home-interior-woodwork.jpg"
  },
  {
    id: "kt",
    title: "Kitchens",
    summary:
      "Custom kitchen upgrades that blend utility and refined style. From layout reconfiguration to cabinetry and lighting, this service enhances the heart of the home.",
    category: "Interiors",
    year: "2025",
    image: "/arts-and-crafts-cottage-kitchen-renovation-vintage.jpg"
  },
  {
    id: "bt",
    title: "Bathrooms",
    summary:
      "Upgraded bathrooms with improved comfort, durability, and visual appeal. This includes tile work, fixtures, storage optimization, and design touches suited to your space.",
    category: "Interiors",
    year: "2025",
    image: "/tudor-revival-home-renovation-elegant-interior.jpg"
  },
  {
    id: "pt",
    title: "Interior Painting & Finishes",
    summary:
      "A refined interior update with color choices, finish textures, and detail work. This service highlights the character of each room using cohesive tones and high quality materials.",
    category: "Finishes",
    year: "2025",
    image: "/farmhouse-interior-rustic-beams-white-walls-modern.jpg"
  }
];

const VerticalText = ({ className, isVisible }: { className: string, isVisible: boolean }) => (
  <span className={`verticalText ${className} ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
    H O M E S
  </span>
);

export default function InResidenceServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.5 });

  return (
    <section className={`inResidenceSection relative ${isVisible ? 'green-bg' : ''}`}>
      <VerticalText className="left" isVisible={isVisible} />
      <VerticalText className="right" isVisible={isVisible} />
      <h2 className="sectionTitle">In Residence</h2>
      <div className="inResidenceContainer">
        {SERVICES.map((service) => (
          <div key={service.id} className="inResidenceCard">
            <img
              src={service.image}
              alt={service.title}
              className="inResidenceImage"
            />
            <h3 className="inResidenceCardTitle">{service.title}</h3>
            <p className="inResidenceCardDescription">{service.summary}</p>
            <span className="inResidenceCardCategory">
              {service.category} | {service.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}