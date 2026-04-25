"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram } from "lucide-react"

const supporters = [
  {
    name: "Tremoço F.C.",
    handle: "@tremocofc",
    type: "venue"
  },
  {
    name: "Novo de Novo",
    handle: "@eusonovodenovo",
    type: "partner"
  },
  {
    name: "Fotografia",
    handle: "@2t.teus",
    type: "photographer"
  },
  {
    name: "Gustavo Produções",
    handle: "Desenvolvedor",
    type: "developer"
  }
]

export function Supporters() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Collage: Globe icons - top left */}
      <div className="absolute -top-10 -left-10 opacity-15 hidden md:block -rotate-12 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-8BqnUYWsEzNmxOQ3oqwd4n4T9VE9NZ.png"
          alt=""
          width={350}
          height={260}
          className="object-contain"
        />
      </div>

      {/* Collage: Graffiti art - bottom right */}
      <div className="absolute -right-20 -bottom-10 opacity-15 hidden lg:block rotate-6 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-FOkQcqxKwPpLrG5qFtwIwgwf0ntXNq.png"
          alt=""
          width={400}
          height={230}
          className="object-contain"
        />
      </div>

      {/* Collage: Jacket - left side subtle */}
      <div className="absolute left-0 bottom-1/4 opacity-10 hidden xl:block rotate-12 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-SVYBJ6DxvK1B0t1RKsgzPit1UFAXPX.png"
          alt=""
          width={280}
          height={380}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-bold mb-4">
            QUEM TORNOU TUDO ISSO POSSÍVEL
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Esse projeto só existiu porque teve gente que acreditou nele. 
            Obrigada a cada um que fez parte dessa história.
          </p>
        </motion.div>

        {/* Obrigado image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-SznvRzQv5pLINQQ0DiLlDyamavpNit.png"
            alt="Obrigado"
            width={300}
            height={80}
            className="object-contain"
          />
        </motion.div>

        {/* Supporters grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {supporters.map((supporter, index) => (
            <motion.div
              key={supporter.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border p-6 text-center hover:border-primary/50 transition-colors h-full">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <span className="font-[family-name:var(--font-oswald)] text-2xl font-bold text-muted-foreground">
                    {supporter.name.charAt(0)}
                  </span>
                </div>

                <h3 className="font-semibold text-lg mb-1">{supporter.name}</h3>
                
                {supporter.handle.startsWith("@") ? (
                  <a
                    href={`https://instagram.com/${supporter.handle.slice(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-3 h-3" />
                    {supporter.handle}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{supporter.handle}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional note for grafiteiros */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 text-muted-foreground text-sm"
        >
          <p>Grafiteiros e colaboradores: em breve mais informações serão adicionadas aqui.</p>
        </motion.div>
      </div>
    </section>
  )
}
