import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { $t } from "../../modules";
import ILogo from "../../assets/pictures/logo.svg";

const languages = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    }, [scrolled]);

    const homeButton = () => {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    return (
        <header id="header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? "py-5 bg-background/95 backdrop-blur-lg border-b border-border" : "py-5 border-b-[#fff0] bg-transparent" }`}>
            <div className="container px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2" onClick={() => homeButton()}>
                        <img className="w-[100px] h-fit cursor-pointer" src={ILogo} draggable="false" alt="" />
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#how-to-play" className="nav-link text-sm">{$t('header.buttons.play')}</a>
                        <a href="https://forum.majestic-rp.ru/" target="blank" className="nav-link text-sm">{$t('header.buttons.forum')}</a>
                        <a href="https://forum.majestic-rp.ru/" target="blank" className="nav-link text-sm">{$t('header.buttons.discord')}</a>
                        <a href="#features" className="nav-link text-sm">{$t('header.buttons.info')}</a>
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/donate" className="pointer-events-none">
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 text-sm">
                                {$t('header.payment')}
                            </button>
                        </Link>
                    </div>

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg hover:bg-secondary hover:text-foreground md:hidden h-9 w-9">
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                            ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            <div 
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                mobileMenuOpen 
                    ? "max-h-[400px] opacity-100" 
                    : "max-h-0 opacity-0"
                }`}
            >
                <div className="container px-6 pt-6 pb-6">
                <nav className="flex flex-col gap-1">
                    <a 
                        href="#how-to-play" 
                        className="text-foreground/80 hover:text-foreground hover:bg-accent/10 transition-colors py-3 px-3 rounded-lg text-base"
                    >
                        {$t('header.buttons.play')}
                    </a>
                    <a 
                        href="https://forum.majestic-rp.ru/"
                        className="text-foreground/80 hover:text-foreground hover:bg-accent/10 transition-colors py-3 px-3 rounded-lg text-base"
                    >
                        {$t('header.buttons.forum')}
                    </a>
                    <a 
                        href="https://forum.majestic-rp.ru/"
                        className="text-foreground/80 hover:text-foreground hover:bg-accent/10 transition-colors py-3 px-3 rounded-lg text-base"
                    >
                        {$t('header.buttons.discord')}
                    </a>
                    <a 
                        href="#features" 
                        className="text-foreground/80 hover:text-foreground hover:bg-accent/10 transition-colors py-3 px-3 rounded-lg text-base"
                    >
                        {$t('header.buttons.info')}
                    </a>
                    
                    <div className="border-t border-border pt-4 mt-3">
                        <p className="text-muted-foreground text-sm mb-3 px-3">Язык</p>

                        <div className="flex gap-2 px-3">
                            {languages.map((lang) => (
                                <button className="w-full inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg hover:bg-secondary hover:text-foreground h-9 px-4 text-sm gap-1.5">
                                    <span>{lang.flag}</span>
                                    <span className="text-sm">{lang.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <Link to="/donate" className="mt-4 px-3 pointer-events-none">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg border border-border bg-transparent text-foreground hover:bg-secondary hover:border-muted-foreground/30 h-11 px-5 py-2 w-full">
                            Пополнить
                        </button>
                    </Link>
                </nav>
                </div>
            </div>
        </header>
    )
}