import { useState } from "react";
import { type Page } from "@/types";
import Navigation from "@/components/Navigation";
import HomePage from "@/pages/HomePage";
import GalleryPage from "@/pages/GalleryPage";
import EditorPage from "@/pages/EditorPage";
import TemplatesPage from "@/pages/TemplatesPage";

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

      <Navigation page={page} setPage={setPage} />

      <main className="relative z-10 pt-20 pb-24 md:pb-8">
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "gallery" && <GalleryPage />}
        {page === "editor" && (
          <EditorPage
            prompt={prompt} setPrompt={setPrompt}
            style={style} setStyle={setStyle}
            duration={duration} setDuration={setDuration}
            generating={generating} generated={generated}
            onGenerate={handleGenerate}
          />
        )}
        {page === "templates" && <TemplatesPage setPage={setPage} />}
      </main>
    </div>
  );
}
