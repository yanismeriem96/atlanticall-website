"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Accueil", href: "#home" },
  { label: "Qui sommes-nous", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 lg:top-4 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-[#081b33]/10 bg-white/60 px-5 py-3 backdrop-blur-md lg:px-6">
        {/* Logo */}
        <Link href="#home" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.svg"
            alt="Atlanticall"
            width={220}
            height={55}
            priority
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-1.5 text-sm font-bold text-[#081b33] transition-colors hover:bg-[#081b33]/5 hover:text-[#081b33]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden shrink-0 lg:block">
          <Link
            href="#contact"
            className="rounded-lg bg-sky-300 px-6 py-2 text-sm font-semibold text-[#081b33] transition-colors hover:bg-[#081b33] hover:text-white"
          >
            Demander un devis
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-md p-2 text-[#081b33] lg:hidden"
          aria-label="Menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="mx-auto mt-2 max-w-7xl rounded-xl border border-[#081b33]/10 bg-white px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-semibold text-[#081b33]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 block w-fit rounded-lg bg-sky-300 px-6 py-2.5 text-center text-sm font-semibold text-[#081b33]"
              >
                Demander un devis
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}