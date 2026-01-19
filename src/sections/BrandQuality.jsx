// src/sections/BrandQuality.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BrandQuality() {
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    gsap.fromTo(
      bg,
      {
        scale: 1.12,
        opacity: 0.22,
        filter: "blur(30px)",
      },
      {
        scale: 1.08,
        opacity: 0.30,
        filter: "blur(24px)",
        duration: 2.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="relative bg-[#f7f5f1] pt-[22vh] pb-[24vh] overflow-hidden">

      {/* ===== 背景（呼吸 × 滲み） ===== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <img
          ref={bgRef}
          src="/bg/quality-swirl1.png"
          alt=""
          draggable={false}
          className="
            w-full h-full object-cover
            opacity-[0.24]
            blur-[34px]
            scale-[1.2]
            translate-y-[4vh]
            mix-blend-multiply

            /* SPは軽量化 */
            max-md:blur-[22px]
            max-md:opacity-[0.18]
            max-md:scale-[1.1]

            [mask-image:linear-gradient(
              to_bottom,
              transparent 0%,
              black 18%,
              black 68%,
              rgba(0,0,0,0.35) 85%,
              transparent 100%
            )]
            [mask-size:100%_100%]
            [mask-repeat:no-repeat]
          "
        />
      </div>

      {/* ベール */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#f7f5f1]/45 backdrop-blur-[1px]"
      />

      {/* ===== コンテンツ ===== */}
      <div
        className="
          relative z-10 mx-auto
          w-[88%] max-w-[1000px]
          mb-[-10vh]

          /* SPでは危険なので解除 */
          max-md:mb-0
        "
      >
        {/* 見出し */}
        <div className="text-center mb-[14vh] max-md:mb-[10vh]">
          <p className="text-[0.6rem] tracking-[0.42em] text-[#1a1a1a]/45 uppercase">
            Quality & Care
          </p>

          <p
            className="mt-4 text-[0.88rem] max-md:text-[0.82rem] text-[#1a1a1a]/60"
            style={{
              fontFamily:
                '"Cormorant Garamond","Shippori Mincho B1",serif',
              letterSpacing: "0.08em",
            }}
          >
            素材・製法・仕上げ。すべてに理由があります。
          </p>
        </div>

        {/* ===== 6項目 ===== */}
        <div
          className="
            grid gap-y-[9vh]
            md:grid-cols-2 md:gap-x-[7vw]

            /* SPは呼吸を広げる */
            max-md:gap-y-[7vh]
          "
        >
          {[
            {
              title: "Ingredients Selection",
              desc: "産地・風味・相性を基準に原材料を選定。不要なものは加えず、味の輪郭を明確に保ちます。",
            },
            {
              title: "Cacao & Milk Balance",
              desc: "カカオと乳成分の比率を細かく調整。香り・甘さ・余韻のバランスを最優先に設計しています。",
            },
            {
              title: "Small Batch Production",
              desc: "品質を安定させるため、少量生産を基本に。状態を見ながら一つずつ仕上げます。",
            },
            {
              title: "Texture & Mouthfeel",
              desc: "口溶け・舌触りまで含めて完成と考えています。視覚と味覚の差を生まない設計です。",
            },
            {
              title: "Finish & Appearance",
              desc: "表面の艶やエッジの出方まで管理。味と同じく、仕上がりにも一貫性を持たせています。",
            },
            {
              title: "Designed for Gifting",
              desc: "味だけでなく、開封から余韻までを体験として設計。贈る側・受け取る側の両方に配慮しています。",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3
                className="
                  text-[0.95rem]
                  max-md:text-[0.9rem]
                  text-[#1a1a1a]
                "
                style={{
                  fontFamily:
                    '"Cormorant Garamond","Shippori Mincho B1",serif',
                  letterSpacing: "0.06em",
                }}
              >
                {item.title}
              </h3>

              <p className="mt-3 text-[0.82rem] max-md:text-[0.78rem] text-[#1a1a1a]/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 締め */}
        <div className="mt-[16vh] max-md:mt-[12vh] text-center">
          <p
            className="text-[0.8rem] max-md:text-[0.74rem] text-[#1a1a1a]/55"
            style={{
              fontFamily:
                '"Cormorant Garamond","Shippori Mincho B1",serif',
              letterSpacing: "0.10em",
            }}
          >
            目立たせるためではなく、信頼されるために。
          </p>
        </div>
      </div>
    </section>
  );
}
