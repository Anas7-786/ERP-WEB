import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      <Navbar />
      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">About us</p>
            <h1 className="text-5xl font-semibold text-slate-950">Flowtics helps teams manage operations with clarity and speed.</h1>
            <p className="max-w-2xl text-xl leading-8 text-slate-600">
              Flowtics brings together finance, inventory, sales, and operations in one polished ERP platform designed for modern businesses.
            </p>
          </div>
          <div className="card-glow rounded-[2rem] p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Our mission</p>
            <p className="mt-5 text-slate-600 leading-8">
              We help organizations replace disconnected systems with a single, beautiful ERP experience that is fast, intuitive, and reliable.
            </p>
            <div className="mt-10 space-y-6 text-slate-700">
              {[
                { title: "Modern workflows", detail: "Automate repetitive tasks and reduce manual handoffs." },
                { title: "Actionable insights", detail: "Give leaders the metrics they need for better decisions." },
                { title: "Scalable delivery", detail: "Support growing teams with configurable operations and secure access." }
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-slate-100 p-5">
                  <p className="text-lg font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container space-y-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { count: "24/7", label: "Support" },
              { count: "50+", label: "Integrations" },
              { count: "30m", label: "Fast onboarding" }
            ].map((item) => (
              <div key={item.label} className="card-glow rounded-[2rem] p-8 text-center">
                <p className="text-4xl font-semibold text-slate-950">{item.count}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
