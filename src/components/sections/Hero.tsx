import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[560px] items-center overflow-hidden pt-24 pb-16 sm:min-h-[650px] lg:h-screen lg:py-0"
    >
      {/* Photo plein cadre */}
      <Image
        src="/images/hero-agent.jpg"
        alt="Agent Atlanticall au téléphone"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[75%_20%] sm:object-[70%_center] lg:object-center"
      />

      {/* Overlay mobile : foncé en bas, transparent en haut */}
<div
  className="absolute inset-0 lg:hidden"
  style={{
    background:
      "linear-gradient(to top, rgba(8,27,51,0.95) 0%, rgba(8,27,51,0.75) 25%, rgba(8,27,51,0.35) 55%, rgba(8,27,51,0.05) 100%)",
  }}
/>

{/* Overlay desktop : foncé en bas à gauche, de plus en plus léger vers le haut et la droite */}
<div
  className="absolute inset-0 hidden lg:block"
  style={{
    background:
      "linear-gradient(to top, rgba(8,27,51,0.85) 0%, rgba(8,27,51,0.45) 35%, transparent 75%), linear-gradient(to right, rgba(8,27,51,0.65) 0%, rgba(8,27,51,0.4) 30%, rgba(8,27,51,0.12) 60%, transparent 100%)",
  }}
/>

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-7xl self-end px-6 lg:self-center lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Votre service client,
            <span className="block text-sky-300">réinventé.</span>
          </h1>
          <p className="mt-5 text-base font-medium text-white/90 sm:mt-6 sm:text-lg">
            Atlanticall accompagne votre entreprise avec des solutions
            d&apos;accueil téléphonique, de support client et de
            téléprospection sur mesure. Réactives, humaines, disponibles
            quand vous en avez besoin.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <Link
              href="#contact"
              className="w-full rounded-lg bg-sky-300 px-8 py-3.5 text-center text-sm font-semibold text-primary-900 transition-colors hover:bg-accent sm:w-auto"
            >
              Nous contacter
            </Link>
            <Link
              href="#services"
              className="w-full rounded-lg border border-white/60 bg-white/10 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}