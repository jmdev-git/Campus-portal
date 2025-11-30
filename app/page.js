import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-8 sm:py-12">
      {/* Hero */}
      <section className="grid items-center gap-6 rounded-2xl bg-linear-to-br from-blue-600 to-sky-500 p-6 text-white shadow-lg ring-1 ring-white/20 sm:grid-cols-2 sm:p-8">
        <div className="order-2 sm:order-1 sm:text-left text-center">
          <h1 className="text-3xl font-bold sm:text-4xl custom-font">
            Learn. Explore. Connect.
          </h1>
          <p className="mt-2 text-white/90 text-sm line-clamp-2">
            CampusConnect is your campus in your pocket. Stay connected with
            your courses, never miss important announcements, and keep track of
            campus events and schedules—so you can focus on learning, growing,
            and enjoying student life, wherever you are.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start md:flex-row flex-col">
            <Link
              href="/login"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              Login
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 bg-blue-700/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700/40"
            >
              View Dashboard
            </Link>
          </div>
        </div>
        <div className="order-1 sm:order-2 flex justify-center">
          <Image
            src="/globe.svg"
            alt="Campus"
            width={160}
            height={160}
            priority
          />
        </div>
      </section>

      {/* About */}
      <section className="mt-8 grid gap-4 rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm backdrop-blur sm:grid-cols-3 sm:p-8">
        <div className="sm:col-span-2 sm:text-left text-center">
          <h2 className="text-xl font-semibold text-zinc-900">
            About CampusConnect
          </h2>
          <p className="mt-2 text-zinc-700 line-clamp-2 text-sm">
            CampusConnect is your gateway to campus life. It helps you stay
            informed about courses, announcements, events, and schedules,
            keeping you connected to everything happening around the university.
          </p>
        </div>
        <div className="flex items-center md:justify-start justify-center w-full md:w-auto sm:justify-end">
          <Link
            href="/login"
            className="inline-flex min-h-11 items-center w-full justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
