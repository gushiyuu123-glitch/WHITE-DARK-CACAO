// ================================
// src/sections/ProductList.jsx
// PC/SP 完全分離・最高純度版
// ================================
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ======================================
   DATA
====================================== */
const products = [
  { id: "w1", image: "/bg/white-01.png", title: "WHITE MILK 42", desc: "やさしい甘さ", price: "¥2,480", units: "8個入り" },
  { id: "w2", image: "/bg/white-02.png", title: "WHITE VANILLA", desc: "香りひろがる", price: "¥2,680", units: "8個入り" },
  { id: "w3", image: "/bg/white-03.png", title: "WHITE BISCUIT", desc: "軽やかな食感", price: "¥2,580", units: "8個入り" },

  { id: "d1", image: "/bg/dark-01.png", title: "DARK CACAO 78", desc: "深い余韻", price: "¥2,680", units: "8個入り" },
  { id: "d2", image: "/bg/dark-06.png", title: "DARK ROAST", desc: "ほろ苦い香り", price: "¥2,580", units: "8個入り" },
  { id: "d3", image: "/bg/dark-04.png", title: "DARK ORANGE", desc: "果皮の香り", price: "¥2,780", units: "8個入り" },
];

const WHITE = products.filter(p => p.id.startsWith("w"));
const DARK  = products.filter(p => p.id.startsWith("d"));

