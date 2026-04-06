import Icon from "@/components/ui/icon";
import { STATS, type Page } from "@/types";

interface HomePageProps {
  setPage: (p: Page) => void;
}

export default function HomePage({ setPage }: HomePageProps) {
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
