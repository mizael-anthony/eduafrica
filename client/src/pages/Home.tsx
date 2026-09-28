import { startLogin } from "@/const";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpenCheck,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  GraduationCap,
  Home as HomeIcon,
  LayoutDashboard,
  Megaphone,
  Menu,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

type School = {
  name: string;
  city: string;
  country: string;
  currency: string;
};

const navigation = [
  { label: "Vue d’ensemble", icon: LayoutDashboard },
  { label: "Élèves", icon: GraduationCap },
  { label: "Enseignants", icon: Users },
  { label: "Classes & cours", icon: BookOpenCheck },
  { label: "Finances", icon: WalletCards },
  { label: "Communication", icon: MessageSquareText },
];

const quickModules = [
  { label: "Présences", detail: "Suivi quotidien", icon: ClipboardCheck, tone: "coral" },
  { label: "Bulletins", detail: "Notes & appréciations", icon: BarChart3, tone: "indigo" },
  { label: "Trésorerie", detail: "Frais de scolarité", icon: CircleDollarSign, tone: "gold" },
  { label: "Messages", detail: "Familles & équipe", icon: Megaphone, tone: "green" },
];

const attendance = [
  { day: "Lun", value: 88 },
  { day: "Mar", value: 94 },
  { day: "Mer", value: 91 },
  { day: "Jeu", value: 97 },
  { day: "Ven", value: 96 },
];

