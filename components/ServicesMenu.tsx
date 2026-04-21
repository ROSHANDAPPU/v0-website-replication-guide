"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesMenu.module.css";

const services = [
  {
    slug: "bathrooms",
    name: "Historic Bathroom Remodel",
    description:
      "Preserving the intimacy of a historic home while upgrading essential functions. Period-appropriate subway tile, hexagon floor mosaics, and restored cast iron tubs — master bathrooms starting at $24,000.",
    image: "/images/placeholders/servicesmenu/1d35e4_tudor-exterior-arterberry-cooke-pc-gavin-cater.jpg",
  },
  {
    slug: "kitchens",
    name: "Period-Appropriate Kitchens",
    description:
      "Kitchens that honor the architectural era — Craftsman shaker cabinets, Victorian beadboard — while concealing modern appliances and delivering ergonomic functionality for today's lifestyle. Starting at $35,000.",
    image: "/images/placeholders/servicesmenu/d654fa_af8549cc.jpg",
  },
  {
    slug: "historic-adu",
    name: "Historic ADU",
    description:
      "Detached ADUs, garage apartments, and studios designed to appear as original outbuildings — matching rooflines, siding profiles, and window muntin patterns. Starting at $200,000.",
    image: "/images/placeholders/servicesmenu/00cf3e_Tudor-Style-House-Renovation-Pennsylvania-Peter-Zimmerman-Architects-07-1-Kindesign.jpg",
  },
  {
    slug: "carriage-houses",
    name: "Carriage Houses, Garages & Carports",
    description:
      "Detached garages and carports featuring Hardie Shingle Shake, decorative brackets, and custom wood doors — built to house classic and collector vehicles with period-appropriate style. Starting at $37,000.",
    image: "/images/placeholders/servicesmenu/c5dbf8_Pulsa1_Hero.jpg",
  },
  {
    slug: "historic-preservation",
    name: "Historic Preservation & Porch Restoration",
    description:
      "Salvaging and repairing original materials using traditional joinery techniques. Grand wraparound porches, intricate millwork, and aging architectural details brought back to life without erasing the patina of time.",
    image: "/images/placeholders/servicesmenu/00cf3e_Tudor-Style-House-Renovation-Pennsylvania-Peter-Zimmerman-Architects-07-1-Kindesign.jpg",
  },
  {
    slug: "painting",
    name: "Historic Home Painting & Prep",
    description:
      "Painting as a preservation treatment — lead-safe surface prep, repair of damaged wood siding, and historically accurate color palettes suited to McKinney Historic District guidelines. Starting at $9/sqft.",
    image: "https://cdn.vox-cdn.com/thumbor/AfNC-ZaVF2mtc1zsFCH8lffsZ-c=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19565702/4570_University_Ave____Pierre_Galant_1.jpg",
  },
]

export function ServicesMenu() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      className="bg-black text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 py-16 rounded-lg" style={{backgroundColor: '#1B3A34'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-sans text-[13px] font-medium uppercase tracking-[0.15em] mb-8 text-white">EXPLORE OUR SERVICES</h2>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={service.slug}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <Link href={`/services/${service.slug}`} className="group flex items-center py-4 transition-all duration-300 gap-x-4">
                    <ArrowRight className={`text-white w-8 h-8 transition-all duration-300 ${activeService === index ? 'opacity-100' : 'opacity-50'}`} />
                    <span className={`transition-all duration-300 ${activeService === index ? 'text-white font-serif text-2xl tracking-wide border-l-2 border-white pl-4' : 'text-white/30 font-serif text-xl tracking-wide pl-4 group-hover:text-white/60 group-hover:pl-6'}`}>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px] hidden md:block rounded-lg overflow-hidden">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`${styles.serviceImage} ${
                  activeService === index ? styles.active : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1B3A34] to-transparent z-10" />
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white text-sm leading-relaxed shadow-lg">
                    <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}