const plans = [
  {
    name: "Basic",
    price: "$49",
    frequency: "/mo",
    description: "Simple ERP essentials for small teams.",
    features: ["Accounting automation", "Inventory tracking", "CRM pipeline"],
    highlight: false
  },
  {
    name: "Pro",
    price: "$89",
    frequency: "/mo",
    description: "Advanced workflows for growing teams.",
    features: ["Multi-site operations", "Reporting suite", "Advanced permissions"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "",
    description: "Tailored ERP for large businesses.",
    features: ["Custom integrations", "Dedicated success", "Priority support"],
    highlight: false
  }
];

export default function Pricing({ compact }: { compact?: boolean }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container space-y-10">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Plans built for every stage of your business.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Transparent pricing with the right automation, security, and support for teams scaling from early-stage to enterprise.
          </p>
        </div>

        <div className={`grid gap-6 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"}`}>
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-[2rem] border p-8 shadow-sm transition ${plan.highlight ? "border-sky-200 bg-white" : "border-slate-200 bg-white"}`}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                </div>
                {plan.highlight ? <span className="rounded-full bg-sky-100 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-700">Popular</span> : null}
              </div>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-semibold text-slate-950">{plan.price}</span>
                <span className="mb-1 text-sm text-slate-500">{plan.frequency}</span>
              </div>
              <ul className="mt-8 space-y-4 text-sm text-slate-600">
                {plan.features.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 w-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-sky-600 hover:to-indigo-700">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
