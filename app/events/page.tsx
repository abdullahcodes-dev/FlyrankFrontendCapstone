const events = [
  {
    date: "Sep 5",
    time: "9:00 AM – 12:00 PM",
    category: "Environment",
    title: "Neighborhood Clean-Up",
    location: "Riverside Park",
    description:
      "Join local residents for a community clean-up focused on shared public spaces and walkways.",
  },
  {
    date: "Sep 12",
    time: "11:00 AM – 1:00 PM",
    category: "Community",
    title: "Community Garden Workshop",
    location: "Greenfield Community Center",
    description:
      "Learn practical gardening basics and help plan the next season for the neighborhood garden.",
  },
  {
    date: "Sep 19",
    time: "5:00 PM – 7:00 PM",
    category: "Safety",
    title: "Community Safety Walk",
    location: "Oak Street Community Hub",
    description:
      "Walk through the neighborhood with other residents and identify areas that could be made safer.",
  },
  {
    date: "Sep 26",
    time: "2:00 PM – 4:00 PM",
    category: "Youth",
    title: "Youth Skills Exchange",
    location: "Central Library",
    description:
      "A community session where young people can share useful skills, ideas, and experiences with one another.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-green-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Community events
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Find something worth showing up for.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Discover local activities, community initiatives, and simple
              ways to connect with people working to make their neighborhood
              better.
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section
        aria-labelledby="upcoming-events"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Upcoming
          </p>

          <h2
            id="upcoming-events"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            What is happening in the community?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Explore upcoming activities and find an opportunity that matches
            your interests.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <span className="text-xs font-semibold uppercase">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="text-xl font-bold">
                    {event.date.split(" ")[1]}
                  </span>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {event.category}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {event.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {event.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-500">
                <p>
                  <span className="font-semibold text-slate-700">When:</span>{" "}
                  {event.date}, {event.time}
                </p>

                <p>
                  <span className="font-semibold text-slate-700">
                    Where:
                  </span>{" "}
                  {event.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Get involved
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Want to contribute beyond attending?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Community events are one way to make a difference. You can also
            share your time and skills by exploring volunteer opportunities.
          </p>

          <a
            href="/volunteers"
            className="mt-7 inline-flex rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
          >
            Explore volunteering →
          </a>
        </div>
      </section>
    </main>
  );
}