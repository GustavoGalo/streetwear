"use client"

import * as React from "react"
import Image from "next/image"
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

export interface GalleryImage {
  src: string
  alt: string
  title?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  className?: string
  autoplay?: boolean
  autoplayDelay?: number
  showThumbnails?: boolean
}

export function ImageGallery({
  images,
  className,
  autoplay = false,
  autoplayDelay = 4000,
  showThumbnails = true,
}: ImageGalleryProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [lightboxIndex, setLightboxIndex] = React.useState(0)

  const plugins = React.useMemo(() => {
    if (!autoplay) return []
    return [
      Autoplay({
        delay: autoplayDelay,
        stopOnInteraction: true,
      }),
    ]
  }, [autoplay, autoplayDelay])

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleDownload = async (image: GalleryImage) => {
    try {
      const response = await fetch(image.src)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = image.title || `imagem-${Date.now()}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch {
      // Fallback: open image in new tab
      window.open(image.src, "_blank")
    }
  }

  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "Escape") closeLightbox()
    },
    [lightboxOpen]
  )

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const scrollToSlide = (index: number) => {
    api?.scrollTo(index)
  }

  if (images.length === 0) return null

  return (
    <div className={cn("w-full", className)}>
      {/* Main Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={plugins}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted cursor-pointer"
                aria-label={`Ver ${image.alt} em tamanho ampliado`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Image title */}
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 pt-8">
                    <p className="text-sm font-medium text-background">{image.title}</p>
                  </div>
                )}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:-left-6" />
        <CarouselNext className="-right-4 md:-right-6" />
      </Carousel>

      {/* Thumbnails */}
      {showThumbnails && images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2 overflow-x-auto px-4 pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={cn(
                "relative size-16 flex-shrink-0 overflow-hidden rounded-md transition-all duration-200",
                current === index
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-60 hover:opacity-100"
              )}
              aria-label={`Ir para imagem ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Slide indicator */}
      <div className="mt-2 text-center text-sm text-muted-foreground">
        {current + 1} / {images.length}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none sm:max-w-[95vw]"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">
            {images[lightboxIndex]?.title || `Imagem ${lightboxIndex + 1}`}
          </DialogTitle>
          
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 hover:text-white"
            onClick={closeLightbox}
            aria-label="Fechar visualização"
          >
            <X className="size-6" />
          </Button>

          {/* Download button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-16 z-50 text-white hover:bg-white/20 hover:text-white"
            onClick={() => handleDownload(images[lightboxIndex])}
            aria-label="Baixar imagem"
          >
            <Download className="size-6" />
          </Button>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white"
            onClick={goToPrevious}
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="size-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white"
            onClick={goToNext}
            aria-label="Próxima imagem"
          >
            <ChevronRight className="size-8" />
          </Button>

          {/* Image */}
          <div className="relative flex items-center justify-center w-full h-[85vh]">
            <Image
              src={images[lightboxIndex]?.src || ""}
              alt={images[lightboxIndex]?.alt || ""}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>

          {/* Image info */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
            <div>
              {images[lightboxIndex]?.title && (
                <p className="text-lg font-medium text-white">
                  {images[lightboxIndex].title}
                </p>
              )}
              <p className="text-sm text-white/70">
                {lightboxIndex + 1} de {images.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
