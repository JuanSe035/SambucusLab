import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const currentProgress = (scrollTop / documentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      className="
        fixed
        top-0
        left-0
        w-full
        h-[3px]
        z-[9999]
        pointer-events-none
        bg-transparent
      "
    >
      <div
        className="
          relative
          h-full
          rounded-r-full
          bg-gradient-to-r
          from-purple-500
          via-violet-500
          to-fuchsia-400
          shadow-[0_0_12px_rgba(168,85,247,0.8)]
          transition-[width]
          duration-100
          ease-out
        "
        style={{
          width: `${progress}%`,
        }}
      >
        <div
          className="
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            w-2
            h-2
            rounded-full
            bg-white
            shadow-[0_0_10px_rgba(255,255,255,0.95)]
          "
        />
      </div>
    </div>
  );
}