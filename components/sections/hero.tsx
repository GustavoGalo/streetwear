"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <Image
          src="imgs/content/jeans.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative collage elements */}
      <div className="absolute top-8 right-8 opacity-60 z-20">
        <Image
          src="imgs/content/barcode.webp"
          alt="Código de barras TCC"
          width={120}
          height={30}
          className="invert"
        />
      </div>

      {/* Skatista silhouette - bottom left */}
      <div className="absolute -bottom-20 -left-20 opacity-30 hidden lg:block rotate-12 z-10">
        <Image
          src="imgs/content/subway.webp"
          alt=""
          width={350}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Urban poles - right side */}
      <div className="absolute top-20 -right-10 opacity-20 hidden md:block z-10">
        <Image
          src="imgs/content/wire.webp"
          alt=""
          width={250}
          height={350}
          className="object-contain"
        />
      </div>

      {/* Star logo - decorative */}
      <div className="absolute top-1/4 left-8 opacity-40 hidden lg:block z-10 -rotate-12">
        <Image
          src="imgs/content/star.webp"
          alt=""
          width={60}
          height={60}
          className="invert"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="imgs/content/streetwearvsmoda.webp"
            alt="Streetwear VS Moda"
            width={600}
            height={200}
            className="mx-auto invert w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-jetbrains)] text-sm md:text-base text-muted-foreground mb-8 tracking-wide"
        >
          26 de abril de 2026 · Tremoço F.C. · Sorocaba, SP
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed"
        >
          &quot;A moda que você veste tem origem.
          <span className="text-primary font-semibold"> A gente veio pra te mostrar qual é!</span>&quot;
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-none hover:bg-primary/90 transition-colors"
          >
            Descubra a história
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
