export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
          CommuniNest
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Empower Your Community
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Connect with your community, report local issues, discover
          initiatives, and take meaningful action together.
        </p>

        <p className="mt-6 text-sm text-slate-400">
          Frontend Capstone · Foundations
        </p>
      </div>
    </main>
  );
}