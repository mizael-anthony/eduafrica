import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Menu,
  MessageSquareText,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

const features = [
  {
    icon: GraduationCap,
    title: "Élèves & familles",
    description: "Un dossier clair pour suivre les inscriptions, la présence, les résultats et la vie de chaque élève.",
    color: "#D46143",
    bg: "#FFF0E9",
  },
  {
    icon: Users,
    title: "Équipe pédagogique",
    description: "Donnez à vos enseignants les bons outils pour préparer leurs cours et accompagner leurs classes.",
    color: "#3C4D93",
    bg: "#E9ECF8",
  },
  {
    icon: WalletCards,
    title: "Finances maîtrisées",
    description: "Suivez les frais, les paiements et les relances avec une vue simple, adaptée à votre réalité.",
    color: "#B07818",
    bg: "#FFF3D5",
  },
  {
    icon: MessageSquareText,
    title: "Communication fluide",
    description: "Rassemblez direction, équipe et familles autour d’informations fiables et accessibles.",
    color: "#2B8064",
    bg: "#E4F1EB",
  },
];

const audiences = [
  "Écoles privées et groupes scolaires",
  "Établissements en croissance",
  "Associations et réseaux éducatifs",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const showMessage = (message: string) => toast.info(message);

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F4EE] text-[#1F2330]">
      <header className="relative z-30 border-b border-[#E7E0D5]/80 bg-[#F7F4EE]/90 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <span className="brand-mark">EA</span>
            <span className="text-left"><span className="block font-display text-[22px] leading-none text-[#202A55]">EduAfrica</span><span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A8E80]">School OS</span></span>
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#fonctionnalites" className="text-sm font-semibold text-[#766E63] transition hover:text-[#202A55]">Fonctionnalités</a>
            <a href="#pour-qui" className="text-sm font-semibold text-[#766E63] transition hover:text-[#202A55]">Pour qui ?</a>
            <a href="#vision" className="text-sm font-semibold text-[#766E63] transition hover:text-[#202A55]">Notre vision</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex"><button className="rounded-xl px-3 py-2 text-sm font-bold text-[#766E63] transition hover:bg-[#EEE7DD]" onClick={() => showMessage("Le parcours de connexion sera bientôt disponible.")}>Se connecter</button><Link href="/dashboard"><Button className="h-10 rounded-xl bg-[#D46143] px-4 font-bold text-white shadow-[0_8px_18px_rgba(212,97,67,0.18)] hover:bg-[#C55438]">Voir la démo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>
          <button className="rounded-xl p-2 text-[#202A55] hover:bg-[#EEE7DD] lg:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Ouvrir le menu">{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {mobileMenuOpen && <div className="border-t border-[#E7E0D5] bg-[#FFFDF9] px-5 py-5 lg:hidden"><nav className="flex flex-col gap-4"><a href="#fonctionnalites" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-[#202A55]">Fonctionnalités</a><a href="#pour-qui" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-[#202A55]">Pour qui ?</a><a href="#vision" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-[#202A55]">Notre vision</a></nav><Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}><Button className="mt-5 h-11 w-full rounded-xl bg-[#D46143] font-bold text-white">Voir la démo interactive <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>}
      </header>

      <main>
        <section className="relative mx-auto max-w-[1240px] px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-24">
          <div className="absolute left-[-180px] top-10 h-[420px] w-[420px] rounded-full border-[40px] border-[#F2C35B]/15" />
          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className="relative z-10 max-w-[590px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5D8C7] bg-[#FFFDF9] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D46143] shadow-sm"><Sparkles className="h-3.5 w-3.5" /> Le cockpit des écoles africaines</div>
              <h1 className="max-w-xl font-display text-[48px] leading-[0.98] tracking-[-0.045em] text-[#202A55] sm:text-[62px]">Faites grandir votre école, <span className="relative inline-block text-[#D46143]">pas votre paperasse.<span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#F2C35B]/60" /></span></h1>
              <p className="mt-7 max-w-[510px] text-[17px] leading-8 text-[#766E63]">EduAfrica rassemble les élèves, les équipes, les familles et les finances dans un espace simple, pensé pour les réalités des établissements en Afrique.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/dashboard"><Button className="h-13 rounded-xl bg-[#D46143] px-5 text-sm font-bold text-white shadow-[0_12px_24px_rgba(212,97,67,0.2)] hover:bg-[#C55438]">Explorer la démo <ArrowRight className="ml-2 h-4 w-4" /></Button></Link><a href="#fonctionnalites"><Button variant="outline" className="h-13 rounded-xl border-[#D9CEC0] bg-[#FFFDF9] px-5 text-sm font-bold text-[#202A55] hover:bg-[#F0EAE0]"><Play className="mr-2 h-4 w-4 fill-[#F2C35B] text-[#B07818]" /> Découvrir comment ça marche</Button></a></div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-[#8C8174]"><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#2B8064]" /> Sans installation complexe</span><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#2B8064]" /> Pensé mobile</span></div>
            </div>

            <div className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
              <div className="absolute -right-5 -top-8 hidden h-28 w-28 rounded-full border-[18px] border-[#D46143]/20 sm:block" />
              <div className="relative overflow-hidden rounded-[30px] bg-[#202A55] p-3 shadow-[0_28px_60px_rgba(32,42,85,0.18)] sm:p-4">
                <div className="relative overflow-hidden rounded-[23px] bg-[#EEE5D6]">
                  <img src="/manus-storage/eduafrica-classroom_0d3c4eaf.jpg" alt="Élèves dans une salle de classe africaine" className="h-[360px] w-full object-cover sm:h-[460px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202A55]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F2C35B]">Une vision commune</p><p className="mt-1 font-display text-2xl leading-tight">Chaque école a son histoire. Votre outil aussi.</p></div>
                </div>
                <div className="absolute -left-8 top-16 hidden w-[175px] rounded-2xl border border-white/50 bg-[#FFFDF9]/95 p-3 shadow-[0_16px_30px_rgba(32,42,85,0.16)] backdrop-blur sm:block"><div className="mb-2 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9A8E80]">Assiduité</span><span className="h-2 w-2 rounded-full bg-[#2B8064]" /></div><p className="font-display text-3xl text-[#202A55]">96,2%</p><p className="mt-1 text-[10px] font-bold text-[#2B8064]">+3,1% ce mois</p></div>
                <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-white/40 bg-[#F4E4C5] px-4 py-3 shadow-[0_14px_26px_rgba(32,42,85,0.12)] sm:-right-7"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D46143] text-white"><Globe2 className="h-4 w-4" /></span><span><span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A6A3F]">Déjà pensé pour</span><span className="mt-0.5 block text-sm font-bold text-[#202A55]">l’Afrique d’aujourd’hui</span></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E7E0D5] bg-[#FFFDF9]" id="vision"><div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8"><p className="max-w-[330px] text-sm font-semibold leading-6 text-[#766E63]">Une base solide pour les équipes qui font avancer l’éducation.</p><div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[0.13em] text-[#ADA398] sm:flex sm:items-center sm:gap-10"><span>Écoles privées</span><span>Réseaux éducatifs</span><span>Académies</span><span>Associations</span></div></div></section>

        <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28" id="fonctionnalites">
          <div className="max-w-[650px]"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D46143]">Tout au même endroit</p><h2 className="font-display text-4xl leading-tight tracking-[-0.03em] text-[#202A55] md:text-5xl">Une école plus lisible,<br /><span className="text-[#D46143]">une équipe plus sereine.</span></h2><p className="mt-5 text-base leading-7 text-[#766E63]">Moins de fichiers dispersés. Plus de temps pour les élèves. EduAfrica vous aide à transformer les opérations du quotidien en décisions simples.</p></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map((feature) => { const Icon = feature.icon; return <div key={feature.title} className="group rounded-2xl border border-[#E7E0D5] bg-[#FFFDF9] p-5 transition hover:-translate-y-1 hover:border-[#D5C8B9] hover:shadow-[0_16px_30px_rgba(47,40,29,0.07)]"><span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: feature.bg, color: feature.color }}><Icon className="h-5 w-5 transition group-hover:scale-110" /></span><h3 className="mt-5 font-display text-xl text-[#202A55]">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-[#766E63]">{feature.description}</p><button className="mt-5 flex items-center gap-1 text-xs font-bold text-[#D46143]" onClick={() => showMessage(`${feature.title} sera disponible dans votre espace démo.`)}>En savoir plus <ChevronRight className="h-3.5 w-3.5" /></button></div>; })}</div>
        </section>

        <section className="bg-[#202A55]" id="pour-qui"><div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F2C35B]">Conçu avec le terrain</p><h2 className="font-display text-4xl leading-tight tracking-[-0.03em] text-white md:text-5xl">Un outil qui s’adapte à votre école.</h2><p className="mt-5 max-w-[470px] text-base leading-7 text-[#D7DBEA]">Commencez simplement, puis faites évoluer votre espace à mesure que votre communauté grandit.</p><Link href="/dashboard"><Button className="mt-8 h-12 rounded-xl bg-[#F2C35B] px-5 font-bold text-[#202A55] hover:bg-[#F6D37F]">Voir l’espace de démonstration <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div><div className="grid gap-3 sm:grid-cols-2">{audiences.map((audience, index) => <div key={audience} className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 transition hover:bg-white/[0.1]"><div className="mb-8 flex items-center justify-between"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D46143] text-white">{index === 0 ? <GraduationCap className="h-4 w-4" /> : index === 1 ? <BarChart3 className="h-4 w-4" /> : <HeartHandshake className="h-4 w-4" />}</span><span className="font-display text-3xl text-white/20">0{index + 1}</span></div><p className="font-display text-xl text-white">{audience}</p><p className="mt-2 text-sm leading-6 text-[#BFC5DF]">Une expérience claire pour mieux coordonner vos priorités.</p></div>)}</div></div></section>

        <section className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28"><div className="relative overflow-hidden rounded-[28px] bg-[#F4E4C5] px-6 py-12 text-center md:px-12 md:py-16"><div className="absolute -left-10 -top-20 h-48 w-48 rounded-full border-[24px] border-[#D46143]/10" /><div className="absolute -bottom-24 -right-8 h-56 w-56 rounded-full border-[22px] border-[#202A55]/10" /><div className="relative z-10 mx-auto max-w-[680px]"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202A55] text-[#F2C35B]"><ShieldCheck className="h-5 w-5" /></span><h2 className="mt-6 font-display text-4xl leading-tight tracking-[-0.03em] text-[#202A55] md:text-5xl">Prêt à donner un nouvel élan à votre école ?</h2><p className="mx-auto mt-4 max-w-[520px] text-base leading-7 text-[#675A4A]">Découvrez l’expérience EduAfrica avec une démo client basée sur des données fictives.</p><Link href="/dashboard"><Button className="mt-8 h-12 rounded-xl bg-[#D46143] px-6 font-bold text-white shadow-[0_10px_22px_rgba(212,97,67,0.18)] hover:bg-[#C55438]">Lancer la démo EduAfrica <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div></div></section>
      </main>

      <footer className="border-t border-[#E7E0D5] bg-[#FFFDF9]"><div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8"><div className="flex items-center gap-3"><span className="brand-mark">EA</span><span><span className="block font-display text-lg text-[#202A55]">EduAfrica</span><span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#9A8E80]">La gestion scolaire, autrement.</span></span></div><div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[#9A8E80]"><button onClick={() => showMessage("Centre d’aide bientôt disponible.")}>Centre d’aide</button><button onClick={() => showMessage("La documentation arrive bientôt.")}>Documentation</button><span>© 2026 EduAfrica</span></div></div></footer>
    </div>
  );
}
