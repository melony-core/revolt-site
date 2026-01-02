import NumberFlow, { continuous } from '@number-flow/react'
import { Play, ChevronDown, Info } from "lucide-react";
import { useEffect, useState } from 'react';
import { rage, $t } from '../../modules';

export function StartPage() {
    const [online, setOnline] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const result = await rage.getServerStats("redwood.gta5rp.com:22005");
                if (!result) return;

                setOnline(result.players);
                localStorage.setItem('online', result.players.toString());
            } catch (error) {
                setOnline(Number(localStorage.getItem('online')))
                console.error("Ошибка: ", error);
            }
        })();
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

            <div className="container px-6 text-center">
                <div className="animate-fade-up mb-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>

                        <span className="w-fit items-center flex gap-[4px] text-sm text-muted-foreground">
                            <span className={`relative ${online > 0 ? "w-fit" : "w-[40px]"} ${online > 0 ? "text-foreground" : "text-[#fff0]"} font-medium`}>
                                <div className={`absolute w-full h-full online-preloader overflow-hidden rounded-[3px] bg-[#ffffff06] ${online > 0 ? "opacity-0" : "opacity-100"} transition-all duration-300`}>
                                    
                                </div>
                                <NumberFlow plugins={[continuous]} format={{ notation: "standard" }} value={online} />
                            </span> 
                            {$t('start.online-players')}
                        </span>
                    </div>
                </div>

                <div className="animate-fade-up-delay-1">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6" dangerouslySetInnerHTML={{ __html: $t('start.label') }}></h1>
                </div>

                <div className="animate-fade-up-delay-2">
                    <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10">
                        {$t('start.description')}
                    </p>
                </div>

                <div className="animate-fade-up-delay-3 flex flex-wrap justify-center gap-4">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base group">
                        <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                        {$t('start.buttons.start')}
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg border border-border bg-transparent text-foreground hover:bg-secondary hover:border-muted-foreground/30 h-14 px-8 text-base group">
                        <Info className="w-5 h-5 transition-transform group-hover:scale-110" />
                        {$t('start.buttons.more')}
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8  animate-fade-up-delay-3">
                <a href="#features" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <span className="text-sm">{$t('start.slide-down')}</span>
                    <ChevronDown className="w-5 h-5 animate-bounce" />
                </a>
            </div>
        </section>
    )
}