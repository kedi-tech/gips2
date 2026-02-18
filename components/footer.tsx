import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="GIPS Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-mono font-bold text-background">G.I.P.S</span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm text-background/70">
              Guinea International Private Security (GIPS)
            </p>
            <p className="text-xs text-background/50 mt-1">
              {"Entreprise de securite privee en Guinee"}
            </p>
          </div>

          <p className="text-xs text-background/50">
            {"© 2026 GIPS. Tous droits reserves."}
          </p>
        </div>

        {/* Guinea flag stripe */}
        <div className="mt-8 flex h-0.5 w-full rounded-full overflow-hidden">
          <div className="flex-1 bg-gips-red" />
          <div className="flex-1 bg-gips-yellow" />
          <div className="flex-1 bg-gips-green" />
        </div>
      </div>
    </footer>
  )
}
