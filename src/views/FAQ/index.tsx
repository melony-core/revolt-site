import { useEffect, useRef, useState } from "react";
import { $t } from "../../modules";

export function FAQ() {
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
        <section id="faq" ref={sectionRef} className="py-24 border-t border-border">
            <div className="container px-6">
                <div
                    className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold uppercase">
                        <span className="text-accent">{$t('FAQ.label1')}</span> {$t('FAQ.label2')}
                    </h2>
                </div>

                <div 
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: '100ms' }}
                >
                    {Array.from({ length: 6 }).map((_, index) => {
                        const translateIndex = index + 1;

                        return (
                            <div 
                                key={index}
                                className="border border-border rounded-xl p-6 bg-card/30 hover:bg-card/50 transition-colors"
                            >
                                <h3 className="font-semibold mb-3 text-foreground">
                                    {$t(`FAQ.questions.${translateIndex}.title`)}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {$t(`FAQ.questions.${translateIndex}.answer`)}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}