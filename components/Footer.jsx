import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex gap-4 text-sm text-zinc-700">
            <Link href="#support" className="hover:text-zinc-900">Support</Link>
            <Link href="#info" className="hover:text-zinc-900">Campus Info</Link>
            <Link href="#policies" className="hover:text-zinc-900">Policies</Link>
          </div>
          <p className="text-sm text-zinc-500">© 2025 CampusConnect · Fast, mobile-first student portal</p>
        </div>
      </div>
    </footer>
  );
}