"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, ChevronDown } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      {/* Photo plein cadre */}
      <Image
        src="/images/contact-team.jpg"
        alt="Équipe Atlanticall"
        fill
        className="object-cover"
      />
      {/* Filtre léger */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,27,51,0.4) 0%, rgba(8,27,51,0.65) 50%, rgba(8,27,51,0.88) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center">
          <span className="text-base font-bold uppercase tracking-[0.2em] text-[#1e7fd6]">
            Contact
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
            Parlons de votre projet.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Que vous souhaitiez devenir client ou rejoindre notre équipe,
            écrivez-nous, on vous répond rapidement.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <a
              href="tel:+213557152160"
              className="flex items-center gap-2 text-white transition-colors hover:text-sky-300"
            >
              <Phone className="h-5 w-5" strokeWidth={1.75} />
              <span className="font-medium">+213 557 15 21 60</span>
            </a>
            <a
              href="mailto:direction@atlanticall-dz.com"
              className="flex items-center gap-2 text-white transition-colors hover:text-sky-300"
            >
              <Mail className="h-5 w-5" strokeWidth={1.75} />
              <span className="font-medium">direction@atlanticall-dz.com</span>
            </a>
          </div>
        </div>

        {/* Formulaire centré */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl bg-white p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#081b33]"
              >
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-lg border border-[#081b33]/15 px-4 py-2.5 text-sm text-[#081b33] outline-none transition-colors focus:border-[#1e7fd6]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#081b33]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-[#081b33]/15 px-4 py-2.5 text-sm text-[#081b33] outline-none transition-colors focus:border-[#1e7fd6]"
              />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-[#081b33]"
              >
                Téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1.5 w-full rounded-lg border border-[#081b33]/15 px-4 py-2.5 text-sm text-[#081b33] outline-none transition-colors focus:border-[#1e7fd6]"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-sm font-medium text-[#081b33]"
              >
                Objet de la demande
              </label>
              <div className="relative mt-1.5">
                <select
                  id="subject"
                  name="subject"
                  className="w-full appearance-none rounded-lg border border-[#081b33]/15 bg-white px-4 py-2.5 pr-10 text-sm text-[#081b33] outline-none transition-colors focus:border-[#1e7fd6]"
                >
                  <option value="Devenir client">Devenir client</option>
                  <option value="Postuler">Postuler chez Atlanticall</option>
                  <option value="Autre">Autre</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#081b33]/50"
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-[#081b33]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full resize-none rounded-lg border border-[#081b33]/15 px-4 py-2.5 text-sm text-[#081b33] outline-none transition-colors focus:border-[#1e7fd6]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 w-full rounded-lg bg-[#081b33] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#145da0] disabled:opacity-60"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-sm font-medium text-emerald-600">
              Message envoyé ! Nous vous répondrons rapidement.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-600">
              Une erreur est survenue. Réessayez ou contactez-nous
              directement par téléphone.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}