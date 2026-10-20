import {
  TrendingUp,
  PhoneCall,
  Megaphone,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

const SERVICES: Service[] = [
  {
    icon: TrendingUp,
    title: "Conversion de leads",
    description:
      "Transformer les prospects intéressés en clients grâce à un accueil téléphonique réactif et un discours adapté à l'activité de nos clients.",
    accent: "bg-[#1e7fd6]",
  },
  {
    icon: PhoneCall,
    title: "Réception d'appels & prise de rendez-vous",
    description:
      "Les appels de vos prospects et clients atterrissent chez nous : nous les accueillons et leur fixons un rendez-vous directement dans votre agenda.",
    accent: "bg-sky-400",
  },
  {
    icon: Megaphone,
    title: "Téléprospection / Télémarketing",
    description:
      "Identifier et contacter de nouveaux prospects pour générer des opportunités commerciales pour nos clients.",
    accent: "bg-[#145da0]",
  },
  {
    icon: RefreshCw,
    title: "Suivi et relance commerciale",
    description:
      "Relancer les prospects en attente ou les rendez-vous non confirmés pour ne laisser passer aucune opportunité.",
    accent: "bg-sky-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FBF7F1] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="mx-auto max-w-2xl text-center">
  <span className="text-base font-bold uppercase tracking-wide text-[#1e7fd6] sm:text-lg">
    Nos services
  </span>
  <h2 className="mt-3 text-3xl font-bold text-[#081b33] sm:text-4xl">
    Ce que nous faisons pour vous
  </h2>
  <p className="mt-4 text-base text-[#0b2545] sm:text-lg">
    Des solutions d&apos;accueil et de conversion téléphonique pensées pour
    vos clients.
  </p>
</div>

        {/* Grille de services */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group cursor-default rounded-3xl bg-white p-7 text-primary-900 shadow-[0_4px_20px_rgba(8,27,51,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:rotate-1 hover:bg-[#081b33] hover:text-white hover:shadow-xl"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${service.accent} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-lg font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-700 transition-colors duration-300 group-hover:text-white/70">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}