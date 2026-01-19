// src/sections/StoryConcept.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StoryConcept() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    gsap.set(el, {
      opacity: 0,
      y: 18,
      filter: "blur(8px)",
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.9,
            delay: 0.15,
            ease: "power3.out",
          });
          io.disconnect();
        }
      },
      { threshold: 0.32 }
    );

    io.observe(el);
  }, []);

  return (
    <section
      id="concept"
      className="
        relative w-full
        py-[18vh]
        pb-[30vh]
        overflow-hidden
        bg-[#f7f5f1]
      "
    >
{/* 背景：チョコの気配 */}
<div className="absolute inset-0 pointer-events-none select-none opacity-[0.21]">
  {/* 画像レイヤー */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/bg/concept-choco.png')",
      backgroundSize: "100% 94%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
     filter: "blur(2.4px) brightness(0.97) saturate(1.06) sepia(0.08)",

    }}
  />

  {/* 上グラデーション（白 → 透明） */}
  <div
    className="absolute top-0 inset-x-0 h-[22%]"
    style={{
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0))",
    }}
  />

  {/* 下グラデーション（透明 → 白） */}
  <div
    className="absolute bottom-0 inset-x-0 h-[23%]"
    style={{
      background:
        "linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0))",
    }}
  />
</div>

{/* テキスト */}
<div
  className="
    relative mx-auto w-[88%] max-w-[820px] text-center
    md:pt-[8vh]    /* ★ PC版だけ位置を下げる */
  "
>
  <p
    ref={textRef}
    className="
      text-[1.0rem] md:text-[1.18rem]
      leading-[2.05]
      tracking-[0.10em]
      text-[#1a1a1a]/68
    "
    style={{
      fontFamily:
        '"Cormorant Garamond","Shippori Mincho B1",serif',
    }}
  >
    素材の素直なおいしさを、静かに仕立てたチョコレート。<br />
    甘さと苦味が溶けあい、輪郭だけがそっと残る。<br />
    一粒ごとに、香りと余韻の深さを大切にしています。
  </p>
</div>

    </section>
  );
}
