export const metadata = {
  title: "Login – CampusConnect",
};

export default function LoginPage() {
  return (
    <div className="py-8 sm:py-12">
      <section className="mx-auto max-w-xl rounded-xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold text-zinc-900">Login</h1>
        <p className="mt-1 text-sm text-zinc-700">Sign in to access your student dashboard.</p>
        <form action="/dashboard" method="get" className="mt-6 grid gap-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-zinc-900">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@university.edu"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-2 ring-transparent focus:border-blue-600 focus:ring-blue-100"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-semibold text-zinc-900">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-2 ring-transparent focus:border-blue-600 focus:ring-blue-100"
            />
          </div>

          <button type="submit" className="inline-flex cursor-pointer min-h-12 items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            Login
          </button>
          <p className="text-xs text-zinc-600">This demo is static—submitting navigates to the dashboard.</p>
        </form>
      </section>
    </div>
  );
}