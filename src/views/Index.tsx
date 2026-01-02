import { Header } from "../components/Header"

import { StartPage } from "./Start"
import { Features } from "./Features"
import { HowToPlay } from "./HowToPlay"
import { FAQ } from "./FAQ"
import { Socials } from "./Socials"

import { Footer } from "../components/Footer"

export function Index() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main>
                <StartPage />
                <Features />
                <HowToPlay />
                <FAQ />
                <Socials />
            </main>

            <Footer />
        </div>
    )
}