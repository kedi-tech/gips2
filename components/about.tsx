import { Target, Eye, Handshake } from "lucide-react"

const values = [
  "Professionnalisme",
  "Integrite",
  "Discipline",
  "Reactivite",
  "Engagement",
]

export function About() {
  return (
    <section id="a-propos" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            A propos de GIPS
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-mono font-bold text-foreground text-balance">
            {"Qui sommes-nous ?"}
          </h2>
          {/* Guinea flag stripe */}
          <div className="mt-4 flex h-1 w-20 mx-auto rounded-full overflow-hidden">
            <div className="flex-1 bg-gips-red" />
            <div className="flex-1 bg-gips-yellow" />
            <div className="flex-1 bg-gips-green" />
          </div>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="relative">
              <div className="overflow-hidden rounded-lg border border-border shadow-md">
                <img
                  src="/we.jpeg"
                  alt="Equipe de securite GIPS en formation"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-primary/20 rounded-lg -z-10" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg border border-border shadow-md">
                <img
                  src="/us.jpeg"
                  alt="Equipe GIPS sur le terrain"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="overflow-hidden rounded-lg border border-border shadow-md">
                <img
                  src="/ceo.jpeg"
                  alt="Direction GIPS"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed">
              {"Guinea International Private Security (GIPS) est une entreprise de securite privee basee a Kamsar, operant dans plusieurs regions de la Guinee, notamment Conakry, Boke et Kankan."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"Notre mission est d'assurer une protection professionnelle, fiable et efficace pour nos clients, qu'il s'agisse d'entreprises, d'institutions, de sites industriels ou d'evenements."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"Nous mettons a disposition des agents formes, disciplines et engages a garantir la securite 24h/24 et 7j/7."}
            </p>
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gips-green/10">
                <Target className="h-5 w-5 text-gips-green" />
              </div>
              <h3 className="text-lg font-mono font-bold text-foreground">Notre Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {"Offrir des services de securite de haute qualite, adaptes aux besoins specifiques de chaque client."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gips-red/10">
                <Eye className="h-5 w-5 text-gips-red" />
              </div>
              <h3 className="text-lg font-mono font-bold text-foreground">Notre Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {"Devenir une reference nationale en matiere de securite privee en Guinee."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gips-yellow/20">
                <Handshake className="h-5 w-5 text-gips-red" />
              </div>
              <h3 className="text-lg font-mono font-bold text-foreground">Nos Valeurs</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {values.map((v) => (
                <li
                  key={v}
                  className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground font-medium"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
