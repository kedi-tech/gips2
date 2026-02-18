import {
  Building2,
  CalendarCheck,
  HardHat,
  UserCheck,
  Car,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Gardiennage de Sites",
    description:
      "Protection permanente de bureaux, magasins, residences, entrepots et sites industriels. Surveillance 24h/24 pour prevenir tout incident.",
    items: ["Bureaux", "Magasins", "Residences", "Entrepots", "Sites industriels"],
  },
  {
    icon: CalendarCheck,
    title: "Securite d'Evenements",
    description:
      "Securisation de conferences, ceremonies, manifestations et evenements prives. Gestion des acces et controle des foules.",
    items: ["Conferences", "Ceremonies", "Manifestations", "Evenements prives"],
  },
  {
    icon: HardHat,
    title: "Protection de Sites Industriels & Miniers",
    description:
      "Securite renforcee pour sites miniers, chantiers et installations strategiques. Controle des acces et prevention des intrusions.",
    items: ["Sites miniers", "Chantiers", "Installations strategiques"],
  },
  {
    icon: UserCheck,
    title: "Protection Rapprochee (VIP)",
    description:
      "Service discret et professionnel pour personnalites, dirigeants et invites speciaux.",
    items: ["Personnalites", "Dirigeants", "Invites speciaux"],
  },
  {
    icon: Car,
    title: "Patrouille & Surveillance Mobile",
    description:
      "Rondes regulieres pour garantir la securite des zones sensibles.",
    items: [],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nos Services
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-mono font-bold text-foreground text-balance">
            {"Des solutions de securite completes"}
          </h2>
          <div className="mt-4 flex h-1 w-20 mx-auto rounded-full overflow-hidden">
            <div className="flex-1 bg-gips-red" />
            <div className="flex-1 bg-gips-yellow" />
            <div className="flex-1 bg-gips-green" />
          </div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"GIPS propose une gamme complete de services de securite adaptes a vos besoins specifiques."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-mono font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                {service.items.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1 font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
