// src/sections/SignatureSelection.jsx
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const items = [
  {
    key: "milk",
    image: "/bg/milk-thumb0.png",
    title: "WHITE MILK 42",
    copy: "静けさがほどける甘さ",
    price: "¥2,480",
    units: "8個入り",
    href: "/bg/white-milk-42",
  },
  {
    key: "cacao",
    image: "/bg/cacao-thumb0.png",
    title: "DARK CACAO 78",
    copy: "余韻だけが残る苦味",
    price: "¥2,680",
    units: "8個入り",
    href: "/bg/dark-cacao-78",
  },
];

export default function SignatureSelection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".sig-item");

    gsap.set(cards, {
      opacity: 0,
      y: 20,
      filter: "blur(6px)",
    });

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.08,
        });
        io.disconnect();
      }
    }, { threshold: 0.25 });

    io.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative bg-[#f7f5f1]
        pt-[24vh]
        pb-[26vh]
      "
    >
      <div className="mx-auto w-[92%] max-w-[1350px]">

        {/* ---- セクションタイトル ---- */}
        <p
          className="
            mb-[5vh]
            text-[0.58rem]
            tracking-[0.32em]
            text-[#1a1a1a]/50
            uppercase
            text-center
          "
        >
          Signature Selection
        </p>

        {/* ---- 1 → 2 カラム ---- */}
        <div className="grid gap-[5vw] md:grid-cols-2">
          {items.map((p) => (
            <article key={p.key} className="sig-item">

              {/* ---- 画像 --- */}
              <Link
                to={p.href}
                className="
                  block w-full
                  h-[43vh] md:h-[52vh]
                  overflow-hidden
                  rounded-[18px]
                  group
                "
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-[1200ms] ease-out
                    group-hover:scale-[1.03]
                  "
                  draggable={false}
                />
              </Link>

              {/* ---- テキスト ---- */}
              <div className="mt-6 px-[0.1rem]">
                <h3
                  className="text-[1.08rem] md:text-[1.18rem] text-[#1a1a1a]"
                  style={{
                    fontFamily:
                      '"Cormorant Garamond","Shippori Mincho B1",serif',
                    letterSpacing: "0.04em",
                  }}
                >
                  {p.title}
                </h3>

                <p
                  className="mt-2 text-[0.82rem] text-[#1a1a1a]/68"
                  style={{ letterSpacing: "0.11em" }}
                >
                  {p.copy}
                </p>

                <p className="mt-1 text-[0.72rem] text-[#1a1a1a]/45 tracking-[0.06em]">
                  {p.units}
                </p>

                {/* ---- プライス & CTA ---- */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[0.88rem] text-[#1a1a1a]/82">
                    {p.price}
                  </span>

                  <Link
                    to={p.href}
                    className="
                      relative text-[0.68rem]
                      tracking-[0.20em]
                      text-[#1a1a1a]/70 uppercase pb-[2px]
                      transition-all duration-500
                      after:absolute after:left-0 after:-bottom-[1px]
                      after:h-px after:w-full after:bg-[#1a1a1a]/18
                      hover:after:bg-[#1a1a1a]/45
                    "
                    style={{
                      fontFamily:
                        '"Cormorant Garamond","Shippori Mincho B1",serif',
                    }}
                  >
                    VIEW
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
