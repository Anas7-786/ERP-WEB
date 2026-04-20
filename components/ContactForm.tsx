"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="card-glow rounded-[2rem] border border-slate-200 p-8 shadow-sm">
      <h2 className="text-3xl font-semibold text-slate-950">Send a message</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">Tell us what you need and we’ll connect you with the right Flowtics plan.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-700">
            <span>Name</span>
            <input required name="name" type="text" placeholder="Your name" className="w-full rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100" />
          </label>
          <label className="space-y-2 text-sm text-slate-700">
            <span>Email</span>
            <input required name="email" type="email" placeholder="you@example.com" className="w-full rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100" />
          </label>
        </div>
        <label className="space-y-2 text-sm text-slate-700">
          <span>Message</span>
          <textarea required name="message" rows={5} placeholder="Tell us about your goals" className="w-full rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100" />
        </label>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" className="btn-brand w-full sm:w-auto">
            Send message
          </button>
          <p className="text-sm text-slate-500">Prefer WhatsApp? Quick replies in minutes.</p>
        </div>
        {sent ? <p className="rounded-3xl bg-sky-50 px-5 py-4 text-sm text-slate-700">Thanks! Your message is received. We’ll get back to you shortly.</p> : null}
      </form>
    </div>
  );
}
