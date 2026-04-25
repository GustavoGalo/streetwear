"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const historyCards = [
  {
    period: "Anos 70",
    title: "O Bronx, Nova York",
    description: "Tudo começa nas periferias de Nova York. Jovens negros e latinos, sem espaço e sem recursos, encontraram nas ruas uma forma de se expressar. A música, a dança, o grafite nos muros e as roupas que vestiam eram a mesma coisa: resistência.",
    color: "bg-primary"
  },
  {
    period: "Anos 80 e 90",
    title: "Das ruas para o mundo",
    description: "O hip-hop atravessou fronteiras. E junto com ele, foi o estilo. As roupas largas, os tênis, os bonés e os grafismos saíram das periferias e chegaram às lojas, às passarelas e às redes sociais. O streetwear virou moda, mas a origem ficou pra trás.",
    color: "bg-accent"
  },
  {
    period: "Hoje",
    title: "Sorocaba",
    description: "A cultura chegou aqui também. Está nas ruas, nos muros, nas lojas e no jeito que os jovens sorocabanos se vestem. Streetwear VS a Moda existiu pra mostrar isso: o que você veste tem uma história muito rica, e você precisa conhecer!",
    color: "bg-destructive"
  }
]

export function History() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Collage: Graffiti art - left side */}
      <div className="absolute -left-20 top-1/3 opacity-20 hidden lg:block -rotate-12 z-0">
        <Image
          src="imgs/content/plate.webp"
          alt=""
          width={350}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Collage: Globe icons - right side */}
      <div className="absolute -right-16 bottom-1/4 opacity-15 hidden xl:block rotate-12 z-0">
        <Image
          src="imgs/content/connection.webp"
          alt=""
          width={300}
          height={220}
          className="object-contain"
        />
      </div>

      {/* Collage: Skatista - bottom center hint */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 hidden md:block z-0">
        <Image
          src="imgs/content/subway.webp"
          alt=""
          width={200}
          height={250}
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
            A HISTÓRIA POR TRÁS
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Uma jornada de mais de 50 anos, das ruas do Bronx até as ruas de Sorocaba.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {historyCards.map((card, index) => (
            <motion.div
              key={card.period}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-card border border-border p-6 md:p-8 h-full hover:border-primary/50 transition-colors">
                {/* Period badge */}
                <div className={`inline-block px-4 py-1 ${card.color} text-white text-sm font-bold mb-4`}>
                  {card.period}
                </div>

                <h3 className="font-[family-name:var(--font-oswald)] text-2xl md:text-3xl font-bold mb-4">
                  {card.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed">
                  {card.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/20 group-hover:border-primary/40 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline connector for desktop */}
        <div className="hidden md:flex items-center justify-center mt-8">
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-primary" />
            <div className="w-32 h-0.5 bg-gradient-to-r from-primary to-accent" />
            <div className="w-4 h-4 rounded-full bg-accent" />
            <div className="w-32 h-0.5 bg-gradient-to-r from-accent to-destructive" />
            <div className="w-4 h-4 rounded-full bg-destructive" />
          </div>
        </div>
      </div>
    </section>
  )
}
