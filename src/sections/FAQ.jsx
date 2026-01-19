import { useEffect, useRef } from "react";

export default function FAQ() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("is-visible");
          io.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="
        relative
        bg-[#f7f5f1]
        pt-[22vh]
        pb-[24vh]
        overflow-hidden
        choco-reveal-bg
      "
    >
      <div className="mx-auto w-[88%] max-w-[900px]">

        {/* ===== タイトル ===== */}
        <div className="text-center mb-[16vh] mt-[18vh] max-md:mb-[12vh] max-md:mt-[14vh]">
          <p
            className="
              text-[0.78rem] max-md:text-[0.72rem]
              tracking-[0.30em]
              text-[#1a1a1a]/75
              uppercase
              pb-[1.6vh]
              border-b border-[#1a1a1a]/10
              inline-block
            "
            style={{
              fontFamily:
                '"Cormorant Garamond","Shippori Mincho B1",serif',
            }}
          >
            FAQ
          </p>
        </div>

        {/* =========================
            FAQ 本体
        ========================= */}
        <div className="space-y-[6.5vh] mt-[2vh] max-md:space-y-[5vh]">

          {[
            {
              q: "賞味期限はどれくらいですか？",
              a: "製造日より約30日です。詳細は商品ごとに記載しています。",
            },
            {
              q: "ギフト包装はできますか？",
              a: "すべての商品はギフトを想定した包装でお届けしています。",
            },
            {
              q: "配送日時の指定は可能ですか？",
              a: "ご注文時に日時指定が可能です。地域によっては対応できない場合があります。",
            },
            {
              q: "保存方法を教えてください。",
              a: "直射日光・高温多湿を避け、涼しい場所で保管してください。",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="
                group
                border-b border-[#1a1a1a]/15
                pb-[3vh]
                open:pb-[4vh]
              "
            >
              <summary
                className="
                  list-none cursor-pointer
                  flex items-center justify-between
                  text-[0.9rem] max-md:text-[0.86rem]
                  text-[#1a1a1a]/70
                  tracking-[0.05em]
                  pr-1
                  transition-all duration-300
                  group-open:text-[#1a1a1a]/85
                  touch-manipulation
                "
                style={{
                  fontFamily:
                    '"Cormorant Garamond","Shippori Mincho B1",serif',
                }}
              >
                {item.q}

                <span
                  className="
                    ml-4 block h-px w-[22px]
                    bg-[#1a1a1a]/25
                    transition-all duration-500
                    group-open:w-[40px]
                    group-open:bg-[#1a1a1a]/40
                  "
                />
              </summary>

              <div
                className="
                  mt-[2.5vh] max-md:mt-[2vh]
                  text-[0.82rem] max-md:text-[0.78rem]
                  text-[#1a1a1a]/65
                  leading-[1.9] max-md:leading-[1.85]
                  tracking-[0.04em]
                  pr-[1px]
                "
                style={{
                  fontFamily:
                    '"Cormorant Garamond","Shippori Mincho B1",serif',
                }}
              >
                {item.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
