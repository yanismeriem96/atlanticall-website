
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#FBF7F1] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-[480px]">
            <Image
              src="/images/about.jpg"
              alt="Équipe Atlanticall"
              fill
              className="object-cover"
            />
          </div>

          {/* Texte */}
          <div>
            <span className="text-base font-bold uppercase tracking-[0.2em] text-[#1e7fd6]">
              Qui sommes-nous
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-[1.1] text-[#081b33] sm:text-5xl">
              Le centre d&apos;appels pensé pour vos clients.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#0b2545]/70 sm:text-lg">
              Atlanticall accompagne les entreprises, cabinets, centres
              de formation, organismes professionnels, dans la gestion de
              leur relation client par téléphone. De la réception
              d&apos;appels à la prise de rendez-vous, en passant par la
              conversion de leads, notre équipe agit comme une extension
              de la vôtre : réactive, formée et à l&apos;écoute des
              besoins spécifiques de chaque client que nous représentons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}