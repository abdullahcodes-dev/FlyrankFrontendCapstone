const steps = [
  {
    number: "01",
    title: "Report",
    description:
      "Tell CommuniNest what is happening in your community, using your own words.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Our AI analyzes the issue, identifies its general type and urgency, and explains what may be happening.",
  },
  {
    number: "03",
    title: "Take action",
    description:
      "Get practical next steps so you can decide how to respond or involve the right people.",
  },
];

const values = [
  {
    title: "Community first",
    description:
      "CommuniNest is designed around everyday problems that affect the people who live, work, and participate in a community.",
  },
  {
    title: "Practical guidance",
    description:
      "The goal is not to overwhelm people with information. It is to help them understand a problem and identify a sensible next step.",
  },
  {
    title: "Responsible AI",
    description:
      "AI provides guidance rather than pretending to know facts that were not provided. Users remain in control of what they do next.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              About CommuniNest
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Better communities start with{" "}
              <span className="text-green-700">people who care.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              CommuniNest is a community-focused platform that helps people
              understand local issues, discover ways to get involved, and turn
              small actions into meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Why CommuniNest */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Why CommuniNest
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Making it easier to turn concern into action.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-slate-600">
            <p>
              Community problems are often easy to notice but harder to act
              on. A broken street light, an unsafe area, a local event, or an
              opportunity to volunteer can all require someone to take the
              first step.
            </p>

            <p>
              CommuniNest brings these experiences together in one simple
              place. The goal is to make community participation more
              approachable, especially when people are unsure what to do next.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              How it works
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From a problem to a practical next step.
            </h2>

            <p className="mt-4 text-slate-600">
              CommuniNest keeps the experience simple and focused on helping
              people move forward.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-bold text-green-700">
                  {step.number}
                </p>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              AI-powered guidance
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI should help people act, not replace their judgment.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              CommuniNest uses an AI model to analyze reported community
              issues and provide structured guidance. It identifies a general
              issue type, estimates urgency, explains plausible possibilities,
              and suggests practical next steps.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              The system is designed to work with the information the user
              provides rather than inventing missing facts. The final decision
              about what to do always remains with the user.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Our approach
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built around useful, responsible participation.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-xl font-semibold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-green-200 bg-green-50 px-6 py-10 text-center sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Have a community issue to report?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Describe what is happening and let CommuniNest help you understand
            the situation and decide what to do next.
          </p>

          <a
            href="/report"
            className="mt-7 inline-flex rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800"
          >
            Report an issue
          </a>
        </div>
      </section>
    </main>
  );
}