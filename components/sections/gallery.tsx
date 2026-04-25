"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { X, Lock, Eye } from "lucide-react"

// Placeholder gallery images - will be replaced after the event
const galleryImages = [
  { id: 1, alt: "Foto do evento 1" },
  { id: 2, alt: "Foto do evento 2" },
  { id: 3, alt: "Foto do evento 3" },
  { id: 4, alt: "Foto do evento 4" },
  { id: 5, alt: "Foto do evento 5" },
  { id: 6, alt: "Foto do evento 6" },
  { id: 7, alt: "Foto do evento 7" },
  { id: 8, alt: "Foto do evento 8" },
  { id: 9, alt: "Foto do evento 9" },
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

  const handleSubmit = () => {
    // In a real app, this would send to Google Forms or Airtable
    console.log("Feedback submitted:", feedback)
    setSubmitted(true)
    
    // Save completion to localStorage
    localStorage.setItem(STORAGE_KEY, "true")
    
    setTimeout(() => {
      setShowFeedbackModal(false)
      setSubmitted(false)
      setHasCompletedFeedback(true)
      setFeedback({ rating: -1, helped: "", comment: "" })
    }, 2000)
  }

  const isFormValid = feedback.rating >= 0 && feedback.helped !== ""

  return (
    <section id="galeria" className="relative py-24 md:py-32 overflow-hidden bg-secondary/30">
      {/* Collage: Urban poles - top right */}
      <div className="absolute -right-10 top-10 opacity-10 hidden lg:block rotate-6 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24-QDrzrJFfZSPOUCnP6pOW5mjHox5KDC.png"
          alt=""
          width={200}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Collage: Building - bottom left */}
      <div className="absolute -left-20 -bottom-20 opacity-10 hidden xl:block -rotate-3 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-jhghy9Kh3OjZgXScGOD5iNxIWStMpN.png"
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative aspect-square overflow-hidden ${
                !hasCompletedFeedback ? "cursor-pointer" : ""
              }`}
              onClick={handleImageClick}
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
              
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]" />
              </div>

              {/* Blur overlay when not unlocked */}
              {!hasCompletedFeedback && (
                <div className="absolute inset-0 backdrop-blur-xl bg-black/30 flex flex-col items-center justify-center gap-2 group-hover:bg-black/40 transition-colors">
                  <Lock className="w-8 h-8 text-white/80" />
                  <span className="text-white/80 text-sm font-medium text-center px-4">
                    Responda para desbloquear
                  </span>
                </div>
              )}

              {/* Unlocked state */}
              {hasCompletedFeedback && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Eye className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <span className="text-sm opacity-50">Em breve</span>
                  </div>
                </div>
              )}

              {/* Hover effect */}
              {!hasCompletedFeedback && (
                <div className="absolute inset-0 bg-primary/0 hover:bg-primary/10 transition-colors duration-300" />
              )}
            </motion.div>
          ))}
        </div>

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
                        disabled={!isFormValid}
                        className={`w-full py-3 font-semibold transition-colors ${
                          isFormValid
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-muted text-muted-foreground cursor-not-allowed"
                        }`}
                      >
                        {isFormValid ? "Desbloquear Galeria" : "Responda as perguntas obrigatórias"}
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
