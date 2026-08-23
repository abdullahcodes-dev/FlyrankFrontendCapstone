import Link from "next/link";

const opportunities = [
  {
    title: "Community Clean-Up",
    category: "Environment",
    description:
      "Help clean and improve shared public spaces in your neighborhood.",
    commitment: "2–3 hours",
    location: "Local community",
    spots: "Open to everyone",
  },
  {
    title: "Community Event Support",
    category: "Events",
    description:
      "Help organize, welcome attendees, and support local community events.",
    commitment: "3–4 hours",
    location: "Community center",
    spots: "Several spots available",
  },
  {
    title: "Youth Learning Support",
    category: "Education",
    description:
      "Share your knowledge and help younger community members with learning activities.",
    commitment: "2 hours / week",
    location: "Local learning center",
    spots: "Volunteers needed",
  },
  {
    title: "Senior Community Support",
    category: "Community Care",
    description:
      "Spend time with older community members and help with simple community activities.",
    commitment: "1–2 hours / week",
    location: "Nearby neighborhoods",
    spots: "Open to volunteers",
  },
  {
    title: "Digital Skills Help",
    category: "Technology",
    description:
      "Help community members learn basic digital skills and use everyday online services.",
    commitment: "2 hours / week",
    location: "Community center",
    spots: "Skills-based",
  },
  {
    title: "Neighborhood Awareness",
    category: "Community",
    description:
      "Help share useful information about local initiatives, events, and community issues.",
    commitment: "Flexible",
    location: "Online + local",
    spots: "Open to everyone",
  },
];

const reasons = [
  {
    number: "01",
    title: "Make a local difference",
    description:
      "Your time can directly contribute to improving the places and communities around you.",
  },
  {
    number: "02",
    title: "Meet people",
    description:
      "Connect with people who care about the same community and causes that you do.",
  },
  {
    number: "03",
    title: "Use your skills",
    description:
      "Share what you already know while gaining experience through meaningful community work.",
  },
];

export default function VolunteersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-green-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Get involved
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Give your time to something that matters.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Find simple, meaningful ways to contribute to your community.
              Whether you have an afternoon or a few hours each week, there is
              a way to get involved.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#opportunities"
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
              >
                Explore opportunities
              </a>

              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Explore events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section
        id="opportunities"
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Volunteer opportunities
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Find a way to contribute.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Explore a few example opportunities and find something that fits
            your interests, skills, and available time.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <article
              key={opportunity.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {opportunity.category}
                </span>

                <span className="text-xs font-medium text-slate-400">
                  {opportunity.spots}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {opportunity.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {opportunity.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Time commitment</span>
                  <span className="font-medium text-slate-700">
                    {opportunity.commitment}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-500">Location</span>
                  <span className="font-medium text-slate-700">
                    {opportunity.location}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-100"
              >
                Learn more
              </button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          These opportunities are representative examples for the CommuniNest
          demo.
        </p>
      </section>

      {/* Why volunteer */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Why volunteer?
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Small contributions can go a long way.
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.number}>
                <span className="text-sm font-bold text-green-700">
                  {reason.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-6 py-12 sm:px-10 lg:px-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Be part of the community
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Not sure where to start?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Start by exploring local events or report an issue that needs
              attention. Every contribution helps build a more connected
              community.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Explore events →
              </Link>

              <Link
                href="/report"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Report an issue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}