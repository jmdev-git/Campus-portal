import Image from "next/image";
import Card from "@/components/Card";

export const metadata = {
  title: "Dashboard – CampusConnect",
};

const announcements = [
  {
    title: "Spring Registration Opens",
    subtitle: "Opens Dec 10 · Closes Jan 20",
    body: "Meet your advisor before registering for classes.",
  },
  {
    title: "Library Hours Extended",
    subtitle: "Finals Week",
    body: "Open 7am–11pm from Dec 12–18.",
  },
  {
    title: "Wi‑Fi Upgrade Completed",
    subtitle: "Campus IT",
    body: "Improved coverage in labs and lecture halls.",
  },
];

const courses = [
  { code: "SAD101", name: "System Analysis and Design", instructor: "Dr. Patel", progress: 70, next: "Homework 5 due Fri" },
  { code: "OOP101", name: "Object Oriented Programming", instructor: "Prof. Lin", progress: 45, next: "Lab 7 on Wed" },
  { code: "GEE3", name: "Reading Visual Art", instructor: "Dr. Perez", progress: 85, next: "Midterm Review" },
];

const events = [
  { date: "Dec 12", time: "7:00 PM", title: "Student Hack Night", place: "Innovation Lab" },
  { date: "Dec 15", time: "4:00 PM", title: "Career Workshop", place: "Auditorium A" },
  { date: "Dec 18", time: "All Day", title: "Final Exams Begin", place: "Across campus" },
];

export default function DashboardPage() {
  return (
    <div className="py-8 sm:py-10">
      {/* Profile */}
      <section id="profile" className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-zinc-900 md:text-left text-center">Student Profile</h1>
        <div className="mt-3 flex md:flex-row flex-col md:items-start items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-700">KWM</div>
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-zinc-900">Kenneth William Sareno</p>
            <p className="text-sm text-zinc-700">BS Information Technology · Fourth Year</p>
            <div className="mt-2 flex flex-wrap md:justify-start justify-center md:justify-left gap-2">
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700">ID: 22-LN-3926</span>
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700">Status: Full-time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column: Announcements & Courses */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <section aria-labelledby="announcements">
          <div className="mb-2 flex items-center justify-between">
            <h2 id="announcements" className="text-lg font-semibold text-zinc-900">Announcements</h2>
            <a href="#" className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-300 bg-white px-3 text-sm font-semibold text-zinc-900 hover:border-zinc-400">View all</a>
          </div>
          <div className="grid gap-3">
            {announcements.map((a, i) => (
              <Card key={i} title={a.title} subtitle={a.subtitle}>{a.body}</Card>
            ))}
          </div>
        </section>

        <section id="courses" aria-labelledby="courses-title">
          <div className="mb-2 flex items-center justify-between">
            <h2 id="courses-title" className="text-lg font-semibold text-zinc-900">My Courses</h2>
            <a href="#" className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-300 bg-white px-3 text-sm font-semibold text-zinc-900 hover:border-zinc-400">Manage</a>
          </div>
          <div className="grid gap-3">
            {courses.map((c) => (
              <Card key={c.code} title={`${c.code} – ${c.name}`} subtitle={`Instructor: ${c.instructor}`}>
                <div className="mt-2 h-2 w-full rounded-full bg-zinc-200">
                  <div className="h-2 rounded-full bg-blue-600" style={{ width: `${c.progress}%` }} />
                </div>
                <p className="mt-2 text-xs text-zinc-600">{c.progress}% complete · Next: {c.next}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Events */}
      <section className="mt-6" aria-labelledby="events-title">
        <div className="mb-2 flex items-center justify-between">
          <h2 id="events-title" className="text-lg font-semibold text-zinc-900">Upcoming Events</h2>
          <a href="#" className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-300 bg-white px-3 text-sm font-semibold text-zinc-900 hover:border-zinc-400">Calendar</a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <Card key={i} title={e.title} subtitle={`${e.date} · ${e.time}`}>
              <p className="text-sm text-zinc-700">{e.place}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}