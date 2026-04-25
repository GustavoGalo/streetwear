"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Collage: Jacket with cap - right side */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-25 hidden lg:block rotate-6 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-SVYBJ6DxvK1B0t1RKsgzPit1UFAXPX.png"
          alt=""
          width={450}
          height={600}
          className="object-contain"
        />
      </div>

      {/* Collage: Urban building - left side */}
      <div className="absolute -left-32 bottom-0 opacity-15 hidden xl:block -rotate-6 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-jhghy9Kh3OjZgXScGOD5iNxIWStMpN.png"
          alt=""
          width={400}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Collage: Star decoration */}
      <div className="absolute right-20 top-20 opacity-20 hidden md:block rotate-45 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-g20zA3EqPku3pMVxGOH7xywelFgbx1.png"
          alt=""
          width={40}
          height={40}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-bold mb-8 text-center">
            O QUE FOI O EVENTO
          </h2>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p className="text-xl md:text-2xl font-medium text-foreground">
              Streetwear VS Moda nasceu de uma pergunta simples:{" "}
              <em className="text-primary">será que as pessoas que usam streetwear sabem de onde ele vem?</em>
            </p>

            <p>
              Foi essa curiosidade que virou pesquisa, e a pesquisa que virou esse evento. Com{" "}
              <span className="text-primary font-semibold">271 jovens entrevistados</span> em Sorocaba, 
              a gente descobriu que a maioria usa esse estilo todo dia, mas poucos sabem que ele carrega 
              décadas de história, resistência e identidade cultural nas costuras.
            </p>

            <p>
              O evento aconteceu no dia{" "}
              <span className="font-semibold">26 de abril, no Tremoço F.C., em Sorocaba</span>. 
              Uma mostra cultural com grafiteiros ao vivo, painéis expositivos e um convite para 
              o público entender o que já veste e por quê.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-border"
          >
            <div className="text-center">
              <div className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold text-primary">271</div>
              <div className="text-sm text-muted-foreground mt-1">jovens entrevistados</div>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground mt-1">dia de evento</div>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1">anos de história</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
