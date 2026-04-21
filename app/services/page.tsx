import { Header } from "@/components/header";
import { ServicesMenu } from "@/components/ServicesMenu";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/placeholders/services/69fba9_8e9bb1f7a2df92158f8bcfd3bb693d11.jpg"
            alt="Services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="font-sans text-[14px] md:text-[16px] font-normal tracking-[0.35em] mb-4 md:mb-6 text-heritage-deep-green">
            SERVICES
          </h1>
          <p className="font-serif text-4xl md:text-6xl mb-4 md:mb-6">
            CRAFTSMANSHIP
          </p>
          <p className="font-sans text-[14px] md:text-[16px] font-normal text-white/80 tracking-[0.2em]">
            Exacting standards for the discerning homeowner.
          </p>
        </div>
      </section>
      <ServicesMenu />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
