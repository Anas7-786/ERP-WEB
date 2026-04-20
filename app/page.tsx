"use client";

import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      <SectionDivider className="text-slate-50" />

      <section className="py-20 bg-white">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">The problem</p>
            <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Managing multiple businesses is messy.</h2>
            <div className="space-y-4 text-slate-600">
              <p>Separate logins, scattered data, no real-time consolidated reports.</p>
              <p>Complex ERPs like Odoo are hard to use, while simple tools like QuickBooks are limited.</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">The solution</p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-950">Flowtics brings everything into one platform—simple, powerful, and built for real business needs.</h3>
            <div className="mt-8 space-y-5 text-slate-600">
              {[
                "Unified business management for multiple companies.",
                "Modular ERP that activates only what you need.",
                "Real-time consolidated reporting without manual work."
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-sm">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Core features</p>
            <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Your real strength is the depth of the platform.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Flowtics combines modular ERP design, multi-business management, consolidated reporting, role-based access, smart automation, and real-time dashboards.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Modular ERP System",
                description: "Activate only what you need. Scale when you grow.",
                bullets: ["Finance Core (GL, AR, AP)", "Smart Receivables", "Smart Payables", "Inventory (optional)", "Advanced Analytics"]
              },
              {
                title: "Multi-Business Management",
                description: "Manage multiple companies with one login.",
                bullets: ["Separate books for each business", "Instant switching", "Role-based access"]
              },
              {
                title: "Consolidated Reporting",
                description: "Real-time group-level insights without manual consolidation.",
                bullets: ["Combined P&L", "Balance Sheet", "Cash Flow"]
              },
              {
                title: "Role-Based Access Control",
                description: "Full control over who sees what.",
                bullets: ["Accountant", "Manager", "CFO"]
              }
            ].map((feature) => (
              <div key={feature.title} className="card-glow rounded-[2rem] p-8">
                <h3 className="text-2xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-4 text-slate-600">{feature.description}</p>
                <ul className="mt-6 space-y-3 text-slate-600">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-glow rounded-[2rem] p-8">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-sky-600">Smart Automation</div>
              <p className="mt-4 text-slate-600">Reduce manual work with auto reconciliation, smart reminders, and transaction categorization.</p>
            </div>
            <div className="card-glow rounded-[2rem] p-8">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-sky-600">Real-Time Dashboard</div>
              <p className="mt-4 text-slate-600">Not reports—insights. Track cash position, overdues, and forecasts in a continuous overview.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider className="text-white" />

      <section className="py-20 bg-slate-50">
        <div className="container space-y-10">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">UI preview</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Dashboard widgets built for modern teams.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Clean preview cards show the type of analytics and workflows Flowtics delivers across finance, operations, and customer success.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: "Earnings", value: "$98.4K", label: "+18.2% this month" },
              { title: "Open invoices", value: "42", label: "Aging summary" },
              { title: "Pending tasks", value: "18", label: "Team action items" }
            ].map((card) => (
              <div key={card.title} className="card-glow rounded-[2rem] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-600">{card.title}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-950">{card.value}</p>
                <p className="mt-2 text-sm text-slate-500">{card.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
            <div className="card-glow rounded-[2rem] p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Cash flow</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">Revenue by channel</p>
                </div>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Live</span>
              </div>
              <div className="mt-8 h-52 rounded-[1.75rem] bg-slate-100 p-4">
                <div className="relative h-full rounded-[1.5rem] bg-gradient-to-br from-sky-500 to-indigo-500 p-4 text-white">
                  <div className="flex items-center justify-between text-sm">
                    <span>Revenue</span>
                    <span>+14%</span>
                  </div>
                  <div className="mt-6 h-40 rounded-[1.25rem] bg-white/10 p-4">
                    <div className="h-full rounded-[1rem] bg-gradient-to-br from-slate-900 to-slate-800" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="card-glow rounded-[2rem] p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Team status</p>
                <p className="mt-4 text-2xl font-semibold text-slate-950">8 active workflows</p>
                <div className="mt-6 space-y-4">
                  {[
                    { label: "Sales pipeline", value: "65%" },
                    { label: "Inventory alerts", value: "12 pending" }
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-200">
                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-glow rounded-[2rem] p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Profile</p>
                <div className="mt-5 flex items-center gap-4 rounded-[1.5rem] bg-slate-100 p-4">
                  <div className="h-14 w-14 rounded-3xl bg-sky-100" />
                  <div>
                    <p className="font-semibold text-slate-950">Avery Morales</p>
                    <p className="text-sm text-slate-500">Head of Operations</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-slate-600">
                  <div className="rounded-3xl bg-white p-4 shadow-sm">Active users: 1,204</div>
                  <div className="rounded-3xl bg-white p-4 shadow-sm">New leads: 24 this week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider className="text-slate-50" />

      <section className="py-20">
        <div className="container space-y-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Why Flowtics</p>
              <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">A better alternative to Odoo and QuickBooks.</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Flowtics is built for real business needs: simpler, faster, and focused on consolidated cash flow intelligence.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Compared to Odoo</p>
                <ul className="mt-6 space-y-4 text-slate-600">
                  {[
                    "Simpler UI",
                    "Faster setup",
                    "No unnecessary complexity"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Compared to QuickBooks</p>
                <ul className="mt-6 space-y-4 text-slate-600">
                  {[
                    "Multi-business support",
                    "Consolidation built-in",
                    "Scalable modules"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Your unique edge</p>
              <div className="mt-6 space-y-4 text-slate-600">
                {[
                  "Designed with Chartered Accountants",
                  "Built by professional developers",
                  "Focused on cash flow intelligence",
                  "Fully customizable to your workflow"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-600">How it works</p>
              <div className="mt-6 space-y-4 text-slate-600">
                {[
                  { step: "1", title: "Create your organization" },
                  { step: "2", title: "Add your businesses" },
                  { step: "3", title: "Start managing everything in one place" }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-3xl bg-slate-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-sky-100 text-sky-700 font-semibold">{item.step}</div>
                    <div>
                      <p className="font-semibold text-slate-950">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {[
              "SMEs",
              "Accounting firms",
              "Multi-business owners",
              "Startups scaling fast"
            ].map((item) => (
              <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-base font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Trust</p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-950">Supervised by Chartered Accountants. Developed by experienced tech professionals.</h3>
              </div>
              <div className="grid gap-3">
                <div className="rounded-3xl bg-slate-50 p-5 text-slate-600">Client logos coming soon</div>
                <div className="rounded-3xl bg-slate-50 p-5 text-slate-600">Testimonials coming soon</div>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                { quote: "Flowtics made consolidations painless across multiple entities.", source: "Aditya, CFO" },
                { quote: "The setup was quick and the UI feels refreshingly simple.", source: "Neha, Accounting Partner" }
              ].map((item) => (
                <div key={item.source} className="rounded-[1.75rem] bg-slate-50 p-6">
                  <p className="text-slate-700">“{item.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-slate-950">{item.source}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container space-y-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Pricing</p>
              <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Simple SaaS plans for every stage.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { title: "Starter", price: "$49/mo", items: ["Basic accounting", "1 business"] },
                { title: "Growth", price: "$99/mo", items: ["Multi-business", "Automation"] },
                { title: "Pro", price: "$199/mo", items: ["Full ERP + analytics", "Consolidation"] }
              ].map((plan, index) => (
                <motion.div
                  key={plan.title}
                  className="card-glow rounded-[2rem] p-8 transition-all duration-300 hover:scale-105 hover:rotate-[1deg] hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <p className="text-sm uppercase tracking-[0.32em] text-sky-600">{plan.title}</p>
                  <p className="mt-6 text-4xl font-semibold text-slate-950">{plan.price}</p>
                  <ul className="mt-6 space-y-3 text-slate-600">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full btn-brand">
                    Choose {plan.title}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Features compact />

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Customer feedback</p>
            <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Teams trust Flowtics to keep workflows aligned.</h2>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              “Flowtics helped us reduce reconciliation time by 40% while giving our leadership team a real-time pulse on revenue and inventory.”
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { quote: "A smooth rollout and instant visibility across our finance and support teams.", source: "Sofia, Head of Operations" },
              { quote: "The dashboards make it easy to find issues before they become problems.", source: "Marcus, Finance Director" }
            ].map((item) => (
              <div key={item.source} className="card-glow rounded-[2rem] p-8">
                <p className="text-lg text-slate-950">“{item.quote}”</p>
                <p className="mt-6 text-sm font-semibold text-slate-900">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container rounded-[2rem] border border-slate-200 bg-white p-12 text-center shadow-sm">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Get started</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Scale your operations with a single ERP system.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Book a demo today and see how Flowtics can simplify your accounting, inventory, CRM, and reporting workflows.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <a href="/contact" className="btn-brand">
              Book Demo
            </a>
            <a href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm text-slate-700 transition hover:bg-slate-100">
              Explore pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
