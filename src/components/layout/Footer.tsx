import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Accueil", href: "#home" },
  { label: "Qui sommes-nous", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FBF7F1] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-20">
          {/* Navigation rapide */}
          <div className="order-2 text-center sm:order-1 sm:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#081b33]">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col items-center gap-2.5 sm:items-start">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#081b33]/90 transition-colors hover:text-[#1e7fd6]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées */}
          <div className="order-3 text-center sm:order-2 sm:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#081b33]">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col items-center gap-3 sm:items-start">
              <li>
                <a
                  href="tel:+213557152160"
                  className="flex items-center gap-2 text-sm font-medium text-[#081b33]/90 transition-colors hover:text-[#1e7fd6]"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                  +213 557 15 21 60
                </a>
              </li>
              <li>
                <a
                  href="mailto:direction@atlanticall-dz.com"
                  className="flex items-center gap-2 text-sm font-medium text-[#081b33]/90 transition-colors hover:text-[#1e7fd6]"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.75} />
                  direction@atlanticall-dz.com
                </a>
              </li>
            </ul>
          </div>

          {/* Logo + baseline + réseaux */}
          <div className="order-1 flex flex-col items-center text-center sm:order-3 sm:items-start sm:text-left">
            <Image
              src="/images/logo.svg"
              alt="Atlanticall"
              width={180}
              height={45}
              className="h-40 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-[#081b33]/80">
              Votre partenaire call center pour la conversion et la relation
              client B2B.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3 sm:justify-start">
              <a
                href="https://www.instagram.com/atlanticall_96"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#081b33]/10 text-[#081b33] transition-colors hover:bg-[#1e7fd6] hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/people/AtlantiCall/61594816197998/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#081b33]/10 text-[#081b33] transition-colors hover:bg-[#1e7fd6] hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#081b33]/10 pt-6 sm:flex-row">
          <p className="text-xs font-medium text-[#081b33]/70">
            © 2026 Atlanticall. Tous droits réservés.
          </p>
          <Link
            href="/mentions-legales"
            className="text-xs font-medium text-[#081b33]/70 transition-colors hover:text-[#1e7fd6]"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}