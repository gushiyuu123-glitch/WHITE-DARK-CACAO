// src/sections/Hero.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

import milk from "/bg/milk.png";
import cacao from "/bg/cacao.png";

export default function Hero() {
  const whiteRef = useRef(null);
  const darkRef = useRef(null);

  /* -----------------------------
     PC 用 GSAP（SP に干渉させない）
  ----------------------------- */
  useEffect(() => {
    const whiteCtx = gsap.context(() => {
      gsap.fromTo(
        ".white-milk",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: -12,
          duration: 1.1,
          ease: "power1.out",
          stagger: 0.14,
          delay: 0.1,
        }
      );
    }, whiteRef);

    const darkCtx = gsap.context(() => {
      gsap.fromTo(
        ".dark-choco",
        { opacity: 0, y: -25, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 12,
          filter: "blur(0px)",
          duration: 1.6,
          ease: "power3.out",
          stagger: 0.18,
          delay: 0.55,
        }
      );
    }, darkRef);

    return () => {
      whiteCtx.revert();
      darkCtx.revert();
    };
  }, []);

  return (
    <section id="top" className="relative isolate h-screen overflow-hidden bg-[#f4efe6]">

      {/* ======================================
          PC VERSION（左右レイアウト）
          md 以上だけ表示：ここは一切いじらない
      ====================================== */}
      <div className="hidden md:block h-full">
        {/* ================= WHITE ================= */}
        <div
          ref={whiteRef}
          className="absolute inset-y-0 left-0 w-1/2 z-[3] flex items-center pl-[max(7%,64px)]"
        >
          <div
            className="
              absolute inset-0 bg-cover bg-center opacity-[0.28]
              pointer-events-none
              [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]
            "
            style={{
              backgroundImage: `url(${milk})`,
              backgroundPosition: "43% center",
            }}
          />

          <div className="relative z-[2] max-w-[360px]">
            <h1 className="white-milk text-[3.4rem] leading-[1.15] tracking-[0.14em] text-[#1a1a1a]/90">
              WHITE<br />CHOCOLATE
            </h1>

            <p className="white-milk mt-6 text-[0.95rem] leading-[1.8] text-[#1a1a1a]/70 font-sans">
              国産ミルクとマダガスカルバニラが生む、<br />
              すっきりとした甘さと静かな余韻。
            </p>
          </div>
        </div>

        {/* ================= DARK ================= */}
        <div
          ref={darkRef}
          className="absolute inset-y-0 right-0 w-1/2 z-[2] flex items-center justify-end pr-[max(7%,64px)]"
        >
          <div
            className="
              absolute inset-0 bg-cover bg-center pointer-events-none
              [clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]
            "
            style={{
              backgroundImage: `url(${cacao})`,
              backgroundPosition: "55% center",
            }}
          />

          <div className="relative z-[2] max-w-[360px] text-right">
            <h1 className="dark-choco text-[3.4rem] leading-[1.15] tracking-[0.14em] text-[#e6e2dc]/90">
              DARK<br />CHOCOLATE
            </h1>

            <p className="dark-choco mt-6 text-[0.95rem] leading-[1.8] text-[#e6e2dc]/70 font-sans">
              72%カカオの深いコク。<br />
              ほろ苦さの奥に、ゆっくりと香りが立つ。
            </p>
          </div>
        </div>
      </div>

      {/* ======================================
          SP VERSION（完全分離）
          上半分 WHITE / 下半分 DARK
          画像にテキストを「載せる」
      ====================================== */}
      <div className="md:hidden relative h-[100svh] overflow-hidden">

        {/* ---- TOP: WHITE ---- */}
        <div className="relative h-1/2 overflow-hidden">
          {/* bg image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${milk})`,
              backgroundPosition: "50% 45%",
            }}
          />
          {/* veil（読みやすさ：白は薄く） */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/35 to-white/10" />

          {/* text */}
          <div className="relative z-[2] h-full px-6 flex items-center ">
            <div className="w-full">
  {/* ★ 境界テキスト（white と dark の境界に固定） */}
  <p
    className="
      absolute
      left-1/2 -translate-x-1/2
      bottom-[42vh]        /* ← white画像の高さ = 境界線 */
      translate-y-[3px]
   /* ← ちょい下へ 1〜2px も可 */
      text-[0.62rem]
      tracking-[0.34em]
     text-[#1a1a1a]/35
      z-[20]
    "
  >
    WHITE × DARK CACAO
  </p>


              <h1 className="mt-3 text-[2.25rem] leading-[1.12] tracking-[0.14em] text-[#1a1a1a]/90">
                WHITE<br />
                <span className="text-[1.65rem] tracking-[0.16em]">CHOCOLATE</span>
              </h1>

              <p className="mt-3 text-[0.82rem] leading-[1.75] text-[#1a1a1a]/70">
                国産ミルクとマダガスカルバニラが生む、<br />
                すっきりとした甘さと静かな余韻。
              </p>
            </div>
          </div>
        </div>

        {/* ---- BOTTOM: DARK ---- */}
        <div className="relative h-1/2 overflow-hidden">
          {/* bg image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${cacao})`,
              backgroundPosition: "50% 55%",
            }}
          />
          {/* veil（黒はしっかり） */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/55" />

          {/* text */}
          <div className="relative z-[2] h-full px-6 flex items-center justify-end">
            <div className="w-full text-right">
          <h2
  className="
    text-[2.15rem] leading-[1.12] tracking-[0.14em]
    text-[#f0ece7]/95 font-medium
    drop-shadow-[0_1.5px_6px_rgba(60,50,40,0.45)]
  "
>
  DARK<br />
  <span
    className="
      block
      text-[1.45rem] tracking-[0.16em]
      text-[#e9e5df]/88 font-light
      drop-shadow-[0_1px_4px_rgba(40,32,26,0.35)]
    "
  >
    CHOCOLATE
  </span>
</h2>


              <p className="mt-3 text-[0.82rem] leading-[1.75] text-[#e6e2dc]/70">
                72%カカオの深いコク。<br />
                ほろ苦さの奥に、ゆっくりと香りが立つ。
              </p>
            </div>
          </div>
        </div>

        {/* 真ん中の“溝の光”だけ残す（SP版） */}
        <div
          className="
            pointer-events-none absolute left-1/2 top-0 -translate-x-1/2
            h-full w-[2px] opacity-[0.22] blur-[4px]
          "
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      </div>

    </section>
  );
}
