import { useState } from "react";
import Icon from "@/components/ui/icon";
import { GALLERY_ITEMS } from "@/types";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const categories = ["Все", "Футуризм", "Природа", "Абстракция", "Sci-Fi", "Стихия"];
  const filtered = activeCategory === "Все" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === activeCategory);

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
