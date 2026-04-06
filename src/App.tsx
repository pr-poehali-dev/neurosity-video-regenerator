import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "gallery" | "editor" | "templates";

const NAV_ITEMS: { id: Page; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "Sparkles" },
  { id: "gallery", label: "Галерея", icon: "Images" },
  { id: "editor", label: "Редактор", icon: "Wand2" },
  { id: "templates", label: "Шаблоны", icon: "LayoutGrid" },
];

const GALLERY_ITEMS = [
  { id: 1, title: "Кибергород", category: "Футуризм", duration: "0:15", views: "128K", color: "from-violet-600 to-pink-600", emoji: "🌆" },
  { id: 2, title: "Морской рассвет", category: "Природа", duration: "0:30", views: "89K", color: "from-cyan-600 to-blue-600", emoji: "🌊" },
  { id: 3, title: "Неоновый танец", category: "Абстракция", duration: "0:20", views: "256K", color: "from-pink-600 to-orange-500", emoji: "💃" },
  { id: 4, title: "Космос", category: "Sci-Fi", duration: "0:45", views: "512K", color: "from-indigo-600 to-violet-600", emoji: "🚀" },
  { id: 5, title: "Лесная магия", category: "Природа", duration: "0:25", views: "67K", color: "from-emerald-600 to-teal-600", emoji: "🌿" },
  { id: 6, title: "Огненный вихрь", category: "Стихия", duration: "0:18", views: "341K", color: "from-orange-500 to-red-600", emoji: "🔥" },
];

const TEMPLATES = [
  { id: 1, title: "Продуктовый промо", desc: "Реклама товаров с динамичным монтажом", icon: "ShoppingBag", color: "from-violet-500 to-purple-700", tags: ["Реклама", "E-com"] },
  { id: 2, title: "Музыкальный клип", desc: "Синхронизация видео с ритмом музыки", icon: "Music2", color: "from-pink-500 to-rose-700", tags: ["Музыка", "Арт"] },
  { id: 3, title: "Кино-трейлер", desc: "Эпичный трейлер с титрами и эффектами", icon: "Film", color: "from-cyan-500 to-blue-700", tags: ["Кино"] },
  { id: 4, title: "Социальные сети", desc: "Короткое видео для Instagram и TikTok", icon: "Smartphone", color: "from-orange-500 to-amber-600", tags: ["Reels"] },
  { id: 5, title: "Корпоративный", desc: "Презентация бренда и достижений", icon: "Briefcase", color: "from-emerald-500 to-teal-700", tags: ["Бренд"] },
  { id: 6, title: "Обучающий", desc: "Наглядный обучающий ролик с анимацией", icon: "GraduationCap", color: "from-indigo-500 to-violet-700", tags: ["Edu"] },
];

