import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { History } from "@/components/sections/history"
import { Gallery } from "@/components/sections/gallery"
import { Supporters } from "@/components/sections/supporters"
import { Credits } from "@/components/sections/credits"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="sobre">
        <About />
      </div>
      <div id="historia">
        <History />
      </div>
      <div id="galeria">
        <Gallery />
      </div>
      <div id="apoiadores">
        <Supporters />
      </div>
      <Credits />
    </main>
  )
}
