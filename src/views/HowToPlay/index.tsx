import { Copy, Download, ExternalLink, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { $t, copyText } from "../../modules";

export function HowToPlay() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="how-to-play" ref={sectionRef} className="py-24 border-t border-border">
            <div className="container px-6">
                <div
                    className={`text-center mb-12 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <p className="text-muted-foreground text-sm uppercase tracking-widest mb-3">
                        {$t('how-to-play.label')}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase">
                        <span className="text-accent">{$t('how-to-play.description1')}</span> {$t('how-to-play.description2')}
                    </h2>
                </div>

                <div 
                    className={`grid md:grid-cols-3 gap-4 mb-4 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: '100ms' }}
                >
                    <div className="border border-border rounded-xl flex flex-col p-6 md:p-8 bg-card/30 hover:bg-card/50 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold uppercase mb-3">
                            {$t('how-to-play.steps.buy.title')}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {$t('how-to-play.steps.buy.description')}
                        </p>
                        
                        <button onClick={() => window.open('https://store.steampowered.com/agecheck/app/271590/')} className="inline-flex items-center justify-center !mt-auto gap-2 whitespace-nowrap text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 w-full h-12 uppercase font-semibold tracking-wide">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {$t('how-to-play.steps.buy.button')}
                        </button>
                    </div>

                    <div className="border border-border rounded-xl flex flex-col p-6 md:p-8 bg-card/30 hover:bg-card/50 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold uppercase mb-3">
                            {$t('how-to-play.steps.multiplayer.title')}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {$t('how-to-play.steps.multiplayer.description')}
                        </p>

                        <button onClick={() => window.open('https://cdn-msk1.rgsvc.io/public/files/RAGEMultiplayer_Setup.exe')} className="inline-flex items-center justify-center !mt-auto gap-2 whitespace-nowrap text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 w-full h-12 uppercase font-semibold tracking-wide">
                            <Download className="w-4 h-4 mr-2" />
                            {$t('how-to-play.steps.multiplayer.button')}
                        </button>
                    </div>

                    <div className="border border-border rounded-xl flex flex-col p-6 md:p-8 bg-card/30 hover:bg-card/50 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold uppercase mb-3">
                            {$t('how-to-play.steps.connect.title')}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            {$t('how-to-play.steps.connect.description')}
                        </p>

                        <button onClick={() => copyText('2233ss')} className="inline-flex items-center justify-center !mt-auto gap-2 whitespace-nowrap text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 w-full h-12 uppercase font-semibold tracking-wide">
                            <Copy className="w-4 h-4 mr-2" />
                            {$t('how-to-play.steps.connect.button')}
                        </button>
                    </div>
                </div>

                <div 
                    className={`border border-border rounded-xl p-6 md:p-8 bg-card/30 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: '200ms' }}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h3 className="text-lg md:text-xl font-bold">
                            <span className="text-accent">{$t('how-to-play.questions.text1')}</span> {$t('how-to-play.questions.text2')}
                        </h3>

                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg border border-border bg-transparent text-foreground hover:bg-secondary hover:border-muted-foreground/30 py-2 h-12 px-8 uppercase font-semibold tracking-wide">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            {$t('how-to-play.questions.button')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}