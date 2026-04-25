"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Credits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer className="relative py-24 md:py-32 overflow-hidden bg-primary">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-5LEjOmzAb3C04IJs8jaIwqD53y4KUt.png"
          alt=""
          fill
          className="object-cover mix-blend-overlay"
        />
      </div>

      {/* Collage: Skatista - left */}
      <div className="absolute -left-20 bottom-0 opacity-20 hidden lg:block -rotate-6 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-iNWhlRh8GXPi9dZpAtIdIaRsd7xtVD.png"
          alt=""
          width={280}
          height={350}
          className="object-contain brightness-0 invert"
        />
      </div>

      {/* Collage: Urban poles - right */}
      <div className="absolute -right-10 top-10 opacity-15 hidden md:block rotate-12 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24-QDrzrJFfZSPOUCnP6pOW5mjHox5KDC.png"
          alt=""
          width={180}
          height={260}
          className="object-contain brightness-0 invert"
        />
      </div>

      {/* Collage: Stars scattered */}
      <div className="absolute top-20 left-20 opacity-30 hidden xl:block rotate-12 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-g20zA3EqPku3pMVxGOH7xywelFgbx1.png"
          alt=""
          width={40}
          height={40}
          className="invert"
        />
      </div>
      <div className="absolute bottom-32 right-32 opacity-20 hidden xl:block -rotate-45 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-g20zA3EqPku3pMVxGOH7xywelFgbx1.png"
          alt=""
          width={30}
          height={30}
          className="invert"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-primary-foreground"
        >
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-g20zA3EqPku3pMVxGOH7xywelFgbx1.png"
              alt="Logo Streetwear VS Moda"
              width={60}
              height={60}
              className="mx-auto invert"
            />
          </div>

          <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-bold mb-8">
            STREETWEAR VS MODA
          </h2>

          <div className="space-y-2 mb-12">
            <p className="text-primary-foreground/80">
              Trabalho de Conclusão de Curso - Publicidade e Propaganda e Moda
            </p>
            <p className="text-primary-foreground/80">
              Anhembi Morumbi - Sorocaba, 2026
            </p>
          </div>

          {/* Team */}
          <div className="mb-12">
            <h3 className="font-semibold mb-4 text-lg">Equipe</h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-primary-foreground/90">
              <span>Isabella Coimbra Galo</span>
              <span>Maria Olivia de Lima</span>
              <span>Livia Campos Lisboa</span>
            </div>
          </div>

          {/* Orientadora */}
          <div className="mb-12">
            <p className="text-primary-foreground/70">
              Orientadora: <span className="text-primary-foreground">Prof. Quelen Torres</span>
            </p>
          </div>

          {/* Barcode */}
          <div className="flex justify-center mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-9AjAvYtu52cOxHx09lcNHSS4LI9anv.png"
              alt="TCC 25 v0.1"
              width={150}
              height={40}
              className="invert opacity-60"
            />
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50">
            © 2025 Streetwear VS Moda. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
