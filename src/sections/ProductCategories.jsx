// src/sections/ProductCategories.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const categories = [
  { key: "white",   label: "WHITE シリーズ", img: "/bg/cat-white.png" },
  { key: "dark",    label: "DARK シリーズ",  img: "/bg/cat-dark.png" },
  { key: "limited", label: "Limited",         img: "/bg/cat-limited.png" },
  { key: "gift",    label: "Gift Box",        img: "/bg/cat-gift.png" },
  { key: "pair",    label: "Pair Set",        img: "/bg/cat-pair.png" },
];

export default function ProductCategories() {
  const sectionRef = useRef(null);
  const toastTimer = useRef(null);
  const [toast, setToast] = useState("");

  /* ======== 出現演出 ======== */
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".cat-item");
    if (!cards?.length) return;

    gsap.set(cards, { opacity: 0, y: 18, filter: "blur(6px)" });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.25,
            ease: "power3.out",
            stagger: 0.06,
          });
          io.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  /* ======== トースト ======== */
  const showToast = (msg) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 1400);
  };

  const handleDummyClick = (label) => showToast(`${label} は準備中です`);
  const onKeyDownAsButton = (e, label) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDummyClick(label);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative bg-[#f7f5f1]
        pt-[-20vh] pb-[28vh]
      "
    >
      <div className="mx-auto w-[90%] max-w-[1280px]">

        {/* ====== タイトル ====== */}
        <div className="text-center mb-[12vh]">
          <p className="text-[0.58rem] tracking-[0.40em] text-[#1a1a1a]/45 uppercase">
            Categories
          </p>

          <p
            className="mt-4 text-[0.84rem] text-[#1a1a1a]/55"
            style={{
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
              letterSpacing: "0.10em",
            }}
          >
            ここにない商品も、まだたくさんあります。
          </p>
        </div>

        {/* ====== グリッド（SPは1カラム） ====== */}
        <div
          className="
            grid
            grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            max-md:grid-cols-1
            gap-x-[6vw] gap-y-[7vh]
            md:gap-x-[3.5vw] md:gap-y-[8vh]
            justify-items-center        /* ← SP中央揃え */
          "
        >
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => handleDummyClick(c.label)}
              onKeyDown={(e) => onKeyDownAsButton(e, c.label)}
              className="
                cat-item group block text-left
                rounded-[18px]
                cursor-pointer
                transition-transform duration-[650ms] ease-out
                hover:-translate-y-[2px]

                /* SP専用 */
                max-md:w-[88%]
                max-md:mx-auto
                max-md:hover:-translate-y-[1px]   /* 優しめに */
              "
              aria-label={`${c.label}（準備中）`}
            >
              {/* ======= 画像カード ======= */}
              <div
                className="
                  relative overflow-hidden rounded-[18px]
                  border border-[#1a1a1a]/10
                  bg-white/40
                  shadow-[0_18px_55px_rgba(0,0,0,0.05)]

                  /* SPは柔らかい影に調整 */
                  max-md:shadow-[0_10px_35px_rgba(0,0,0,0.04)]
                "
              >
                <img
                  src={c.img}
                  alt={c.label}
                  className="
                    w-full h-auto
                    aspect-[5/4]
                    object-cover
                    opacity-[0.96]
                    transition-all duration-[900ms] ease-out
                    group-hover:opacity-100
                    group-hover:scale-[1.025]
                  "
                  draggable={false}
                />

                {/* グラデ膜 */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.02) 58%, rgba(0,0,0,0.10) 100%)",
                  }}
                />

                {/* ラベル */}
                <div
                  className="
                    pointer-events-none absolute left-0 right-0 bottom-0
                    px-4 py-3
                  "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(247,245,241,0.00) 0%, rgba(247,245,241,0.85) 40%, rgba(247,245,241,0.94) 100%)",
                  }}
                >
                  <p
                    className="
                      text-center
                      text-[0.82rem] md:text-[0.86rem]
                      text-[#1a1a1a]/78
                    "
                    style={{
                      fontFamily:
                        '"Cormorant Garamond","Shippori Mincho B1",serif',
                      letterSpacing: "0.08em",
                    }}
                  >
                    {c.label}
                  </p>
                </div>

                {/* SOON バッジ */}
                <div
                  className="
                    pointer-events-none absolute top-3 right-3
                    rounded-full px-3 py-[6px]
                    text-[0.58rem] tracking-[0.22em] uppercase
                    text-[#1a1a1a]/45
                    bg-[#f7f5f1]/70
                    border border-[#1a1a1a]/10
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                >
                  Soon
                </div>
              </div>

              {/* ====== 呼吸ライン ====== */}
              <div className="mt-4 flex justify-center">
                <span
                  className="
                    h-px w-[42%]
                    bg-[#1a1a1a]/16
                    transition-all duration-700
                    group-hover:w-[58%]
                    group-hover:bg-[#1a1a1a]/26

                    /* SPは短めに */
                    max-md:w-[35%]
                    max-md:group-hover:w-[50%]
                  "
                />
              </div>
            </button>
          ))}
        </div>

        {/* ====== View All ====== */}
        <div className="mt-[14vh] flex justify-center">
          <button
            type="button"
            onClick={() => showToast("全商品ページは準備中です")}
            className="
              text-[0.74rem]
              tracking-[0.26em]
              text-[#1a1a1a]/55
              uppercase
              pb-[2px]
              border-b border-[#1a1a1a]/20
              transition-colors duration-500

              hover:text-[#1a1a1a]/70
              hover:border-[#1a1a1a]/30
            "
            style={{
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
            }}
          >
            View All Products
          </button>
        </div>
      </div>

      {/* ===== トースト ===== */}
      <div
        className="
          pointer-events-none
          fixed bottom-6 right-6
          z-[9999]
        "
        aria-live="polite"
      >
        <div
          className={`
            rounded-[14px]
            px-5 py-3
            text-[0.75rem]
            tracking-[0.10em]
            text-[#1a1a1a]/70
            border border-[#1a1a1a]/12
            bg-[#f7f5f1]/85
            backdrop-blur-[10px]
            shadow-[0_18px_60px_rgba(0,0,0,0.06)]
            transition-all duration-500
            ${toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
          style={{
            fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
          }}
        >
          {toast}
        </div>
      </div>
    </section>
  );
}
