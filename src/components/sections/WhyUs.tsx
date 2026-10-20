import { TrendingUp, HeartHandshake, Zap, GraduationCap } from "lucide-react";
import Image from "next/image";

const REASONS = [
  {
    icon: TrendingUp,
    title: "Des résultats concrets",
    description:
      "Un suivi rigoureux de chaque appel pour maximiser la conversion de vos prospects en clients.",
    accent: "bg-[#1e7fd6]",
  },
  {
    icon: HeartHandshake,
    title: "Proximité & accompagnement",
    description:
      "Une équipe à l'écoute, dédiée aux besoins spécifiques de votre activité et de vos clients.",
    accent: "bg-sky-400",
  },
  {
    icon: Zap,
    title: "Réactivité",
    description:
      "Une prise en charge rapide de chaque appel pour ne jamais faire attendre vos prospects.",
    accent: "bg-[#145da0]",
  },
  {
    icon: GraduationCap,
    title: "Une équipe formée",
    description:
      "Des agents formés pour représenter au mieux votre image auprès de vos prospects et clients.",
    accent: "bg-sky-500",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#081b33] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonne gauche : texte + points */}
          <div>
            <span className="text-base font-bold uppercase tracking-[0.2em] text-[#1e7fd6] pb-4">
              Pourquoi Atlanticall
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
              Une équipe dédiée, à vos côtés.
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              {REASONS.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white ${reason.accent}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Colonne droite : photo */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl sm:h-[500px] lg:h-full lg:min-h-[600px]">
            <Image
              src="/images/why-us.jpg"
              alt="Équipe Atlanticall"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}