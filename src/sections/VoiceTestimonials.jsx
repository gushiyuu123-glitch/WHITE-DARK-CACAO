// src/sections/VoiceTestimonials.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VoiceTestimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".voice-item");
    if (!items?.length) return;

    gsap.set(items, {
      opacity: 0,
      y: -12,
      filter: "blur(6px)",
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.35,
            ease: "power3.out",
            stagger: 0.15,
          });
          io.disconnect();
        }
      },
      {
        threshold: 0.15, // ← SPで発火しやすく最適化
        rootMargin: "0px 0px -8% 0px",
      }
    );

    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative bg-[#f7f5f1] pt-[20vh] pb-[24vh] overflow-hidden">

      {/* ===== ベール ===== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#f7f5f1]/60 backdrop-blur-[1px]"
      />

      {/* ===== 黄金縦ライン（SP弱め） ===== */}
      <img
        src="/bg/gold-flow.png"
        alt=""
        draggable={false}
        className="
          pointer-events-none select-none
          absolute left-1/2 -translate-x-1/2
          top-[8vh]
          h-[110%] w-auto
          opacity-[0.12]
          object-contain
          z-[1]

          /* SPはもっと弱く、安心させる */
          max-md:opacity-[0.08]
          max-md:h-[100%]
        "
      />

{/* ===== CONTENT ===== */}
<div
  ref={sectionRef}
  className="
    relative z-10 mx-auto
    w-[88%] max-w-[800px]

    /* ★ SP時は幅を広げて窮屈さを解消 */
    max-md:w-[92%]
    max-md:max-w-[480px]
  "
>

        {/* 見出し */}
        <div className="text-center mb-[14vh] max-md:mb-[10vh]">
          <p className="text-[0.6rem] tracking-[0.42em] text-[#1a1a1a]/45 uppercase">
            Voice
          </p>
        </div>

        {/* 声リスト */}
        <div className="space-y-[12vh] max-md:space-y-[9vh]">
          {[
            {
              text: "甘さが控えめで、最後まで心地よく食べられました。",
              meta: "30代 / 自宅用",
            },
            {
              text: "説明が多くないのが、逆に信頼できると感じました。",
              meta: "40代 / ギフト利用",
            },
            {
              text: "贈るまでの時間も、落ち着いて選べたのが印象的です。",
              meta: "50代 / 記念日",
            },
          ].map((v, i) => (
            <div key={i} className="voice-item text-center">

              {/* 金の埃ライン */}
              <div className="flex justify-center mb-6 max-md:mb-5">
                <span
                  className="
                    block h-[26px] w-px opacity-80
                    bg-[linear-gradient(
                      to_bottom,
                      transparent_0%,
                      rgba(188,154,89,0.5)_50%,
                      transparent_100%
                    )]

                    /* SPは高さ少し縮める */
                    max-md:h-[20px]
                  "
                />
              </div>

              {/* 本文 */}
<p
  className="
    text-[0.9rem]
    text-[#1a1a1a]/70

    leading-[2]
    tracking-[0.05em]

    /* ===== SP 最適化 ===== */
    max-md:w-[92%]
    max-md:mx-auto
    max-md:text-[0.92rem]
    max-md:leading-[1.9]
    max-md:tracking-[0.01em]
  "
  style={{
    fontFamily:
      '"Cormorant Garamond","Shippori Mincho B1",serif',
  }}
>
  {v.text}
</p>

              {/* メタ */}
              <p
                className="
                  mt-3 text-[0.7rem] max-md:text-[0.66rem]
                  text-[#1a1a1a]/40 tracking-[0.1em]
                "
              >
                {v.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
