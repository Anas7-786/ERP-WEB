import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  return (
    <main className="bg-slate-50">
      <Navbar />
      <section className="py-24">
        <div className="container space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Pricing</p>
            <h1 className="mt-4 text-5xl font-semibold text-slate-950">Plans crafted for growing teams and enterprises.</h1>
            <p className="mt-6 text-xl leading-8 text-slate-600">
              Choose a Flowtics plan with transparent pricing, automation, and support for your business needs.
            </p>
          </div>
          <Pricing />
        </div>
      </section>
      <Footer />
    </main>
  );
}
