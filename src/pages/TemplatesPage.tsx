import Icon from "@/components/ui/icon";
import { TEMPLATES, type Page } from "@/types";

interface TemplatesPageProps {
  setPage: (p: Page) => void;
}

export default function TemplatesPage({ setPage }: TemplatesPageProps) {
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
        {TEMPLATES.map((t, i) => (
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