export default function ProductList() {
  const cardsRef = useRef([]);
  const whiteTextRef = useRef(null);
  const darkTextRef  = useRef(null);
  const sectionRef  = useRef(null);

  /* ======================================
     PC カードフェード
  ====================================== */
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 26, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.25,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        }
      );
    });
  }, []);

  /* ======================================
     PC 背景テキストの滲み動き
  ====================================== */
  useEffect(() => {
    // WHITE
    if (whiteTextRef.current) {
      gsap.to(whiteTextRef.current, {
        y: -45,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center top",
          scrub: 1.2,
        },
      });
    }

    // DARK
    if (darkTextRef.current) {
      gsap.fromTo(
        darkTextRef.current,
        { y: 46 },
        {
          y: -32,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }
  }, []);

  /* ======================================
     PC カード生成
  ====================================== */
  const renderCards = (list, offset = 0) =>
    list.map((p, i) => {
      const index = i + offset;
      const mod = i % 3;

      // ゆらぎ（PCのみ）
      const wave =
        mod === 1 ? "15vh" :
        mod === 2 ? "32vh" :
        "0";

      return (
        <article
          key={p.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="group"
          style={{ marginTop: wave }}
        >
          {/* IMAGE */}
          <div
            className="
              overflow-hidden rounded-[22px]
              transition-transform duration-[1200ms] ease-out
              group-hover:scale-[1.04]
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            "
          >
            <img
              src={p.image}
              alt={p.title}
              draggable={false}
              className={`
                w-full object-cover opacity-[0.98]
                ${mod === 1 ? "aspect-[4/5]" : "aspect-[7/6]"}
              `}
            />
          </div>

          {/* TEXT */}
          <div className="mt-6 px-[0.2rem]">
            <h3
              className="text-[1.04rem] tracking-[0.06em]"
              style={{
                color: "#2e2a27",
                fontFamily:
                  '"Cormorant Garamond","Shippori Mincho B1",serif',
              }}
            >
              {p.title}
            </h3>

            <p className="mt-2 text-[0.78rem] tracking-[0.14em]" style={{ color: "#2e2a27b0" }}>
              {p.desc}
            </p>

            <p className="mt-2 text-[0.76rem] tracking-[0.1em]" style={{ color: "#2e2a2788" }}>
              {p.units}
            </p>

            <p className="mt-3 text-[0.9rem]" style={{ color: "#2e2a27d2" }}>
              {p.price}
            </p>
          </div>
        </article>
      );
    });

  /* ======================================
     JSX
  ====================================== */
  return (
    <section
      id="products"
      ref={sectionRef}
      className="product-list bg-[#f7f5f1] pt-[22vh] pb-[20vh] overflow-hidden"
    >
      {/* ================= PC 版 ================= */}
      <div className="hidden md:block">
        {/* TITLE */}
        <div className="text-center mb-[22vh] px-[6vw] pt-[4vh] pb-[15vh]">
          <p className="text-[0.72rem] tracking-[0.28em] mb-5" style={{ color: "#b7a999" }}>
            PRODUCT LINEUP
          </p>

          <h2
            className="text-[1.94rem] leading-[1.55]"
            style={{
              color: "#2e2a27",
              letterSpacing: "0.06em",
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
            }}
          >
            白とダーク  
            <br />
            ふたつの味わいを揃えました。
          </h2>
        </div>

        {/* WHITE */}
        <div className="relative mb-[38vh]">
          <p
            ref={whiteTextRef}
            className="
              absolute z-0
              top-[-24vh]
              left-[-5vw]
              text-[19vw]
              font-light leading-none
              tracking-[0.04em]
              select-none pointer-events-none
            "
            style={{
              color: "#e9e3d8",
              opacity: 0.50,
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
            }}
          >
            WHITE
          </p>

          <div className="relative z-10 mx-auto w-[88%] max-w-[1300px] grid grid-cols-3 gap-x-[4vw] gap-y-[18vh]">
            {renderCards(WHITE, 0)}
          </div>
        </div>

        {/* DARK */}
        <div className="relative">
          <p
            ref={darkTextRef}
            className="
              absolute z-0
              top-[-22%]
              left-[35%]
              text-[22vw]
              font-light leading-none
              tracking-[0.07em]
              whitespace-nowrap
              select-none pointer-events-none
            "
            style={{
              color: "#3b2a1f",
              opacity: 0.22,
              fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
            }}
          >
            DARK
          </p>

          <div className="relative z-10 mx-auto w-[88%] max-w-[1300px] grid grid-cols-3 gap-x-[4vw] gap-y-[18vh]">
            {renderCards(DARK, WHITE.length)}
          </div>
        </div>
      </div>

      {/* ================= SP 版（完全分離） ================= */}
      <div className="md:hidden w-[90%] mx-auto relative pb-[12vh]">

  {/* ---- 背景 WHITE ---- */}
<p
  className="
    absolute
    top-[4.3%]                 /* ★ ここ重要：vhは一桁まで */
    left-1/2 -translate-x-1/2
    text-[20vw]
    leading-none font-light
    opacity-[0.95]
    select-none pointer-events-none
    tracking-[0.08em]
    z-[1]
  "
  style={{
    color: "#e9e3d8",
    fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
  }}
>
  WHITE
</p>

        {/* ---- TITLE ---- */}
        <div className="text-center mb-[14vh] pt-[10vh] relative z-[5]">
          <p className="text-[0.65rem] tracking-[0.32em] text-[#b7a999] mb-4">
            PRODUCT LINEUP
          </p>
          <h2
            className="text-[1.55rem] leading-[1.55]"
            style={{
              color: "#2e2a27",
              letterSpacing: "0.06em",
              fontFamily:
                '"Cormorant Garamond","Shippori Mincho B1",serif',
            }}
          >
            白とダーク、  
            <br />
            静かに並べました。
          </h2>
        </div>

        {/* ---- WHITE CARDS ---- */}
        <div className="space-y-[14vh] relative z-[5]">
          {WHITE.map((p) => (
            <article key={p.id} className="group">
              <div
                className="
                  overflow-hidden rounded-[18px]
                  shadow-[0_8px_22px_rgba(0,0,0,0.08)]
                "
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="
                    w-full aspect-[4/5]
                    object-cover opacity-[0.98]
                    transition-transform duration-[900ms] ease-out
                    group-hover:scale-[1.03]
                  "
                  draggable={false}
                />
              </div>

              <div className="mt-5 px-[0.1rem] text-center">
                <h3
                  className="text-[1.15rem] tracking-[0.05em]"
                  style={{
                    color: "#2e2a27",
                    fontFamily:
                      '"Cormorant Garamond","Shippori Mincho B1",serif',
                  }}
                >
                  {p.title}
                </h3>

                <p className="mt-2 text-[0.82rem] tracking-[0.11em] text-[#2e2a27b0]">
                  {p.desc}
                </p>

                <p className="mt-1 text-[0.72rem] tracking-[0.08em] text-[#2e2a2788]">
                  {p.units}
                </p>

                <p className="mt-3 text-[0.96rem] text-[#2e2a27d2]">
                  {p.price}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ---- 背景 DARK ---- */}
        <p
          className="
            absolute left-1/2 -translate-x-1/2
            top-[319vh]
            text-[20vw] leading-none font-light
            opacity-[0.10]
            select-none pointer-events-none
            tracking-[0.10em]
          "
          style={{
            color: "#3b2a1f",
            fontFamily: '"Cormorant Garamond","Shippori Mincho B1",serif',
          }}
        >
          DARK
        </p>

        {/* ---- DARK CARDS ---- */}
        <div className="relative z-[5] pt-[16vh] space-y-[14vh]">
          {DARK.map((p) => (
            <article key={p.id} className="group">
              <div
                className="
                  overflow-hidden rounded-[18px]
                  shadow-[0_8px_22px_rgba(0,0,0,0.08)]
                "
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="
                    w-full aspect-[4/5]
                    object-cover opacity-[0.98]
                    transition-transform duration-[900ms] ease-out
                    group-hover:scale-[1.03]
                  "
                  draggable={false}
                />
              </div>

              <div className="mt-5 px-[0.1rem] text-center">
                <h3
                  className="text-[1.15rem] tracking-[0.05em]"
                  style={{
                    color: "#2e2a27",
                    fontFamily:
                      '"Cormorant Garamond","Shippori Mincho B1",serif',
                  }}
                >
                  {p.title}
                </h3>

                <p className="mt-2 text-[0.82rem] tracking-[0.11em] text-[#2e2a27b0]">
                  {p.desc}
                </p>

                <p className="mt-1 text-[0.72rem] tracking-[0.08em] text-[#2e2a2788]">
                  {p.units}
                </p>

                <p className="mt-3 text-[0.96rem] text-[#2e2a27d2]">
                  {p.price}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
