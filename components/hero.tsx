import Image from "next/image"
import { Phone, MessageCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with light overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/logo.jpeg"
              alt="GIPS Logo"
              width={64}
              height={64}
              className="rounded-full border-2 border-gips-yellow shadow-lg"
            />
            <span className="text-sm font-semibold uppercase tracking-widest text-gips-yellow">
              Guinea International Private Security
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold leading-tight text-background text-balance">
            {"Votre securite, notre priorite absolue."}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-background/80 max-w-2xl leading-relaxed">
            {"Guinea International Private Security (GIPS) assure la protection des personnes, des biens et des sites strategiques a travers la Guinee."}
          </p>

          {/* Guinea flag stripe */}
          <div className="mt-8 flex h-1 w-32 rounded-full overflow-hidden">
            <div className="flex-1 bg-gips-red" />
            <div className="flex-1 bg-gips-yellow" />
            <div className="flex-1 bg-gips-green" />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-semibold text-base bg-gips-green text-background hover:bg-gips-green/90">
              <a href="tel:+22462041422">
                <Phone className="mr-2 h-5 w-5" />
                Appelez-nous maintenant
              </a>
            </Button>
            <Button asChild size="lg" className="font-semibold text-base bg-background/15 text-background border border-background/30 hover:bg-background/25 backdrop-blur-sm">
              <a
                href="https://wa.me/22462041422"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" className="font-semibold text-base bg-gips-red text-background hover:bg-gips-red/90">
              <a href="#contact">
                <FileText className="mr-2 h-5 w-5" />
                Demander un devis
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom decorative stripe in Guinea flag colors */}
      <div className="absolute bottom-0 left-0 right-0 flex h-1">
        <div className="flex-1 bg-gips-red" />
        <div className="flex-1 bg-gips-yellow" />
        <div className="flex-1 bg-gips-green" />
      </div>
    </section>
  )
}
