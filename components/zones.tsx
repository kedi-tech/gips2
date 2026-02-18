import { MapPin } from "lucide-react"

const zones = [
  { name: "Kamsar", description: "Siege principal", color: "bg-gips-green" },
  { name: "Conakry", description: "Capitale", color: "bg-gips-red" },
  { name: "Region de Boke", description: "Zone miniere", color: "bg-gips-yellow" },
  { name: "Region de Kankan", description: "Haute Guinee", color: "bg-gips-green" },
]

export function Zones() {
  return (
    <section id="zones" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {"Zones d'intervention"}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-mono font-bold text-foreground text-balance">
            {"Nous intervenons dans plusieurs regions"}
          </h2>
          <div className="mt-4 flex h-1 w-20 mx-auto rounded-full overflow-hidden">
            <div className="flex-1 bg-gips-red" />
            <div className="flex-1 bg-gips-yellow" />
            <div className="flex-1 bg-gips-green" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone) => (
            <div
              key={zone.name}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-mono font-bold text-foreground mb-1">
                {zone.name}
              </h3>
              <p className="text-sm text-muted-foreground">{zone.description}</p>
              <div className={`mt-4 h-0.5 w-12 mx-auto rounded-full ${zone.color}`} />
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          {"Contactez-nous pour verifier la disponibilite dans votre localite."}
        </p>
      </div>
    </section>
  )
}
