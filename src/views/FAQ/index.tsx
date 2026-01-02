import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { $t } from "../../modules";

const faqs = [
    {
        question: "FAQ.questions.1.title",
        answer: "FAQ.questions.1.answer",
    },
    {
        question: "FAQ.questions.2.title",
        answer: "FAQ.questions.2.answer",
    },
    {
        question: "FAQ.questions.3.title",
        answer: "FAQ.questions.3.answer",
    },
    {
        question: "FAQ.questions.4.title",
        answer: "FAQ.questions.4.answer",
    },
    {
        question: "FAQ.questions.5.title",
        answer: "FAQ.questions.5.answer",
    },
    {
        question: "FAQ.questions.6.title",
        answer: "FAQ.questions.6.answer",
    }
];


export function FAQ() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

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

                    {/* <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg border border-border bg-transparent text-foreground hover:bg-secondary hover:border-muted-foreground/30 py-2 h-12 px-6 uppercase font-semibold tracking-wide w-fit">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Открыть Wiki
                    </button> */}
                </div>

                <div 
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: '100ms' }}
                >
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="border border-border rounded-xl p-6 bg-card/30 hover:bg-card/50 transition-colors"
                        >
                            <h3 className="font-semibold mb-3 text-foreground">
                                {$t(faq.question)}
                            </h3>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {$t(faq.answer)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}