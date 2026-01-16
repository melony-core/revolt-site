import { $t } from "../../modules";
import ILogo from "../../assets/pictures/logo.svg";

export function Footer() {
    return (
        <footer className="py-12 border-t border-accent/30 relative" style={{ borderTopWidth: '3px', boxShadow: '0 -20px 60px -15px hsl(var(--accent) / 0.15)' }}>
            <div className="container px-6">
                <div className="w-full item-center grid justify-between lg:flex gap-10 mb-12">
                    <div className="w-fit md:col-span-1">
                        <img className="w-[100px] h-fit cursor-pointer" src={ILogo} draggable="false" alt="" />

                        <div className="text-xs text-muted-foreground space-y-1 mt-4 text-nowrap">
                            <p>Revolt Ltd.</p>
                            <br />
                            <p>ИНН: 0000000000</p>
                            <p>ОГРН: 0000000000000</p>
                            <p>КПП: 000000000</p>
                        </div>
                    </div>

                    <div className="w-full gap-[30px] sm:gap-[73px] grid sm:flex justify-center">
                        <div>
                            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{$t('footer.players.label')}</h4>
                            <ul className="space-y-2">
                                <li><a href="#how-to-play" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{$t('footer.players.play')}</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{$t('footer.players.payment')}</a></li>
                                <li><a href="https://forum.majestic-rp.ru/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{$t('footer.players.forum')}</a></li>
                                <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{$t('footer.players.info')}</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{$t('footer.information.label')}</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{$t('footer.information.terms')}</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{$t('footer.information.user-agreement')}</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{$t('footer.information.payment')}</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{$t('footer.contacts.label')}</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{$t('footer.contacts.discord-support')}</a></li>
                                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{$t('footer.contacts.telegram-support')}</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-col items-start gap-3">
                        <div className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-bold">
                            VISA
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        {$t('footer.disclaimer')}
                    </p>
                    {/* <p className="text-xs text-muted-foreground mt-4">
                        © 2024 Project: VIBE. Все права защищены.
                    </p> */}
                </div>
            </div>
        </footer>
    )
}