import { GraduationCap, Clock, Zap, Briefcase, Heart } from "lucide-react"

const reasons = [
  {
    icon: GraduationCap,
    title: "Agents formes et disciplines",
    description:
      "Nos agents suivent une formation rigoureuse et continue pour garantir un service de qualite superieure.",
    accent: "bg-gips-green/10 text-gips-green",
  },
  {
    icon: Clock,
    title: "Disponibilite 24h/24 et 7j/7",
    description:
      "Une presence permanente pour assurer votre securite a tout moment, jour et nuit.",
    accent: "bg-gips-red/10 text-gips-red",
  },
  {
    icon: Zap,
    title: "Intervention rapide",
    description:
      "Un temps de reponse optimal grace a nos equipes strategiquement positionnees.",
    accent: "bg-gips-yellow/20 text-foreground",
  },
  {
    icon: Briefcase,
    title: "Approche professionnelle",
    description:
      "Un service sur mesure adapte aux exigences specifiques de chaque client.",
    accent: "bg-gips-green/10 text-gips-green",
  },
  {
    icon: Heart,
    title: "Satisfaction client",
    description:
      "Votre satisfaction est notre priorite. Nous nous engageons a depasser vos attentes.",
    accent: "bg-gips-red/10 text-gips-red",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Pourquoi nous choisir
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-mono font-bold text-foreground text-balance">
            {"La confiance, au coeur de notre engagement"}
          </h2>
          <div className="mt-4 flex h-1 w-20 mx-auto rounded-full overflow-hidden">
            <div className="flex-1 bg-gips-red" />
            <div className="flex-1 bg-gips-yellow" />
            <div className="flex-1 bg-gips-green" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="flex gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${reason.accent}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