const STATS = [
  { value: "2М+", label: "Видео создано", icon: "Video" },
  { value: "150K+", label: "Пользователей", icon: "Users" },
  { value: "98%", label: "Довольных клиентов", icon: "Star" },
  { value: "4 сек", label: "Время генерации", icon: "Zap" },
];

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [style, setStyle] = useState("cinematic");
  const [duration, setDuration] = useState("15");

  const handleGenerate = () => {
    if (!prompt) return;
    setGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#07070f] text-white font-golos overflow-x-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="orb orb-1 top-[-200px] left-[-200px]" />
        <div className="orb orb-2 bottom-[-150px] right-[-150px]" />
        <div className="orb orb-3 top-[40%] left-[50%] -translate-x-1/2" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 glass border-b border-white/5">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setPage("home")}>
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <span className="font-oswald font-bold text-xl tracking-wider text-gradient">LUMIX AI</span>
        </div>

        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                page === item.id
                  ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon name={item.icon} size={15} />
              {item.label}
            </button>
          ))}
        </div>

        <button className="btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full">
          Войти
        </button>
      </nav>

      {/* Mobile nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-white/5 flex">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs transition-all duration-300 ${
              page === item.id ? "text-violet-400" : "text-white/40"
            }`}
          >
            <Icon name={item.icon} size={20} />
            {item.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="relative z-10 pt-20 pb-24 md:pb-8">
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "gallery" && <GalleryPage items={GALLERY_ITEMS} />}
        {page === "editor" && (
          <EditorPage
            prompt={prompt} setPrompt={setPrompt}
            style={style} setStyle={setStyle}
            duration={duration} setDuration={setDuration}
            generating={generating} generated={generated}
            onGenerate={handleGenerate}
          />
        )}
        {page === "templates" && <TemplatesPage templates={TEMPLATES} setPage={setPage} />}
      </main>
    </div>
  );
}

/* ═══════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════ */
function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 min-h-[calc(100vh-80px)]">
        <div className="animate-fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-violet-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Генерация видео нового поколения
        </div>

        <h1 className="font-oswald font-bold text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-in delay-100">
          <span className="text-white">СОЗДАЙ </span>
          <span className="text-gradient">ВИДЕО</span>
          <br />
          <span className="text-white">ЗА 4 СЕКУНДЫ</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mb-10 animate-fade-in delay-200">
          Опиши своё видение — AI создаст профессиональное видео с кинематографическим качеством. Никаких навыков не нужно.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in delay-300">
          <button
            onClick={() => setPage("editor")}
            className="btn-gradient text-white font-semibold px-8 py-4 rounded-full text-lg flex items-center gap-2 glow-purple"
          >
            <Icon name="Wand2" size={20} />
            Начать создавать
          </button>
          <button
            onClick={() => setPage("gallery")}
            className="glass text-white font-semibold px-8 py-4 rounded-full text-lg flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
          >
            <Icon name="Play" size={20} />
            Смотреть примеры
          </button>
        </div>

        {/* Mock player */}
        <div className="mt-16 w-full max-w-3xl animate-fade-in delay-400">
          <div className="glass-strong rounded-2xl p-1.5">
            <div className="bg-gradient-to-br from-violet-900/40 to-pink-900/40 rounded-xl h-64 md:h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-pink-600/20" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full glass-strong flex items-center justify-center glow-purple cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Icon name="Play" size={36} className="text-white ml-1" />
                </div>
                <div className="text-white/50 text-sm">«Кибергород на рассвете в стиле аниме»</div>
              </div>
              <div className="absolute top-4 left-4 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-70" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[60%] bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {STATS.map((s, i) => (
          <div key={i} className="glass rounded-xl p-5 text-center animate-fade-in" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
            <Icon name={s.icon} size={24} className="text-violet-400 mx-auto mb-2" />
            <div className="font-oswald text-3xl font-bold text-gradient">{s.value}</div>
            <div className="text-white/40 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
        <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-10">
          <span className="text-white">ПОЧЕМУ </span>
          <span className="text-gradient">LUMIX AI</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: "Zap", title: "Молниеносно", desc: "Генерация за 4 секунды благодаря распределённым GPU-кластерам нового поколения", color: "text-yellow-400" },
            { icon: "Palette", title: "Любой стиль", desc: "От реализма до аниме, от кинематографа до пиксель-арт — более 50 стилей на выбор", color: "text-violet-400" },
            { icon: "Shield", title: "Ваши права", desc: "Полные авторские права на всё созданное вами видео без каких-либо ограничений", color: "text-emerald-400" },
          ].map((f, i) => (
            <div key={i} className="glass rounded-2xl p-7 hover:bg-white/[0.07] transition-all duration-300 group hover:-translate-y-1">
              <div className={`${f.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={f.icon} size={32} />
              </div>
              <h3 className="font-oswald text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════
   GALLERY PAGE
═══════════════════════════════════════ */
function GalleryPage({ items }: { items: typeof GALLERY_ITEMS }) {
  const [activeCategory, setActiveCategory] = useState("Все");
  const categories = ["Все", "Футуризм", "Природа", "Абстракция", "Sci-Fi", "Стихия"];
  const filtered = activeCategory === "Все" ? items : items.filter(i => i.category === activeCategory);

  return (
    <div className="px-6 md:px-12 py-8 max-w-7xl mx-auto">
      <div className="mb-10 animate-fade-in">
        <h1 className="font-oswald text-4xl md:text-6xl font-bold mb-3">
          <span className="text-gradient">ГАЛЕРЕЯ </span>
          <span className="text-white">РАБОТ</span>
        </h1>
        <p className="text-white/40">Видео, созданные пользователями Lumix AI</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 animate-fade-in delay-100">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat ? "btn-gradient text-white" : "glass text-white/60 hover:text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            className="glass rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className={`h-48 bg-gradient-to-br ${item.color} relative flex items-center justify-center`}>
              <span className="text-6xl">{item.emoji}</span>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 glass rounded px-2 py-0.5 text-xs text-white/80">
                {item.duration}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-oswald text-lg font-bold text-white">{item.title}</h3>
                <div className="flex items-center gap-1 text-white/40 text-xs">
                  <Icon name="Eye" size={12} />
                  {item.views}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-xs">{item.category}</span>
                <button className="text-white/30 hover:text-pink-400 transition-colors">
                  <Icon name="Heart" size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   EDITOR PAGE
═══════════════════════════════════════ */
function EditorPage({
  prompt, setPrompt, style, setStyle, duration, setDuration,
  generating, generated, onGenerate
}: {
  prompt: string; setPrompt: (v: string) => void;
  style: string; setStyle: (v: string) => void;
  duration: string; setDuration: (v: string) => void;
  generating: boolean; generated: boolean; onGenerate: () => void;
}) {
  const styles = [
    { id: "cinematic", label: "Кино", emoji: "🎬" },
    { id: "anime", label: "Аниме", emoji: "✨" },
    { id: "realistic", label: "Реализм", emoji: "📷" },
    { id: "abstract", label: "Абстракция", emoji: "🌀" },
    { id: "pixar", label: "3D Pixar", emoji: "🎭" },
    { id: "vintage", label: "Ретро", emoji: "📽️" },
  ];

  return (
    <div className="px-6 md:px-12 py-8 max-w-5xl mx-auto">
      <div className="mb-10 animate-fade-in">
        <h1 className="font-oswald text-4xl md:text-6xl font-bold mb-3">
          <span className="text-white">РЕДАКТОР </span>
          <span className="text-gradient">ВИДЕО</span>
        </h1>
        <p className="text-white/40">Опиши своё видение — AI воплотит его в жизнь</p>
      </div>

      <div className="grid lg:grid-cols-[1fr,300px] gap-6">
        {/* Left */}
        <div className="space-y-5">
          <div className="glass rounded-2xl p-6 animate-fade-in delay-100">
            <label className="flex items-center gap-2 text-white/50 text-sm mb-3">
              <Icon name="MessageSquare" size={15} />
              Описание видео
            </label>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="Например: кибергород на рассвете, неоновые огни отражаются в лужах, медленная камера, стиль аниме..."
              className="w-full bg-transparent text-white placeholder-white/20 text-sm resize-none outline-none leading-relaxed h-32"
            />
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
              <span className="text-white/20 text-xs">{prompt.length} символов</span>
              <button
                onClick={() => setPrompt("Кибергород на рассвете, неоновые вывески, дождь, отражения в лужах, медленная камера")}
                className="text-violet-400 hover:text-violet-300 text-xs transition-colors"
              >
                Вставить пример
              </button>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 animate-fade-in delay-200">
            <label className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <Icon name="Palette" size={15} />
              Стиль видео
            </label>
            <div className="grid grid-cols-3 gap-3">
              {styles.map(s => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                    style === s.id
                      ? "border-violet-500 bg-violet-500/20 text-white"
                      : "border-white/10 hover:border-white/20 text-white/50 hover:text-white"
                  }`}
                >
                  <span className="text-2xl">{s.emoji}</span>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6 animate-fade-in delay-300">
            <label className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <Icon name="Clock" size={15} />
              Длительность: <span className="text-violet-400 font-semibold ml-1">{duration} сек</span>
            </label>
            <div className="flex gap-3">
              {["5", "10", "15", "30", "60"].map(d => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
                    duration === d
                      ? "border-violet-500 bg-violet-500/20 text-violet-300"
                      : "border-white/10 text-white/40 hover:text-white hover:border-white/20"
                  }`}
                >
                  {d}с
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <div className="glass rounded-2xl p-1.5 animate-fade-in delay-200">
            <div className={`rounded-xl aspect-video flex items-center justify-center relative overflow-hidden transition-all duration-500 ${
              generated ? "bg-gradient-to-br from-violet-900 to-pink-900" : "bg-white/[0.03]"
            }`}>
              {!generating && !generated && (
                <div className="text-center text-white/20">
                  <Icon name="Video" size={36} className="mx-auto mb-2" />
                  <p className="text-xs">Предпросмотр появится здесь</p>
                </div>
              )}
              {generating && (
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full border-2 border-violet-400 border-t-transparent animate-spin mx-auto mb-3" />
                  <p className="text-violet-300 text-xs animate-pulse">Генерирую видео...</p>
                </div>
              )}
              {generated && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-pink-600/30" />
                  <div className="relative w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <div className="h-1 flex-1 bg-white/20 rounded-full" />
                    <span className="text-white/40 text-xs">{duration}с</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={onGenerate}
            disabled={!prompt || generating}
            className={`w-full py-4 rounded-xl font-oswald font-bold text-lg tracking-wider transition-all duration-300 flex items-center justify-center gap-2 animate-fade-in delay-300 ${
              !prompt || generating
                ? "bg-white/10 text-white/30 cursor-not-allowed"
                : "btn-gradient text-white glow-purple hover:-translate-y-0.5"
            }`}
          >
            {generating ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Создаю...
              </>
            ) : (
              <>
                <Icon name="Sparkles" size={20} />
                {generated ? "Создать снова" : "Создать видео"}
              </>
            )}
          </button>

          {generated && (
            <div className="flex gap-2 animate-scale-in">
              <button className="flex-1 glass rounded-xl py-3 text-sm font-medium text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Icon name="Download" size={15} />
                Скачать
              </button>
              <button className="flex-1 glass rounded-xl py-3 text-sm font-medium text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Icon name="Share2" size={15} />
                Поделиться
              </button>
            </div>
          )}

          <div className="glass rounded-xl p-4 animate-fade-in delay-400">
            <div className="flex items-center gap-2 text-white/40 text-xs mb-3">
              <Icon name="Settings" size={13} />
              Параметры экспорта
            </div>
            {[
              { label: "Качество", value: "4K Ultra HD" },
              { label: "FPS", value: "60 кадров/с" },
              { label: "Формат", value: "MP4 H.264" },
            ].map(p => (
              <div key={p.label} className="flex justify-between text-xs mb-1.5">
                <span className="text-white/30">{p.label}</span>
                <span className="text-violet-400">{p.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   TEMPLATES PAGE
═══════════════════════════════════════ */
function TemplatesPage({ templates, setPage }: { templates: typeof TEMPLATES; setPage: (p: Page) => void }) {
  return (
    <div className="px-6 md:px-12 py-8 max-w-7xl mx-auto">
      <div className="mb-10 animate-fade-in">
        <h1 className="font-oswald text-4xl md:text-6xl font-bold mb-3">
          <span className="text-white">ГОТОВЫЕ </span>
          <span className="text-gradient">ШАБЛОНЫ</span>
        </h1>
        <p className="text-white/40">Начни с проверенного шаблона и настрой под себя</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {templates.map((t, i) => (
          <div
            key={t.id}
            className="glass rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className={`h-36 bg-gradient-to-br ${t.color} relative flex items-center justify-center`}>
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name={t.icon} size={30} className="text-white" />
              </div>
              <div className="absolute top-4 right-4 flex gap-1 flex-wrap justify-end">
                {t.tags.map(tag => (
                  <span key={tag} className="text-white/80 text-xs bg-black/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-oswald text-xl font-bold text-white mb-2">{t.title}</h3>
              <p className="text-white/40 text-sm mb-5 leading-relaxed">{t.desc}</p>
              <button
                onClick={() => setPage("editor")}
                className="w-full btn-gradient text-white font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <Icon name="Wand2" size={16} />
                Использовать шаблон
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 glass-strong rounded-2xl p-8 text-center animate-fade-in">
        <h2 className="font-oswald text-3xl font-bold text-white mb-3">Не нашёл нужный шаблон?</h2>
        <p className="text-white/40 mb-6">Создай уникальное видео с нуля в редакторе</p>
        <button
          onClick={() => setPage("editor")}
          className="btn-gradient text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 glow-purple"
        >
          <Icon name="Sparkles" size={20} />
          Открыть редактор
        </button>
      </div>
    </div>
  );
}
