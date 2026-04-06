import Icon from "@/components/ui/icon";

interface EditorPageProps {
  prompt: string;
  setPrompt: (v: string) => void;
  style: string;
  setStyle: (v: string) => void;
  duration: string;
  setDuration: (v: string) => void;
  generating: boolean;
  generated: boolean;
  onGenerate: () => void;
}

const STYLES = [
  { id: "cinematic", label: "Кино", emoji: "🎬" },
  { id: "anime", label: "Аниме", emoji: "✨" },
  { id: "realistic", label: "Реализм", emoji: "📷" },
  { id: "abstract", label: "Абстракция", emoji: "🌀" },
  { id: "pixar", label: "3D Pixar", emoji: "🎭" },
  { id: "vintage", label: "Ретро", emoji: "📽️" },
];

export default function EditorPage({
  prompt, setPrompt, style, setStyle, duration, setDuration,
  generating, generated, onGenerate,
}: EditorPageProps) {
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
              {STYLES.map(s => (
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
