import { useEffect, useRef, useState } from "react";

export default function SectionDivider() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      {
        threshold: 0,
        // 上下両方向の読み込みバランス最適化
        rootMargin: "-25% 0px -25% 0px",
      }
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      aria-hidden="true"
      className="
        relative
        bg-[#f7f5f1]
        py-[10vh]
        -mb-[14vh]
        flex justify-center
      "
    >
      {/* ===== マスクラッパー（上品に開く） ===== */}
      <div
        ref={ref}
        className="
          overflow-hidden
          w-[82%] md:w-[68%]
          max-w-[860px]
        "
        style={{
          clipPath: visible
            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          transition:
            "clip-path 1.8s cubic-bezier(.18,1,.3,1)",
          willChange: "clip-path",
        }}
      >
        <img
          src="/ui/divider-soft.png"
          alt=""
          className="
            w-full
            opacity-[0.48]      /* ← クリーム背景と相性◎ */
            brightness-[1.06]
            contrast-[1.03]
            select-none
            pointer-events-none
          "
          draggable={false}
        />
      </div>
    </section>
  );
}
