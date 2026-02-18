"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "A propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Zones", href: "#zones" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <a href="#accueil" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="GIPS Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-lg font-mono font-bold tracking-tight text-foreground leading-none">
              G.I.P.S
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase leading-tight">
              Private Security
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="tel:+22462041422">
              <Phone className="mr-2 h-4 w-4" />
              620 41 42 26
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="w-full font-semibold mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="tel:+22462041422">
                <Phone className="mr-2 h-4 w-4" />
                620 41 42 26
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
