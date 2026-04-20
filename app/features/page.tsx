import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";

export default function FeaturesPage() {
  return (
    <main className="bg-slate-50">
      <Navbar />
      <section className="py-24">
        <div className="container space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Features</p>
            <h1 className="mt-4 text-5xl font-semibold text-slate-950">Everything a modern ERP team needs.</h1>
            <p className="mt-6 text-xl leading-8 text-slate-600">
              Deep functionality across accounting, inventory, CRM, and reporting so your business can run with clarity and speed.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {[
              {
                title: "Accounting",
                description: "Close books faster, automate invoices, and maintain compliance with audit-ready records.",
                bullets: ["Auto journal entries", "Multi-currency support", "Comprehensive ledgers"]
              },
              {
                title: "Inventory",
                description: "Stay ahead of stock levels, purchase orders, and warehouse workflows with real-time insights.",
                bullets: ["Stock tracking", "Demand forecasting", "Multi-location inventory"]
              },
              {
                title: "CRM",
                description: "Grow relationships with a clean customer pipeline backed by order history and service context.",
                bullets: ["Lead lifecycle", "Customer 360 view", "Pipeline alerts"]
              },
              {
                title: "Reports",
                description: "Generate executive summaries, variance reports, and KPI dashboards in seconds.",
                bullets: ["Custom dashboards", "Financial analytics", "Scheduled reporting"]
              }
            ].map((item) => (
              <div key={item.title} className="card-glow rounded-[2rem] p-10">
                <h2 className="text-3xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-4 text-slate-600">{item.description}</p>
                <ul className="mt-6 space-y-3 text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Features />
        </div>
      </section>
      <Footer />
    </main>
  );
}
