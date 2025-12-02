export const metadata = {
  title: "Register – CampusConnect",
};

export default function RegisterPage() {
  return (
    <div className="py-8 sm:py-12">
      <section className="mx-auto max-w-xl rounded-xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-bold text-zinc-900">Create Account</h1>
        <p className="mt-1 text-sm text-zinc-700">Join CampusConnect to access your student portal.</p>
        <form action="/dashboard" method="get" className="mt-6 grid gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-zinc-900">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="e.g., Jane Doe"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-2 ring-transparent focus:border-blue-600 focus:ring-blue-100"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-2 ring-transparent focus:border-blue-600 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="confirm" className="mb-1 block text-sm font-semibold text-zinc-900">Confirm Password</label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              required
              placeholder="Re-enter your password"
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none ring-2 ring-transparent focus:border-blue-600 focus:ring-blue-100"
            />
          </div>

          <button type="submit" className="inline-flex cursor-pointer min-h-12 items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            Create Account
          </button>
          <p className="text-xs text-zinc-600">This demo is static—submitting navigates to the dashboard.</p>
          <p className="mt-2 text-sm text-zinc-700">
            Already have an account? <a href="/login" className="font-semibold text-blue-700 hover:text-blue-800">Login</a>
          </p>
        </form>
      </section>
    </div>
  );
}
