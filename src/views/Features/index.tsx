import { useEffect, useRef, useState } from "react";
import { User, Car, Sparkles } from "lucide-react";
import { $t } from "../../modules";

const features = [
  {
    id: 1,
    image: "https://media.discordapp.net/attachments/662733611707138069/1438943949682376797/20251114131331_1.jpg?ex=693ba83b&is=693a56bb&hm=de0e5c22d6ff52c2699b399cf3825fd17fd4ef53a833d9f7351531cd57bd9a23&=&format=webp&width=1522&height=856"
  },
  {
    id: 2,
    image: "https://media.discordapp.net/attachments/662733611707138069/1444892120371564614/image.png?ex=693b8b26&is=693a39a6&hm=24bbf34990ca3d7c599da41f6b1400cbe68e13a55027b14a526b5cb88fcad5d3&=&format=webp&quality=lossless&width=1545&height=856",
  },
  {
    id: 3,
    image: "https://media.discordapp.net/attachments/662733611707138069/1444757162629922867/InShot_20251130_212801825.jpg?ex=693bb635&is=693a64b5&hm=2713544ce03038332748e90e465a9fe37292f64fa1420f7f7cbba410255c1af6&=&format=webp&width=1522&height=856",
  }
];

export function Features() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        }, { threshold: 0.1 } );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);
    
    return (
        <section id="features" ref={sectionRef} className="py-24 relative border-t border-border overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
            </div>
            
            <div className="container px-6 relative">
                <div
                    className={`text-center mb-20 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <span className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5">
                        <Sparkles className="w-3.5 h-3.5" />
                        {$t('features.badge')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-5">
                        {$t('features.label1')} <span className="text-accent">{$t('features.label2')}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        {$t('features.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    return (
                        <div
                            key={feature.id}
                            className={`group transition-all duration-700 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-b from-secondary/80 to-card border border-border/50 transition-all duration-300 group-hover:border-accent/40">
                                <div className="relative overflow-hidden">
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img 
                                            src={feature.image} 
                                            alt={'picture'}
                                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                                        />
                                    </div>
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                                    
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            
                                <div className="p-6 pt-5">
                                    <h3 className="text-xl font-bold leading-tight mb-3">
                                        <span className="text-accent">{$t(`features.list.${feature.id}.accentTitle`)}</span>
                                        <br />
                                        <span className="text-foreground">{$t(`features.list.${feature.id}.mainTitle`)}</span>
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {$t(`features.list.${feature.id}.description`)}
                                    </p>
                                </div>

                                <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent/50 to-transparent" />
                                    <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-accent/50 to-transparent" />
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </section>
    );
}