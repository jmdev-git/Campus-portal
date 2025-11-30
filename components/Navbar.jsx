"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm ring-1 ring-zinc-200">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold text-blue-700">
          <Image src="/globe.svg" alt="CampusConnect" width={20} height={20} priority />
          <span className="bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent">CampusConnect</span>
          <span className="rounded-full bg-blue-100 px-2 text-xs text-blue-700">Beta</span>
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-zinc-800">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="hidden items-center gap-1 sm:flex">
          <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100">Home</Link>
          <Link href="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100">Dashboard</Link>
          <Link href="/dashboard#courses" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100">Courses</Link>
          <Link href="/dashboard#profile" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100">Profile</Link>
          <Link href="/login" className="ml-2 inline-flex min-h-10 items-center justify-center rounded-full bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700">Login</Link>
        </div>
      </nav>
      {open && (
        <div className="sm:hidden">
          <div className="mx-4 mb-3 grid gap-1 rounded-md border border-zinc-200 bg-white/95 p-2 shadow-sm">
            <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100">Home</Link>
            <Link href="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100">Dashboard</Link>
            <Link href="/dashboard#courses" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100">Courses</Link>
            <Link href="/dashboard#profile" className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100">Profile</Link>
            <Link href="/login" className="rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">Login</Link>
          </div>
        </div>
      )}
    </header>
  );
}