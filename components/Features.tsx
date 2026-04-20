"use client";

import { motion } from "framer-motion";
import { Calculator, Package, Users, BarChart3 } from "lucide-react";

const featureList = [
  {
    title: "Connected accounting",
    description: "Automate invoicing, expenses, and financial workflows from one unified platform.",
    icon: Calculator
  },
  {
    title: "Smart inventory",
    description: "Track stock, purchase orders, and warehouse operations in real time.",
    icon: Package
  },
  {
    title: "CRM & sales",
    description: "Manage leads, customer relationships, and order history across teams.",
    icon: Users
  },
  {
    title: "Reports & insights",
    description: "Build custom dashboards and analytics for every business function.",
    icon: BarChart3
  }
];

export default function Features({ compact }: { compact?: boolean }) {
  return (
    <section className="py-20 bg-white relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-slate-50 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>

      <div className="container space-y-10">
        <motion.div
          className="mx-auto max-w-3xl space-y-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Core capabilities</p>
          <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">A modern ERP platform for every team.</h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
            Flowtics centralizes accounting, inventory, sales, and operations so teams can move faster with complete visibility.
          </p>
        </motion.div>
        <div className={`grid gap-6 ${compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}`}>
          {featureList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="card-glow rounded-[2rem] p-8 transition-all duration-300 hover:scale-105 hover:rotate-[1deg] hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-600"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon size={28} />
                </motion.div>
                <h3 className="text-2xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="absolute top-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-white fill-current" points="0 0 0 100 2560 100"></polygon>
        </svg>
      </div>
    </section>
  );
}
