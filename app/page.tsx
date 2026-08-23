import Link from "next/link";

const stats = [
  { value: "1,240+", label: "Community members" },
  { value: "86", label: "Issues resolved" },
  { value: "42", label: "Active volunteers" },
];

const quickActions = [
  {
    number: "01",
    title: "Report an issue",
    description:
      "Tell your community about a local problem and get practical guidance on what to do next.",
    href: "/report",
    cta: "Report an issue",
  },
  {
    number: "02",
    title: "Explore events",
    description:
      "Discover community activities, initiatives, and opportunities to get involved.",
    href: "/events",
    cta: "Explore events",
  },
  {
    number: "03",
    title: "Volunteer",
    description:
      "Share your time and skills with people working to make the community better.",
    href: "/volunteers",
    cta: "Find opportunities",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-green-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Building better communities together
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Your community.
              <span className="block text-green-700">
                Your voice. Your action.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              CommuniNest helps people report local issues, discover community
              initiatives, and find meaningful ways to make their neighborhood
              better.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/report"
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
              >
                Report an issue
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Explore community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        aria-label="Community statistics"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="text-3xl font-bold text-slate-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick actions */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Get involved
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Start with one small action.
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Whether you want to raise an issue, discover what is happening
            nearby, or give your time, there is a place for you in the
            community.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
            >
              <span className="text-sm font-bold text-green-700">
                {action.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {action.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {action.description}
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-green-700 group-hover:underline">
                {action.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              How CommuniNest works
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From noticing a problem to taking action.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                1
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Tell us what is happening
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Describe a local issue in your own words. No complicated forms
                or technical knowledge required.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                2
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Understand the issue
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                CommuniNest uses AI to categorize the issue, estimate urgency,
                and suggest practical next steps.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                3
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Take meaningful action
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use the guidance to decide what to do next and get involved in
                improving your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI feature */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              AI-powered issue guidance
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Not sure what to do about a community issue?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Describe the problem and CommuniNest can help identify the issue
              type, assess its urgency, explain what may be happening, and
              suggest practical next steps.
            </p>

            <div className="mt-7">
              <Link
                href="/report"
                className="inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Try AI issue analysis →
              </Link>
            </div>
          </div>

          <div className="mt-10 hidden lg:block">
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-xl">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Example analysis
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="text-slate-400">Issue type</p>
                  <p className="font-semibold text-white">
                    Infrastructure
                  </p>
                </div>

                <div>
                  <p className="text-slate-400">Urgency</p>
                  <p className="font-semibold text-amber-400">Medium</p>
                </div>

                <div>
                  <p className="text-slate-400">Next step</p>
                  <p className="text-slate-200">
                    Document the issue and contact the relevant local authority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-900">CommuniNest</p>
            <p className="mt-1 text-sm text-slate-500">
              Building better communities together.
            </p>
          </div>

          <div className="flex gap-5 text-sm text-slate-500">
            <Link href="/report" className="hover:text-green-700">
              Report
            </Link>

            <Link href="/events" className="hover:text-green-700">
              Events
            </Link>

            <Link href="/volunteers" className="hover:text-green-700">
              Volunteers
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}