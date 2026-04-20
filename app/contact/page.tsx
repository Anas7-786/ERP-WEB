import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      <Navbar />

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Contact</p>
            <h1 className="text-5xl font-semibold text-slate-950">Talk to the Flowtics team.</h1>
            <p className="max-w-2xl text-xl leading-8 text-slate-600">
              Need help choosing a plan or want a custom demo for your business? We’re here to help you launch your ERP transformation.
            </p>
          </div>
          <div className="card-glow rounded-[2rem] p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-600">Quick contact</p>
            <div className="mt-8 space-y-6 text-slate-700">
              <div>
                <p className="text-lg font-semibold text-slate-950">Email</p>
                <p className="mt-2 text-sm text-slate-500">hello@flowtics.com</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-950">Phone</p>
                <p className="mt-2 text-sm text-slate-500">+1 (555) 321-9876</p>
              </div>
              <a
                href="https://wa.me/15553219876"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
