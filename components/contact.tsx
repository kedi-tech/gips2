"use client"

import { useState } from "react"
import { MapPin, Phone, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-mono font-bold text-foreground text-balance">
            {"Besoin d'un service de securite fiable ?"}
          </h2>
          <div className="mt-4 flex h-1 w-20 mx-auto rounded-full overflow-hidden">
            <div className="flex-1 bg-gips-red" />
            <div className="flex-1 bg-gips-yellow" />
            <div className="flex-1 bg-gips-green" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {"Contactez-nous des maintenant pour discuter de vos besoins en securite. Notre equipe est disponible pour vous accompagner."}
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gips-green/10">
                  <MapPin className="h-5 w-5 text-gips-green" />
                </div>
                <div>
                  <p className="font-mono font-bold text-foreground">Adresse</p>
                  <p className="text-muted-foreground">Base a Kamsar, Guinee</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gips-red/10">
                  <Phone className="h-5 w-5 text-gips-red" />
                </div>
                <div>
                  <p className="font-mono font-bold text-foreground">Telephone</p>
                  <a
                    href="tel:+22462041422"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    620 41 42 26
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gips-green/10">
                  <MessageCircle className="h-5 w-5 text-gips-green" />
                </div>
                <div>
                  <p className="font-mono font-bold text-foreground">WhatsApp</p>
                  <a
                    href="https://wa.me/22462041422"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    620 41 42 26
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gips-green/10">
                  <Send className="h-8 w-8 text-gips-green" />
                </div>
                <h3 className="text-xl font-mono font-bold text-foreground">
                  {"Demande envoyee !"}
                </h3>
                <p className="text-muted-foreground">
                  {"Merci pour votre message. Notre equipe vous contactera dans les plus brefs delais."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-mono font-bold text-foreground mb-2">
                  Demander un devis
                </h3>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Nom *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom complet"
                    className="bg-muted"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="company">Entreprise (optionnel)</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Nom de votre entreprise"
                    className="bg-muted"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Telephone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Votre numero"
                      className="bg-muted"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Votre email"
                      className="bg-muted"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Decrivez vos besoins en securite..."
                    className="bg-muted resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-semibold mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="mr-2 h-4 w-4" />
                  Demander un devis
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
