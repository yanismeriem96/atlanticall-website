import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - Atlanticall",
};

export default function MentionsLegales() {
  return (
    <div className="bg-[#FBF7F1]">
    <main className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-[#081b33]">Mentions légales</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#0b2545]/80">
        <section>
  <h2 className="text-lg font-bold text-[#081b33]">
    1. Présentation de l&apos;entreprise
  </h2>
  <p className="mt-2">
  Le site atlanticall-dz.com est édité par Abderrahmane Meriem,
  exerçant en tant qu&apos;entreprise individuelle (personne physique)
  sous le nom commercial Atlanticall, dont le siège d&apos;activité est
  situé à Rue Metiche Mouh, Bâtiment Selmoune, Local n° 5, 3ème étage,
  Wilaya de Tizi Ouzou, Algérie.
</p>
  <ul className="mt-3 list-disc space-y-1 pl-5">
    <li>Registre de Commerce (RC) : 15/00-5244108A26</li>
    <li>NIF (Numéro d&apos;Identification Fiscale) : 15815010081512001500</li>
    <li>NIS (Numéro d&apos;Identification Statistique) : 195815010081535</li>
    <li>NIN (Numéro d&apos;Identification Nationale) : 109580487008150001</li>
    <li>Article d&apos;Imposition : 15014805058</li>
  </ul>
</section>

        <section>
          <h2 className="text-lg font-bold text-[#081b33]">2. Contact</h2>
          <p className="mt-2">
            Email : direction@atlanticall-dz.com
            <br />
            Téléphone : +213 557 15 21 60
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#081b33]">
            3. Hébergement
          </h2>
          <p className="mt-2">
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, États-Unis.
            <br />
            Le nom de domaine est enregistré auprès de Hostinger
            (Hostinger International Ltd.).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#081b33]">
            4. Propriété intellectuelle
          </h2>
          <p className="mt-2">
            L&apos;ensemble des contenus présents sur ce site est la propriété exclusive
            d&apos;Atlanticall, sauf mention contraire. Toute reproduction
            ou représentation, totale ou partielle, sans autorisation
            préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#081b33]">
            5. Données personnelles
          </h2>
          <p className="mt-2">
            Les informations recueillies via le formulaire de contact
            (nom, email, téléphone, message) sont utilisées exclusivement
            dans le cadre du traitement de votre demande et ne sont ni
            cédées ni transmises à des tiers. Vous disposez d&apos;un
            droit d&apos;accès, de rectification et de suppression de vos
            données, exerçable en nous contactant à
            direction@atlanticall-dz.com.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#081b33]">6. Cookies</h2>
          <p className="mt-2">
            Ce site peut utiliser des cookies techniques nécessaires à son
            bon fonctionnement. Aucun cookie publicitaire ou de traçage
            tiers n&apos;est utilisé à ce jour.
          </p>
        </section>
      </div>
    </main>
    </div>
  );
}