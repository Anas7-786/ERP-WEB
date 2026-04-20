"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 min-h-[80vh]">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-indigo-400/25 blur-3xl"></div>
      </div>

      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start relative z-10">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Control Your Business. Not Just Your Accounts.
            </h1>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-brand">
              Get Demo
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Start Free Trial
            </Link>
          </div>
          <p className="max-w-2xl text-sm text-slate-500">Built with Chartered Accountants. Powered by Modern Technology.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Reliable operations", subtitle: "Automated workflows" },
              { title: "Modern reporting", subtitle: "Fast metrics" },
              { title: "Flexible controls", subtitle: "Role-based access" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:-mt-8 space-y-5 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_40px_120px_rgba(15,23,42,0.08)] sm:p-8 relative float-animation"
          style={{
            transform: `translateY(${scrollY * 0.1}px) perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(0.95)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Glow behind dashboard */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl -z-10 glow-animation"></div>

          <div className="flex items-center justify-between rounded-3xl bg-slate-50 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">Flowtics Dashboard</p>
              <p className="text-sm text-slate-500">Overview of key business metrics</p>
            </div>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">Live</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Earnings</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">$98.3K</p>
              <p className="mt-2 text-sm text-slate-500">+18.2% this month</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Payroll</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">$24.1K</p>
              <p className="mt-2 text-sm text-slate-500">Updated hourly</p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>Tasks completed</span>
              <span>72%</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600" />
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-3xl bg-sky-100" />
              <div>
                <p className="text-sm font-semibold text-slate-950">Avery Morales</p>
                <p className="text-sm text-slate-500">Head of Operations</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-slate-600">
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">Active clients</p>
                <p className="mt-1 text-slate-500">48 companies</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">Open tickets</p>
                <p className="mt-1 text-slate-500">12 issues</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
