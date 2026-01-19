// src/sections/GiftSet.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function GiftSet() {
  const setRef = useRef(null);
  const giftRef = useRef(null);

  useEffect(() => {
    // PC専用アニメーション（SPは無効化）
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#giftset-title",
          start: "top 75%",
          once: true,
        },
      });

      gsap.set(setRef.current, { x: -180, opacity: 0 });
      gsap.set(giftRef.current, { x: 180, opacity: 0 });

      tl.to(setRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
      }).to(
        giftRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=1.0"
      );
    });
  }, []);

  return (
    <section
      id="gift"
      className="relative bg-[#f7f5f1] pt-[20vh] pb-[20vh]"
    >
      <div className="mx-auto w-[88%] max-w-[1200px]">

        {/* ======================
            TITLE（PC/SP完全分離）
        ====================== */}
        {/* PC */}
        <div
          id="giftset-title"
          className="hidden md:flex relative mb-[16vh] items-center justify-between"
        >
          <h2
            ref={setRef}
            className="
              text-[4.6rem]
              tracking-[0.14em]
              text-[#1a1a1a]/32
            "
            style={{
              fontFamily:
                '"Cormorant Garamond","Shippori Mincho B1",serif',
            }}
          >
            Set
          </h2>

          <h2
            ref={giftRef}
            className="
              text-[4.6rem]
              tracking-[0.14em]
              text-[#1a1a1a]/32
            "
            style={{
              fontFamily:
                '"Cormorant Garamond","Shippori Mincho B1",serif',
            }}
          >
            Gift
          </h2>
        </div>

        {/* SP */}
        <div className="md:hidden text-center mb-[12vh]">
          <h2
            className="
              text-[2.6rem]
              tracking-[0.16em]
              text-[#1a1a1a]/35
            "
            style={{
              fontFamily:
                '"Cormorant Garamond","Shippori Mincho B1",serif',
            }}
          >
            Set & Gift
          </h2>
        </div>

        {/* ======================
             ITEMS（2カラム→1カラム）
        ====================== */}
        <div className="grid gap-y-[14vh] gap-x-[6vw] md:grid-cols-2">

          {/* Gift */}
          <article className="group">
            <div
              className="
                overflow-hidden rounded-[18px]
                shadow-[0_10px_26px_rgba(0,0,0,0.08)]
                transition-transform duration-[900ms] ease-out
                group-hover:scale-[1.03]
              "
            >
              <img
                src="/bg/gift-01.png"
                className="aspect-[4/3] object-cover w-full"
                alt=""
              />
            </div>

            <div className="mt-6 px-[0.3rem] text-center md:text-left">
              <h3
                className="text-[1.12rem] tracking-[0.05em] text-[#1a1a1a]"
                style={{
                  fontFamily:
                    '"Cormorant Garamond","Shippori Mincho B1",serif',
                }}
              >
                Gift Box – Classic
              </h3>
              <p className="mt-2 text-[0.82rem] tracking-[0.1em] text-[#1a1a1a]/60">
                特別な日のための、静かな贈り物。
              </p>
              <p className="mt-4 text-[0.92rem] text-[#1a1a1a]/75">¥4,480</p>
            </div>
          </article>

          {/* Set */}
          <article className="group">
            <div
              className="
                overflow-hidden rounded-[18px]
                shadow-[0_10px_26px_rgba(0,0,0,0.08)]
                transition-transform duration-[900ms] ease-out
                group-hover:scale-[1.03]
              "
            >
              <img
                src="/bg/set-01.png"
                className="aspect-[4/3] object-cover w-full"
                alt=""
              />
            </div>

            <div className="mt-6 px-[0.3rem] text-center md:text-left">
              <h3
                className="text-[1.12rem] tracking-[0.05em] text-[#1a1a1a]"
                style={{
                  fontFamily:
                    '"Cormorant Garamond","Shippori Mincho B1",serif',
                }}
              >
                Pair Set – White & Dark
              </h3>
              <p className="mt-2 text-[0.82rem] tracking-[0.1em] text-[#1a1a1a]/60">
                白と黒が並ぶ、美しい組み合わせ。
              </p>
              <p className="mt-4 text-[0.92rem] text-[#1a1a1a]/75">¥5,280</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
