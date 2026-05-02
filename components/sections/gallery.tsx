"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { X, Lock, Eye } from "lucide-react"
import { submitToGoogleForms } from "@/app/actions"
import { ImageGallery } from "../image-gallery"

const galleryImages = [
  { id: 1, src: "/gallery/IMG_3773.webp", alt: "Foto do evento 1" },
  { id: 2, src: "/gallery/IMG_3774.webp", alt: "Foto do evento 2" },
  { id: 3, src: "/gallery/IMG_3775.webp", alt: "Foto do evento 3" },
  { id: 4, src: "/gallery/IMG_3777.webp", alt: "Foto do evento 4" },
  { id: 5, src: "/gallery/IMG_3778.webp", alt: "Foto do evento 5" },
  { id: 6, src: "/gallery/IMG_3779.webp", alt: "Foto do evento 6" },
  { id: 7, src: "/gallery/IMG_3780.webp", alt: "Foto do evento 7" },
  { id: 8, src: "/gallery/IMG_3781.webp", alt: "Foto do evento 8" },
  { id: 9, src: "/gallery/IMG_3783.webp", alt: "Foto do evento 9" },
  { id: 10, src: "/gallery/IMG_3784.webp", alt: "Foto do evento 10" },
  { id: 11, src: "/gallery/IMG_3785.webp", alt: "Foto do evento 11" },
  { id: 12, src: "/gallery/IMG_3787.webp", alt: "Foto do evento 12" },
  { id: 13, src: "/gallery/IMG_3788.webp", alt: "Foto do evento 13" },
  { id: 14, src: "/gallery/IMG_3789.webp", alt: "Foto do evento 14" },
  { id: 15, src: "/gallery/IMG_3790.webp", alt: "Foto do evento 15" },
  { id: 16, src: "/gallery/IMG_3793.webp", alt: "Foto do evento 16" },
  { id: 17, src: "/gallery/IMG_3796.webp", alt: "Foto do evento 17" },
  { id: 18, src: "/gallery/IMG_3797.webp", alt: "Foto do evento 18" },
  { id: 19, src: "/gallery/IMG_3800.webp", alt: "Foto do evento 19" },
  { id: 20, src: "/gallery/IMG_3801.webp", alt: "Foto do evento 20" },
  { id: 21, src: "/gallery/IMG_3802.webp", alt: "Foto do evento 21" },
  { id: 22, src: "/gallery/IMG_3807.webp", alt: "Foto do evento 22" },
  { id: 23, src: "/gallery/IMG_3812.webp", alt: "Foto do evento 23" },
  { id: 24, src: "/gallery/IMG_3817.webp", alt: "Foto do evento 24" },
  { id: 25, src: "/gallery/IMG_3827.webp", alt: "Foto do evento 25" },
  { id: 26, src: "/gallery/IMG_3830.webp", alt: "Foto do evento 26" },
  { id: 27, src: "/gallery/IMG_3836.webp", alt: "Foto do evento 27" },
  { id: 28, src: "/gallery/IMG_3837.webp", alt: "Foto do evento 28" },
  { id: 29, src: "/gallery/IMG_3841.webp", alt: "Foto do evento 29" },
  { id: 30, src: "/gallery/IMG_3843.webp", alt: "Foto do evento 30" },
  { id: 31, src: "/gallery/IMG_3844.webp", alt: "Foto do evento 31" },
  { id: 32, src: "/gallery/IMG_3846.webp", alt: "Foto do evento 32" },
  { id: 33, src: "/gallery/IMG_3850.webp", alt: "Foto do evento 33" },
  { id: 34, src: "/gallery/IMG_3852.webp", alt: "Foto do evento 34" },
  { id: 35, src: "/gallery/IMG_3854.webp", alt: "Foto do evento 35" },
  { id: 36, src: "/gallery/IMG_3857.webp", alt: "Foto do evento 36" },
  { id: 37, src: "/gallery/IMG_3859.webp", alt: "Foto do evento 37" },
  { id: 38, src: "/gallery/IMG_3862.webp", alt: "Foto do evento 38" },
  { id: 39, src: "/gallery/IMG_3865.webp", alt: "Foto do evento 39" },
  { id: 40, src: "/gallery/IMG_3870.webp", alt: "Foto do evento 40" },
  { id: 41, src: "/gallery/IMG_3875.webp", alt: "Foto do evento 41" },
  { id: 42, src: "/gallery/IMG_3878.webp", alt: "Foto do evento 42" },
  { id: 43, src: "/gallery/IMG_3882.webp", alt: "Foto do evento 43" },
  { id: 44, src: "/gallery/IMG_3883.webp", alt: "Foto do evento 44" },
  { id: 45, src: "/gallery/IMG_3885.webp", alt: "Foto do evento 45" },
  { id: 46, src: "/gallery/IMG_3887.webp", alt: "Foto do evento 46" },
  { id: 47, src: "/gallery/IMG_3890.webp", alt: "Foto do evento 47" },
  { id: 48, src: "/gallery/IMG_3892.webp", alt: "Foto do evento 48" },
  { id: 49, src: "/gallery/IMG_3893.webp", alt: "Foto do evento 49" },
  { id: 50, src: "/gallery/IMG_3897.webp", alt: "Foto do evento 50" },
  { id: 51, src: "/gallery/IMG_3900.webp", alt: "Foto do evento 51" },
  { id: 52, src: "/gallery/IMG_3901.webp", alt: "Foto do evento 52" },
  { id: 53, src: "/gallery/IMG_3909.webp", alt: "Foto do evento 53" },
  { id: 54, src: "/gallery/IMG_3919.webp", alt: "Foto do evento 54" },
  { id: 55, src: "/gallery/IMG_3943.webp", alt: "Foto do evento 55" },
  { id: 56, src: "/gallery/IMG_3949.webp", alt: "Foto do evento 56" },
  { id: 57, src: "/gallery/IMG_3962.webp", alt: "Foto do evento 57" },
  { id: 58, src: "/gallery/IMG_3978.webp", alt: "Foto do evento 58" },
  { id: 59, src: "/gallery/IMG_3981.webp", alt: "Foto do evento 59" },
  { id: 60, src: "/gallery/IMG_3982.webp", alt: "Foto do evento 60" },
  { id: 61, src: "/gallery/IMG_3985.webp", alt: "Foto do evento 61" },
  { id: 62, src: "/gallery/IMG_3995.webp", alt: "Foto do evento 62" },
  { id: 63, src: "/gallery/IMG_4004.webp", alt: "Foto do evento 63" },
  { id: 64, src: "/gallery/IMG_4006.webp", alt: "Foto do evento 64" },
  { id: 65, src: "/gallery/IMG_4010.webp", alt: "Foto do evento 65" },
  { id: 66, src: "/gallery/IMG_4011.webp", alt: "Foto do evento 66" },
  { id: 67, src: "/gallery/IMG_4015.webp", alt: "Foto do evento 67" },
  { id: 68, src: "/gallery/IMG_4019.webp", alt: "Foto do evento 68" },
  { id: 69, src: "/gallery/IMG_4020.webp", alt: "Foto do evento 69" },
  { id: 70, src: "/gallery/IMG_4022.webp", alt: "Foto do evento 70" },
  { id: 71, src: "/gallery/IMG_4025.webp", alt: "Foto do evento 71" },
  { id: 72, src: "/gallery/IMG_4026.webp", alt: "Foto do evento 72" },
  { id: 73, src: "/gallery/IMG_4029.webp", alt: "Foto do evento 73" },
  { id: 74, src: "/gallery/IMG_4030.webp", alt: "Foto do evento 74" },
  { id: 75, src: "/gallery/IMG_4031.webp", alt: "Foto do evento 75" },
  { id: 76, src: "/gallery/IMG_4033.webp", alt: "Foto do evento 76" },
  { id: 77, src: "/gallery/IMG_4034.webp", alt: "Foto do evento 77" },
  { id: 78, src: "/gallery/IMG_4035.webp", alt: "Foto do evento 78" },
  { id: 79, src: "/gallery/IMG_4036.webp", alt: "Foto do evento 79" },
  { id: 80, src: "/gallery/IMG_4037.webp", alt: "Foto do evento 80" },
  { id: 81, src: "/gallery/IMG_4038.webp", alt: "Foto do evento 81" },
  { id: 82, src: "/gallery/IMG_4039.webp", alt: "Foto do evento 82" },
  { id: 83, src: "/gallery/IMG_4041.webp", alt: "Foto do evento 83" },
  { id: 84, src: "/gallery/IMG_4043.webp", alt: "Foto do evento 84" },
  { id: 85, src: "/gallery/IMG_4045.webp", alt: "Foto do evento 85" },
  { id: 86, src: "/gallery/IMG_4046.webp", alt: "Foto do evento 86" },
  { id: 87, src: "/gallery/IMG_4047.webp", alt: "Foto do evento 87" },
  { id: 88, src: "/gallery/IMG_4049.webp", alt: "Foto do evento 88" },
  { id: 89, src: "/gallery/IMG_4051.webp", alt: "Foto do evento 89" },
  { id: 90, src: "/gallery/IMG_4052.webp", alt: "Foto do evento 90" },
  { id: 91, src: "/gallery/IMG_4057.webp", alt: "Foto do evento 91" },
  { id: 92, src: "/gallery/IMG_4058.webp", alt: "Foto do evento 92" },
  { id: 93, src: "/gallery/IMG_4059.webp", alt: "Foto do evento 93" },
  { id: 94, src: "/gallery/IMG_4061.webp", alt: "Foto do evento 94" },
  { id: 95, src: "/gallery/IMG_4064.webp", alt: "Foto do evento 95" },
  { id: 96, src: "/gallery/IMG_4070.webp", alt: "Foto do evento 96" },
  { id: 97, src: "/gallery/IMG_4076.webp", alt: "Foto do evento 97" },
  { id: 98, src: "/gallery/IMG_4078.webp", alt: "Foto do evento 98" },
  { id: 99, src: "/gallery/IMG_4080.webp", alt: "Foto do evento 99" },
  { id: 100, src: "/gallery/IMG_4083.webp", alt: "Foto do evento 100" },
]

