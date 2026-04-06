import Icon from "@/components/ui/icon";
import { NAV_ITEMS, type Page } from "@/types";

interface NavigationProps {
  page: Page;
  setPage: (p: Page) => void;
}

export default function Navigation({ page, setPage }: NavigationProps) {
  return (
    <>
      {/* Desktop nav */}
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
    </>
  );
}
