// src/sections/Craft.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Craft() {
  const refs = useRef([]);

  /* ======================
     STEP 画像のフェード
  ====================== */
  useEffect(() => {
    refs.current = refs.current.slice(0, 3);

    refs.current.forEach((el, i) => {
      gsap.set(el, { y: 34, opacity: 0, filter: "blur(6px)" });

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 1.3,
              delay: i * 0.22,
              filter: "blur(0px)",
              ease: "power3.out",
            });
            io.disconnect();
          }
        },
        { threshold: 0.25 }
      );

      io.observe(el);
    });
  }, []);

  /* ======================
     黄金ラインのゆらぎ
  ====================== */
  useEffect(() => {
    gsap.to(".gold-flow-anim", {
      x: 4,
      rotation: 0.35,
      duration: 7.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  /* ======================
     中央粒子レイヤー
  ====================== */
  useEffect(() => {
    gsap.to(".gold-particles-layer", {
      "--y": "200%",
      duration: 15,
      ease: "none",
      repeat: -1,
    });

    gsap.to(".gold-particles-layer", {
      opacity: 0.18,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative bg-[#faf8f4] pt-[22vh] pb-[20vh]">

      {/* 黄金ライン（弱め） */}
      <img
        src="/bg/gold-flow.png"
        alt=""
        className="
          pointer-events-none select-none
          absolute left-1/2 -translate-x-1/2
          top-6
          h-full w-auto
          opacity-[0.14]
          object-contain
          gold-flow-anim gold-mask
        "
        style={{ zIndex: 0 }}
      />

      {/* 中央粒子（狭め・控えめ） */}
      <div
        className="
          gold-particles-layer
          pointer-events-none select-none
          absolute left-1/2 -translate-x-1/2
          top-0
          h-full w-[220px]
          opacity-[0.28]
          gold-mask
        "
        style={{ zIndex: 1 }}
      ></div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-[92%] max-w-[1100px]">

        <p
          className="
            mb-[12vh]
            text-center
            text-[0.72rem]
            tracking-[0.40em]
            text-[#1a1a1a]/70
            uppercase
          "
          style={{
            fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
          }}
        >
          Essence of Craft
        </p>

        {/* Steps */}
        <div className="space-y-[16vh]">

          {/* STEP 01 */}
          <div className="grid grid-cols-12 items-end gap-x-[4vw]">
            <div
              className="col-span-12 md:col-span-6"
              ref={(el) => (refs.current[0] = el)}
            >
              <p className="mb-4 text-[0.66rem] tracking-[0.28em] text-[#1a1a1a]/55 uppercase">
                Step 01
              </p>
              <img
                src="/bg/craft-step1.png"
                className="rounded-[18px] w-full aspect-[4/3] object-cover"
                alt=""
              />
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-8 self-center md:mt-[-4vh]">
              <p className="craft-text">
                繊細な温度で、  
                甘さと艶の輪郭を整える。  
                すべてはここから始まります。
              </p>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="grid grid-cols-12 items-start gap-x-[4vw]">
            <div className="col-span-12 md:col-span-4 md:col-start-3 self-end mb-[18vh]">
              <p className="craft-text">
                流れ、溜まり、  
                形が生まれる瞬間。  
                味の厚みは、ここで決まります。
              </p>
            </div>

            <div
              className="col-span-12 md:col-span-5 md:col-start-8"
              ref={(el) => (refs.current[1] = el)}
            >
              <p className="mb-4 text-[0.66rem] tracking-[0.28em] text-[#1a1a1a]/55 uppercase">
                Step 02
              </p>
              <img
                src="/bg/craft-step2.png"
                className="rounded-[18px] w-full aspect-[4/3] object-cover"
                alt=""
              />
            </div>
          </div>

          {/* STEP 03 */}
          <div className="grid grid-cols-12 items-start gap-x-[4vw]">
            <div
              className="col-span-12 md:col-span-6"
              ref={(el) => (refs.current[2] = el)}
            >
              <p className="mb-4 text-[0.66rem] tracking-[0.28em] text-[#1a1a1a]/55 uppercase">
                Step 03
              </p>
              <img
                src="/bg/craft-step3.png"
                className="rounded-[18px] w-full aspect-[4/3] object-cover"
                alt=""
              />
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-8 self-start mt-[24vh]">
              <p className="craft-text">
                一粒ずつ、型から外す。  
                余韻まで美しい形に  
                仕上げています。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