const STORAGE_KEY = "streetwear-feedback-completed"

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [hasCompletedFeedback, setHasCompletedFeedback] = useState(false)
  const [feedback, setFeedback] = useState({
    rating: -1,
    helped: "",
    comment: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Check if user has already completed feedback
  useEffect(() => {
    const completed = localStorage.getItem(STORAGE_KEY)
    if (completed === "true") {
      setHasCompletedFeedback(true)
    }
  }, [])

  const handleImageClick = () => {
    if (!hasCompletedFeedback) {
      setShowFeedbackModal(true)
    }
  }

  const handleSubmit = async () => {
    if (isLoading || !isFormValid) return
    setIsLoading(true)
    try {
      console.log(feedback)
      await submitToGoogleForms(feedback)
      setSubmitted(true)
      
      // Save completion to localStorage
      localStorage.setItem(STORAGE_KEY, "true")

      setShowFeedbackModal(false)
      setSubmitted(false)
      setHasCompletedFeedback(true)
      setFeedback({ rating: -1, helped: "", comment: "" })
    } catch (error) {
      console.error("Erro ao enviar feedback:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const isFormValid = feedback.rating >= 0 && feedback.helped !== ""

  return (
    <section id="galeria" className="relative py-24 md:py-32 overflow-hidden bg-secondary/30">
      {/* Collage: Urban poles - top right */}
      <div className="absolute -right-10 top-10 opacity-10 hidden lg:block rotate-6 z-0">
        <Image
          src="imgs/content/wire.webp"
          alt=""
          width={200}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Collage: Building - bottom left */}
      <div className="absolute -left-20 -bottom-20 opacity-10 hidden xl:block -rotate-3 z-0">
        <Image
          src="imgs/content/urban.webp"
          alt=""
          width={350}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-bold mb-4">
            GALERIA
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {hasCompletedFeedback 
              ? "Obrigado pelo feedback! Agora você pode ver todas as fotos do evento."
              : "Esteve no rolê? Responda ao formulário para desbloquear as fotos do evento."}
          </p>
        </motion.div>

        {/* Gallery Grid - Locked State (Limited to 6 containers) */}
        {!hasCompletedFeedback && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                onClick={handleImageClick}
              >
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
                
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]" />
                </div>

                {/* Blur overlay when not unlocked */}
                <div className="absolute inset-0 backdrop-blur-xl bg-black/30 flex flex-col items-center justify-center gap-2 group-hover:bg-black/40 transition-colors">
                  <Lock className="w-8 h-8 text-white/80" />
                  <span className="text-white/80 text-sm font-medium text-center px-4">
                    Responda para desbloquear
                  </span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        )}
        {hasCompletedFeedback && (
          <ImageGallery images={galleryImages} showThumbnails={false} />
        )}

        {/* Feedback Modal */}
        <AnimatePresence>
          {showFeedbackModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setShowFeedbackModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setShowFeedbackModal(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-muted hover:bg-muted/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-6 md:p-8">
                  {submitted ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                        <Eye className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Galeria desbloqueada!</h3>
                      <p className="text-muted-foreground">Obrigado pelo seu feedback.</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold mb-2">
                          Desbloqueie a Galeria
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Responda rapidamente para ver todas as fotos do evento.
                        </p>
                      </div>

                      {/* Question 1 - Yes/No/Maybe */}
                      <div className="mb-6">
                        <p className="text-sm text-foreground/80 mb-3">
                          1. Você já tinha conhecimento da história e importância do Streetwear?
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {["Sim", "Mais ou menos", "Não"].map((option) => (
                            <button
                              key={option}
                              onClick={() => setFeedback({ ...feedback, helped: option })}
                              className={`px-4 py-2 text-sm transition-colors ${
                                feedback.helped === option
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted hover:bg-muted/80"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Question 2 - Rating */}
                      <div className="mb-6">
                        <p className="text-sm text-foreground/80 mb-3">
                          2. Quanto o evento te ajudou a entender isso?
                        </p>
                        <div className="flex gap-1 flex-wrap">
                          {[...Array(11)].map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setFeedback({ ...feedback, rating: i })}
                              className={`w-9 h-9 text-sm font-medium transition-colors ${
                                feedback.rating === i
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted hover:bg-muted/80"
                              }`}
                            >
                              {i}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Question 3 - Comment */}
                      <div className="mb-6">
                        <p className="text-sm text-foreground/80 mb-3">
                          3. O que você achou do evento? <span className="text-muted-foreground">(opcional)</span>
                        </p>
                        <textarea
                          value={feedback.comment}
                          onChange={(e) => setFeedback({ ...feedback, comment: e.target.value.slice(0, 280) })}
                          placeholder="Escreva sua opinião aqui..."
                          className="w-full h-24 p-3 bg-muted border border-border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                          maxLength={280}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          {feedback.comment.length}/280 caracteres
                        </p>
                      </div>

                      {/* Submit button */}
                      <button
                        onClick={handleSubmit}
                        disabled={!isFormValid || isLoading}
                        className={`w-full py-3 font-semibold transition-colors ${
                          (isFormValid && !isLoading)
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                            : "bg-muted text-muted-foreground cursor-not-allowed"
                        }`}
                      >
                        {isLoading ? "Enviando..." : (isFormValid ? "Desbloquear Galeria" : "Responda as perguntas obrigatórias")}
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