const initialSchools: School[] = [
  { name: "École La Source", city: "Dakar", country: "Sénégal", currency: "FCFA" },
  { name: "Groupe scolaire Horizon", city: "Abidjan", country: "Côte d’Ivoire", currency: "FCFA" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("Vue d’ensemble");
  const [schools, setSchools] = useState(initialSchools);
  const [selectedSchool, setSelectedSchool] = useState(initialSchools[0]);
  const [schoolMenuOpen, setSchoolMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAddSchoolOpen, setIsAddSchoolOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<number[]>([1]);
  const [newSchool, setNewSchool] = useState({
    name: "",
    city: "",
    country: "Sénégal",
    currency: "FCFA",
  });

  const handleNav = (label: string) => {
    setActiveSection(label);
    setMobileMenuOpen(false);
    if (label !== "Vue d’ensemble") {
      toast.info(`${label} sera disponible dans votre espace complet.`);
    }
  };

  const handleAddSchool = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newSchool.name.trim() || !newSchool.city.trim()) {
      toast.error("Renseignez le nom de l’école et la ville.");
      return;
    }
    const createdSchool = { ...newSchool };
    setSchools((current) => [...current, createdSchool]);
    setSelectedSchool(createdSchool);
    setNewSchool({ name: "", city: "", country: "Sénégal", currency: "FCFA" });
    setIsAddSchoolOpen(false);
    toast.success(`${createdSchool.name} a été ajoutée à votre espace.`);
  };

  const toggleTask = (taskId: number) => {
    setCompletedTasks((current) =>
      current.includes(taskId) ? current.filter((id) => id !== taskId) : [...current, taskId],
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1F2330]">
      <div className="flex min-h-screen">
        <aside
          className={`fixed inset-y-0 left-0 z-50 flex w-[272px] flex-col border-r border-[#E7E0D5] bg-[#FFFDF9] px-5 py-6 transition-transform duration-200 lg:static lg:translate-x-0 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="mb-10 flex items-center justify-between">
            <button className="flex items-center gap-3" onClick={() => handleNav("Vue d’ensemble")}>
              <span className="brand-mark">EA</span>
              <span className="text-left">
                <span className="block font-display text-[22px] leading-none text-[#202A55]">EduAfrica</span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A8E80]">School OS</span>
              </span>
            </button>
            <button
              className="rounded-lg p-2 text-[#766E63] hover:bg-[#F3EEE6] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative mb-8">
            <button
              className="flex w-full items-center gap-3 rounded-2xl bg-[#F7F1E8] p-3 text-left transition hover:bg-[#F1E7DA]"
              onClick={() => setSchoolMenuOpen((open) => !open)}
              aria-expanded={schoolMenuOpen}
            >
              <span className="school-avatar">LS</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-bold uppercase tracking-[0.12em] text-[#9A8E80]">École active</span>
                <span className="mt-1 block truncate text-sm font-bold text-[#202A55]">{selectedSchool.name}</span>
              </span>
              <ChevronDown className={`h-4 w-4 text-[#8A7D6D] transition ${schoolMenuOpen ? "rotate-180" : ""}`} />
            </button>
            {schoolMenuOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 rounded-2xl border border-[#E7E0D5] bg-white p-2 shadow-[0_18px_45px_rgba(47,40,29,0.12)]">
                {schools.map((school) => (
                  <button
                    key={`${school.name}-${school.city}`}
                    className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm hover:bg-[#F7F1E8]"
                    onClick={() => {
                      setSelectedSchool(school);
                      setSchoolMenuOpen(false);
                      toast.success(`Vue ouverte sur ${school.name}.`);
                    }}
                  >
                    <span className="h-2 w-2 rounded-full bg-[#D46143]" />
                    <span className="min-w-0 flex-1 truncate font-medium">{school.name}</span>
                    {selectedSchool.name === school.name && <Check className="h-4 w-4 text-[#D46143]" />}
                  </button>
                ))}
                <button
                  className="mt-1 flex w-full items-center gap-2 rounded-xl border-t border-[#EEE7DD] px-3 py-3 pt-3 text-left text-sm font-bold text-[#D46143] hover:bg-[#FFF7F2]"
                  onClick={() => {
                    setSchoolMenuOpen(false);
                    setIsAddSchoolOpen(true);
                  }}
                >
                  <Plus className="h-4 w-4" /> Ajouter une école
                </button>
              </div>
            )}
          </div>

          <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ADA398]">Pilotage</div>
          <nav className="space-y-1.5">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.label)}
                  className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${isActive ? "bg-[#202A55] text-white shadow-[0_8px_18px_rgba(32,42,85,0.15)]" : "text-[#766E63] hover:bg-[#F7F1E8] hover:text-[#202A55]"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className={`h-[18px] w-[18px] ${isActive ? "text-[#F2C35B]" : "text-[#A79B8B] group-hover:text-[#D46143]"}`} />
                  {item.label}
                  {item.label === "Communication" && <span className="ml-auto h-2 w-2 rounded-full bg-[#D46143]" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto rounded-2xl bg-[#F4E4C5] p-4 pattern-marks">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#202A55] text-[#F2C35B]"><Sparkles className="h-4 w-4" /></div>
            <p className="font-display text-lg leading-tight text-[#202A55]">Vos équipes, mieux outillées.</p>
            <p className="mt-2 text-xs leading-relaxed text-[#675A4A]">Centralisez les informations pour libérer du temps pédagogique.</p>
            <button className="mt-4 text-xs font-bold text-[#C34F32] underline underline-offset-4" onClick={() => toast.info("Le centre de ressources arrive bientôt.")}>Découvrir les ressources</button>
          </div>

          <button className="mt-5 flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-[#766E63] transition hover:bg-[#F7F1E8] hover:text-[#202A55]" onClick={() => toast.info("Les réglages de l’espace arrivent bientôt.")}>
            <Settings2 className="h-[18px] w-[18px] text-[#A79B8B]" /> Paramètres
          </button>
        </aside>

        {mobileMenuOpen && <button className="fixed inset-0 z-40 bg-[#202A55]/30 lg:hidden" onClick={() => setMobileMenuOpen(false)} aria-label="Fermer le menu" />}

        <main className="min-w-0 flex-1">
          <header className="flex h-[82px] items-center justify-between border-b border-[#E7E0D5] bg-[#F7F4EE]/90 px-5 backdrop-blur md:px-10">
            <div className="flex items-center gap-3">
              <button className="rounded-xl p-2 text-[#766E63] hover:bg-[#EEE7DD] lg:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="Ouvrir le menu"><Menu className="h-5 w-5" /></button>
              <div className="hidden items-center gap-2 text-xs font-semibold text-[#9A8E80] sm:flex"><HomeIcon className="h-3.5 w-3.5" /> / <span className="text-[#202A55]">{activeSection}</span></div>
              <div className="sm:hidden"><p className="font-display text-lg text-[#202A55]">{activeSection}</p></div>
            </div>
            <div className="flex items-center gap-2 md:gap-5">
              <button className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#766E63] transition hover:bg-[#EEE7DD] md:flex" onClick={() => toast.info("Le centre d’aide sera bientôt disponible.")}><Search className="h-4 w-4" /> Rechercher</button>
              <button className="relative rounded-xl p-2.5 text-[#766E63] transition hover:bg-[#EEE7DD]" onClick={() => toast.info("Vous êtes à jour, aucune nouvelle notification.")} aria-label="Notifications"><Bell className="h-[18px] w-[18px]" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#D46143]" /></button>
              <div className="h-7 w-px bg-[#E3DACD]" />
              <button className="flex items-center gap-3" onClick={() => toast.info("Profil démo : Aïcha Diallo")}>
                <div className="hidden text-right sm:block"><p className="text-sm font-bold text-[#202A55]">Aïcha Diallo</p><p className="text-[11px] text-[#9A8E80]">Direction</p></div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D46143] text-sm font-bold text-white shadow-sm">AD</div>
              </button>
            </div>
          </header>

          <div className="mx-auto max-w-[1480px] px-5 py-7 md:px-10 md:py-10">
            <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D46143]"><span className="h-2 w-2 rounded-full bg-[#D46143]" /> Mercredi 28 septembre 2026</p>
                <h1 className="font-display text-4xl leading-[1.05] tracking-[-0.03em] text-[#202A55] md:text-5xl">Bonjour, Aïcha.</h1>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#766E63]">Voici ce qui se passe à <span className="font-bold text-[#202A55]">{selectedSchool.name}</span> aujourd’hui.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="h-11 rounded-xl border-[#DDD3C6] bg-[#FFFDF9] px-4 font-bold text-[#202A55] hover:bg-[#F3EEE6]" onClick={() => toast.info("Le planning détaillé arrive bientôt.")}><CalendarDays className="mr-2 h-4 w-4 text-[#D46143]" /> Voir le planning</Button>
                <Button className="h-11 rounded-xl bg-[#D46143] px-4 font-bold text-white shadow-[0_8px_20px_rgba(212,97,67,0.2)] hover:bg-[#C55438]" onClick={() => setIsAddSchoolOpen(true)}><Plus className="mr-2 h-4 w-4" /> Ajouter une école</Button>
              </div>
            </section>

            <section className="relative mb-8 overflow-hidden rounded-[28px] bg-[#202A55] px-6 py-7 text-white shadow-[0_18px_35px_rgba(32,42,85,0.14)] md:px-9 md:py-8">
              <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border-[26px] border-[#F2C35B]/20" />
              <div className="absolute bottom-[-105px] right-[28%] h-48 w-48 rounded-full border-[18px] border-[#D46143]/20" />
              <div className="relative z-10 max-w-[640px]">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#F2C35B]"><ShieldCheck className="h-4 w-4" /> Votre rentrée, en un seul espace</div>
                <h2 className="max-w-xl font-display text-3xl leading-tight tracking-[-0.02em] md:text-4xl">Pilotez votre école avec plus de clarté.</h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#D7DBEA]">Les bonnes informations au bon moment pour accompagner chaque élève, chaque famille et chaque membre de votre équipe.</p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F2C35B] transition hover:gap-3" onClick={() => toast.success("Votre espace EduAfrica est prêt à être personnalisé.")}>Personnaliser mon espace <ArrowUpRight className="h-4 w-4" /></button>
              </div>
              <div className="relative z-10 mt-7 flex max-w-[390px] items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-2 backdrop-blur md:absolute md:bottom-8 md:right-9 md:mt-0">
                <img src="/manus-storage/eduafrica-classroom_0d3c4eaf.jpg" alt="Salle de classe en Afrique" className="h-20 w-28 rounded-xl object-cover" />
                <div className="pr-2"><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F2C35B]">École pilote</p><p className="mt-1 text-sm font-bold">Une vision commune, des progrès visibles.</p><p className="mt-1 text-xs text-[#D7DBEA]">Dakar, Sénégal</p></div>
              </div>
            </section>

            <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Élèves inscrits", value: "1 248", change: "+8,4%", icon: GraduationCap, color: "#D46143", bg: "#FFF0E9" },
                { label: "Enseignants actifs", value: "42", change: "+2 ce mois", icon: Users, color: "#3C4D93", bg: "#E9ECF8" },
                { label: "Taux de présence", value: "96,2%", change: "+3,1%", icon: Activity, color: "#2B8064", bg: "#E4F1EB" },
                { label: "Recettes du mois", value: "18,46 M", change: "FCFA · +12%", icon: CircleDollarSign, color: "#B07818", bg: "#FFF3D5" },
              ].map((stat) => {
                const Icon = stat.icon;
                return <div key={stat.label} className="rounded-2xl border border-[#E7E0D5] bg-[#FFFDF9] p-5 shadow-[0_8px_20px_rgba(47,40,29,0.035)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(47,40,29,0.08)]">
                  <div className="mb-5 flex items-start justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: stat.bg, color: stat.color }}><Icon className="h-5 w-5" /></span><button className="text-[#B5AA9E] hover:text-[#202A55]" onClick={() => toast.info(`Détail : ${stat.label}`)} aria-label={`Voir le détail de ${stat.label}`}><MoreHorizontal className="h-5 w-5" /></button></div>
                  <p className="text-[13px] font-semibold text-[#9A8E80]">{stat.label}</p><div className="mt-1 flex items-end justify-between gap-2"><p className="font-display text-[30px] leading-none text-[#202A55]">{stat.value}</p><span className="mb-0.5 flex items-center gap-1 text-[11px] font-bold text-[#2B8064]"><ArrowUpRight className="h-3.5 w-3.5" /> {stat.change}</span></div>
                </div>;
              })}
            </section>

            <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(330px,0.8fr)]">
              <div className="rounded-2xl border border-[#E7E0D5] bg-[#FFFDF9] p-5 shadow-[0_8px_20px_rgba(47,40,29,0.035)] md:p-6">
                <div className="mb-8 flex items-start justify-between"><div><div className="flex items-center gap-2"><h2 className="font-display text-2xl text-[#202A55]">Assiduité cette semaine</h2><span className="rounded-full bg-[#E4F1EB] px-2 py-1 text-[10px] font-bold text-[#2B8064]">Excellent</span></div><p className="mt-1 text-sm text-[#9A8E80]">Présence moyenne de vos élèves</p></div><button className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold text-[#766E63] hover:bg-[#F3EEE6]" onClick={() => toast.info("Filtre de période bientôt disponible.")}>Cette semaine <ChevronDown className="h-3.5 w-3.5" /></button></div>
                <div className="flex h-[220px] items-end gap-3 border-b border-l border-[#EEE7DD] px-3 pb-0 pt-5 sm:gap-7 sm:px-7">
                  {attendance.map((item) => <div key={item.day} className="group flex h-full flex-1 flex-col items-center justify-end gap-3"><div className="relative flex h-full w-full items-end justify-center"><div className="absolute bottom-0 h-full w-px border-l border-dashed border-[#EEE7DD]" /><div className="relative z-10 w-full max-w-[44px] rounded-t-lg bg-[#E2E6F5] transition-all duration-300 group-hover:bg-[#C9D0EF]" style={{ height: `${item.value}%` }}><div className="absolute -top-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-[#202A55] px-2 py-1 text-[10px] font-bold text-white group-hover:block">{item.value}%</div></div></div><span className="mb-[-24px] text-[11px] font-bold text-[#9A8E80]">{item.day}</span></div>)}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-[#766E63]"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#3C4D93]" /> Présence en classe</span><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#F2C35B]" /> Objectif 90%</span><span className="ml-auto font-bold text-[#2B8064]">+4,8% vs. semaine dernière</span></div>
              </div>

              <div className="rounded-2xl border border-[#E7E0D5] bg-[#FFFDF9] p-5 shadow-[0_8px_20px_rgba(47,40,29,0.035)] md:p-6">
                <div className="mb-6 flex items-start justify-between"><div><h2 className="font-display text-2xl text-[#202A55]">À faire cette semaine</h2><p className="mt-1 text-sm text-[#9A8E80]">Les prochaines actions de l’équipe</p></div><span className="rounded-full bg-[#FFF0E9] px-2.5 py-1 text-[11px] font-bold text-[#D46143]">3 restantes</span></div>
                <div className="space-y-2">
                  {[{ id: 1, title: "Valider les absences du jour", meta: "Aujourd’hui · Direction", tone: "urgent" }, { id: 2, title: "Réunion pédagogique", meta: "Demain à 09:00 · Salle 2", tone: "normal" }, { id: 3, title: "Relancer les frais du trimestre", meta: "Jeudi · Comptabilité", tone: "normal" }, { id: 4, title: "Publier le mot aux familles", meta: "Vendredi · Communication", tone: "normal" }].map((task) => { const done = completedTasks.includes(task.id); return <button key={task.id} className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${done ? "bg-[#F4F7F1]" : "hover:bg-[#F8F4ED]"}`} onClick={() => toggleTask(task.id)}><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${done ? "border-[#2B8064] bg-[#2B8064] text-white" : task.tone === "urgent" ? "border-[#D46143]" : "border-[#D7CDC0]"}`}>{done && <Check className="h-3 w-3" />}</span><span className="min-w-0 flex-1"><span className={`block truncate text-sm font-bold ${done ? "text-[#9A8E80] line-through" : "text-[#3A3B43]"}`}>{task.title}</span><span className="mt-1 block truncate text-[11px] text-[#9A8E80]">{task.meta}</span></span>{!done && task.tone === "urgent" && <span className="h-2 w-2 rounded-full bg-[#D46143]" />}</button>; })}
                </div>
                <button className="mt-5 flex items-center gap-2 text-xs font-bold text-[#D46143] hover:text-[#B9472D]" onClick={() => toast.info("La liste complète sera disponible dans le module Tâches.")}>Voir toutes les tâches <ArrowUpRight className="h-3.5 w-3.5" /></button>
              </div>
            </section>

            <section className="mt-8">
              <div className="mb-4 flex items-end justify-between"><div><p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D46143]">Tout pour votre école</p><h2 className="font-display text-2xl text-[#202A55]">Modules essentiels</h2></div><button className="text-sm font-bold text-[#D46143] hover:underline" onClick={() => toast.info("La bibliothèque de modules arrive bientôt.")}>Voir tous les modules</button></div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{quickModules.map((module) => { const Icon = module.icon; const tone = { coral: { bg: "#FFF0E9", color: "#D46143" }, indigo: { bg: "#E9ECF8", color: "#3C4D93" }, gold: { bg: "#FFF3D5", color: "#B07818" }, green: { bg: "#E4F1EB", color: "#2B8064" } }[module.tone as "coral" | "indigo" | "gold" | "green"]; return <button key={module.label} className="group flex items-center gap-4 rounded-2xl border border-[#E7E0D5] bg-[#FFFDF9] p-4 text-left transition hover:-translate-y-0.5 hover:border-[#D6C8B8] hover:shadow-[0_10px_22px_rgba(47,40,29,0.07)]" onClick={() => handleNav(module.label)}><span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: tone.bg, color: tone.color }}><Icon className="h-5 w-5 transition group-hover:scale-110" /></span><span className="min-w-0"><span className="block font-bold text-[#202A55]">{module.label}</span><span className="mt-1 block text-xs text-[#9A8E80]">{module.detail}</span></span><ArrowUpRight className="ml-auto h-4 w-4 text-[#B7AC9E] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D46143]" /></button>; })}</div>
            </section>

            <footer className="mt-10 flex flex-col justify-between gap-3 border-t border-[#E7E0D5] py-6 text-xs text-[#9A8E80] sm:flex-row"><p>EduAfrica · Pour des écoles qui font grandir l’avenir.</p><div className="flex gap-4"><button onClick={() => toast.info("Centre d’aide bientôt disponible.")}>Centre d’aide</button><button onClick={() => toast.info("La documentation arrive bientôt.")}>Documentation</button></div></footer>
          </div>
        </main>
      </div>

      {isAddSchoolOpen && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#202A55]/35 px-4 py-8 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="add-school-title">
        <div className="w-full max-w-lg overflow-hidden rounded-[26px] border border-[#E7E0D5] bg-[#FFFDF9] shadow-[0_30px_80px_rgba(32,42,85,0.24)]">
          <div className="flex items-start justify-between border-b border-[#EEE7DD] px-6 py-5"><div><p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D46143]">Nouvel espace</p><h2 id="add-school-title" className="font-display text-2xl text-[#202A55]">Créer une école</h2><p className="mt-1 text-sm text-[#766E63]">Commencez par les informations essentielles.</p></div><button className="rounded-xl p-2 text-[#9A8E80] hover:bg-[#F3EEE6]" onClick={() => setIsAddSchoolOpen(false)} aria-label="Fermer"><X className="h-5 w-5" /></button></div>
          <form onSubmit={handleAddSchool} className="space-y-5 px-6 py-6"><label className="block"><span className="mb-2 block text-sm font-bold text-[#3A3B43]">Nom de l’école</span><input autoFocus value={newSchool.name} onChange={(event) => setNewSchool({ ...newSchool, name: event.target.value })} placeholder="Ex. École Les Pionniers" className="h-12 w-full rounded-xl border border-[#DDD3C6] bg-white px-4 text-sm outline-none transition placeholder:text-[#B8AEA2] focus:border-[#D46143] focus:ring-4 focus:ring-[#D46143]/10" /></label><div className="grid gap-5 sm:grid-cols-2"><label className="block"><span className="mb-2 block text-sm font-bold text-[#3A3B43]">Pays</span><select value={newSchool.country} onChange={(event) => setNewSchool({ ...newSchool, country: event.target.value })} className="h-12 w-full appearance-none rounded-xl border border-[#DDD3C6] bg-white px-4 text-sm outline-none focus:border-[#D46143] focus:ring-4 focus:ring-[#D46143]/10"><option>Sénégal</option><option>Côte d’Ivoire</option><option>Maroc</option><option>Ghana</option><option>Kenya</option><option>Rwanda</option></select></label><label className="block"><span className="mb-2 block text-sm font-bold text-[#3A3B43]">Ville</span><input value={newSchool.city} onChange={(event) => setNewSchool({ ...newSchool, city: event.target.value })} placeholder="Ex. Dakar" className="h-12 w-full rounded-xl border border-[#DDD3C6] bg-white px-4 text-sm outline-none transition placeholder:text-[#B8AEA2] focus:border-[#D46143] focus:ring-4 focus:ring-[#D46143]/10" /></label></div><label className="block"><span className="mb-2 block text-sm font-bold text-[#3A3B43]">Devise de référence</span><select value={newSchool.currency} onChange={(event) => setNewSchool({ ...newSchool, currency: event.target.value })} className="h-12 w-full appearance-none rounded-xl border border-[#DDD3C6] bg-white px-4 text-sm outline-none focus:border-[#D46143] focus:ring-4 focus:ring-[#D46143]/10"><option>FCFA</option><option>Dirham marocain</option><option>Cedi ghanéen</option><option>Shilling kényan</option><option>Dollar</option></select></label><div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end"><Button type="button" variant="outline" className="h-11 rounded-xl border-[#DDD3C6] font-bold text-[#766E63]" onClick={() => setIsAddSchoolOpen(false)}>Annuler</Button><Button type="submit" className="h-11 rounded-xl bg-[#D46143] font-bold text-white hover:bg-[#C55438]"><Plus className="mr-2 h-4 w-4" /> Créer l’école</Button></div></form>
        </div>
      </div>}
    </div>
  );
}
