"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { Wrench, CircleHelp, MessageSquare, Calendar, ShieldCheck, ChevronDown } from "lucide-react"

const postProjectCare = {
  eyebrow: "POST-PROJECT CARE",
  title: "AFTERCARE & CUSTOMER SERVICE",
  subtitle: "ONE-YEAR WORKMANSHIP CORRECTION (CALLBACK) PERIOD",
  description: "After your project is completed, we stand behind our workmanship for one year. If something we installed isn’t performing as intended, we return to correct it—calmly, promptly, and with minimal disruption.",
  services: [
    {
      icon: <Wrench size={24} />,
      text: "What's covered?",
      content: "Our one-year workmanship warranty covers labor and installation for all items included in your project's scope of work. This includes things like cabinet installation, tile setting, and paint application. We stand by the quality of our craftsmanship.",
    },
    {
      icon: <CircleHelp size={24} />,
      text: "What's not covered?",
      content: "The warranty does not cover damage caused by misuse, neglect, or accidents. It also excludes issues arising from pre-existing conditions, normal wear and tear, and products or materials covered by a separate manufacturer's warranty.",
    },
    {
      icon: <MessageSquare size={24} />,
      text: "How to request a service?",
      content: "To request a callback service, simply email us at service@doublerr.com with a description of the issue and any relevant photos. You can also call our office during business hours. We'll create a service ticket and schedule a visit.",
    },
    {
      icon: <Calendar size={24} />,
      text: "Typical response & scheduling",
      content: "We prioritize warranty claims and will typically respond within 24-48 business hours to assess the situation. A site visit will be scheduled at the earliest mutually convenient time, usually within one to two weeks.",
    },
    {
      icon: <ShieldCheck size={24} />,
      text: "Manufacturer warranties.",
      content: "Many products used in your renovation, such as appliances, faucets, and windows, come with their own manufacturer's warranty. We will provide you with all the necessary documentation to file a claim directly with the manufacturer if needed.",
    },
  ],
};

export function PostProjectCare() {
  return (
    <section className="bg-brand-beige py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-[13px] font-medium uppercase tracking-[0.15em]" style={{color: '#1B3A34'}}>{postProjectCare.eyebrow}</p>
          <h2 className="font-serif font-semibold text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.015em] mt-2 text-white">{postProjectCare.title}</h2>
          <h3 className="text-2xl font-bold text-white mt-4">{postProjectCare.subtitle}</h3>
          <p className="max-w-2xl mx-auto text-white mt-6">{postProjectCare.description}</p>
        </div>
        <Accordion.Root type="single" collapsible className="space-y-3">
          {postProjectCare.services.map((service, index) => (
            <Accordion.Item key={index} value={`item-${index}`} className="bg-[#1B3A34] border border-[#2a574e] hover:border-[#4a8a7e] hover:bg-[#1f4a3e] shadow-md hover:shadow-lg hover:shadow-[#1B3A34]/40 transition-all duration-300 rounded-lg">
              <Accordion.Header>
                <Accordion.Trigger className="group flex items-center justify-between w-full p-6 text-left">
                  <div className="flex items-center border-l-2 border-[#2a574e] group-hover:border-l-[#4a8a7e] pl-4 transition-all duration-300">
                    <div className="text-white">
                      {service.icon}
                    </div>
                    <p className="text-lg font-serif font-semibold ml-6 text-white tracking-wide">
                      {service.text}
                    </p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-[#4a8a7e] transform transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden transition-all duration-300 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="px-6 pb-5 pt-2 text-white/70 text-sm leading-relaxed border-l-2 border-[#2a574e]">
                  <p className="font-sans text-white/70">{service.content}</p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
