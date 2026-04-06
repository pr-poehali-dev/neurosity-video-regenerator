export type Page = "home" | "gallery" | "editor" | "templates";

export const NAV_ITEMS: { id: Page; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "Sparkles" },
  { id: "gallery", label: "Галерея", icon: "Images" },
  { id: "editor", label: "Редактор", icon: "Wand2" },
  { id: "templates", label: "Шаблоны", icon: "LayoutGrid" },
];

export const GALLERY_ITEMS = [
  { id: 1, title: "Кибергород", category: "Футуризм", duration: "0:15", views: "128K", color: "from-violet-600 to-pink-600", emoji: "🌆" },
  { id: 2, title: "Морской рассвет", category: "Природа", duration: "0:30", views: "89K", color: "from-cyan-600 to-blue-600", emoji: "🌊" },
  { id: 3, title: "Неоновый танец", category: "Абстракция", duration: "0:20", views: "256K", color: "from-pink-600 to-orange-500", emoji: "💃" },
  { id: 4, title: "Космос", category: "Sci-Fi", duration: "0:45", views: "512K", color: "from-indigo-600 to-violet-600", emoji: "🚀" },
  { id: 5, title: "Лесная магия", category: "Природа", duration: "0:25", views: "67K", color: "from-emerald-600 to-teal-600", emoji: "🌿" },
  { id: 6, title: "Огненный вихрь", category: "Стихия", duration: "0:18", views: "341K", color: "from-orange-500 to-red-600", emoji: "🔥" },
];

export const TEMPLATES = [
  { id: 1, title: "Продуктовый промо", desc: "Реклама товаров с динамичным монтажом", icon: "ShoppingBag", color: "from-violet-500 to-purple-700", tags: ["Реклама", "E-com"] },
  { id: 2, title: "Музыкальный клип", desc: "Синхронизация видео с ритмом музыки", icon: "Music2", color: "from-pink-500 to-rose-700", tags: ["Музыка", "Арт"] },
  { id: 3, title: "Кино-трейлер", desc: "Эпичный трейлер с титрами и эффектами", icon: "Film", color: "from-cyan-500 to-blue-700", tags: ["Кино"] },
  { id: 4, title: "Социальные сети", desc: "Короткое видео для Instagram и TikTok", icon: "Smartphone", color: "from-orange-500 to-amber-600", tags: ["Reels"] },
  { id: 5, title: "Корпоративный", desc: "Презентация бренда и достижений", icon: "Briefcase", color: "from-emerald-500 to-teal-700", tags: ["Бренд"] },
  { id: 6, title: "Обучающий", desc: "Наглядный обучающий ролик с анимацией", icon: "GraduationCap", color: "from-indigo-500 to-violet-700", tags: ["Edu"] },
];

export const STATS = [
  { value: "2М+", label: "Видео создано", icon: "Video" },
  { value: "150K+", label: "Пользователей", icon: "Users" },
  { value: "98%", label: "Довольных клиентов", icon: "Star" },
  { value: "4 сек", label: "Время генерации", icon: "Zap" },
];
