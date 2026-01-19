// src/sections/GiftSet.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function GiftSet() {
  const setRef = useRef(null);
  const giftRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#giftset-title",
        start: "top 75%",
        once: true,
      },
    });

// 初期位置（左右にオフセット）
gsap.set(setRef.current,  { x: -80, opacity: 0 });  // ← SPでもPCでも横だけ
gsap.set(giftRef.current, { x:  80, opacity: 0 });

tl.to(setRef.current, {
  x: 0,          // ← 中央へ寄せる
  opacity: 1,
  duration: 1.4,
  ease: "power3.out",
}).to(
  giftRef.current,
  {
    x: 0,        // ← 中央へ寄せる
    opacity: 1,
    duration: 1.4,
    ease: "power3.out",
  },
  "-=1.0"
);

  }, []);

  return (
    <section id="gift" className="gift-sectionbg-[#f7f5f1] pt-[18vh] pb-[18vh]">
      <div className="mx-auto w-[88%] max-w-[1200px]">

        {/* =====================
            TITLE：SET ← → GIFT
        ===================== */}
        <div
          id="giftset-title"
          className="relative mb-[14vh] flex items-center justify-between"
        >
<h2
  ref={setRef}
  className="
    text-[3.8rem] md:text-[4.8rem]
    tracking-[0.12em]
    text-[#1a1a1a]/35
    relative
    translate-y-[-1vh]          /* ★ SP用 */
    md:translate-y-[unset]      /* ★ PCでは style を優先させる */
  "
  style={{
    fontFamily:
      '"Cormorant Garamond","Shippori Mincho B1",serif',
    transform: "translateY(-2vh)", // ← PC用
  }}
>
  Set
</h2>

<h2
  ref={giftRef}
  className="
    text-[3.8rem] md:text-[4.8rem]
    tracking-[0.12em]
    text-[#1a1a1a]/35
    relative
    translate-y-[1vh]           /* ★ SP用 */
    md:translate-y-[unset]      /* ★ PCでは style を優先させる */
  "
  style={{
    fontFamily:
      '"Cormorant Garamond","Shippori Mincho B1",serif',
    transform: "translateY(2vh)", // ← PC用
  }}
>
  Gift
</h2>


        </div>

        {/* =====================
             ITEMS：ギフト＆セット
        ===================== */}
        <div className="grid gap-y-[14vh] gap-x-[6vw] md:grid-cols-2">

          {/* ギフトBOX */}
          <article className="group">
            <div
              className="
                overflow-hidden rounded-[18px]
                transition-transform duration-[900ms] ease-out
                group-hover:scale-[1.03]
              "
            >
              <img
                src="/bg/gift-01.png"
                className="aspect-[4/3] w-full object-cover rounded-[18px]"
                alt=""
              />
            </div>

            <div className="mt-6 px-[0.3rem]">
              <h3
                className="text-[1.1rem] tracking-[0.06em] text-[#1a1a1a]"
                style={{
                  fontFamily:
                    '"Cormorant Garamond","Shippori Mincho B1",serif',
                }}
              >
                Gift Box – Classic
              </h3>
              <p className="mt-2 text-[0.8rem] text-[#1a1a1a]/65 tracking-[0.12em]">
                特別な日のための、静かな贈り物。
              </p>
              <p className="mt-4 text-[0.9rem] text-[#1a1a1a]/80">¥4,480</p>
            </div>
          </article>

          {/* ペアセット */}
          <article className="group">
            <div
              className="
                overflow-hidden rounded-[18px]
                transition-transform duration-[900ms] ease-out
                group-hover:scale-[1.03]
              "
            >
              <img
                src="/bg/set-01.png"
                className="aspect-[4/3] w-full object-cover rounded-[18px]"
                alt=""
              />
            </div>

            <div className="mt-6 px-[0.3rem]">
              <h3
                className="text-[1.1rem] tracking-[0.06em] text-[#1a1a1a]"
                style={{
                  fontFamily:
                    '"Cormorant Garamond","Shippori Mincho B1",serif',
                }}
              >
                Pair Set – White & Dark
              </h3>
              <p className="mt-2 text-[0.8rem] text-[#1a1a1a]/65 tracking-[0.12em]">
                白と黒が並ぶ、美しい組み合わせ。
              </p>
              <p className="mt-4 text-[0.9rem] text-[#1a1a1a]/80">¥5,280</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
