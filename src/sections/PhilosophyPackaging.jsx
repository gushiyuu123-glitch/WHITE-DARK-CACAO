// src/sections/PhilosophyPackaging.jsx
export default function PhilosophyPackaging() {
  return (
    <section className="relative bg-[#f7f5f1] pt-[22vh] pb-[32vh] overflow-hidden">

      {/* ベール */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#f7f5f1]/60 backdrop-blur-[1px]"
      />

      {/* 黄金ライン */}
      <img
        src="/bg/gold-flow.png"
        alt=""
        draggable={false}
        className="
          pointer-events-none select-none
          absolute left-1/2 -translate-x-1/2
          top-0
          h-[130%] w-auto
          opacity-[0.18]
          object-contain gold-mask
          max-md:opacity-[0.10] max-md:h-[110%]
        "
      />

      {/* コンテンツ */}
      <div className="relative z-10 mx-auto w-[88%] max-w-[900px] text-center">

        <p className="text-[0.6rem] tracking-[0.42em] text-[#1a1a1a]/45 uppercase mb-[12vh] max-md:mb-[8vh]">
          Philosophy & Packaging
        </p>

        {/* ===========================
            PC版（改行そのまま）
        =========================== */}
        <p
          className="
            hidden md:block
            text-[1.04rem]
            text-[#1a1a1a]/80
            leading-[2.9]
            tracking-[0.05em]
          "
          style={{
            fontFamily:
              '"Cormorant Garamond","Shippori Mincho B1",serif',
          }}
        >
          私たちは、形よりも“伝わる理由”を大切にしています。<br />
          どんな人が手に取り、どんな時間に食べるのか。<br />
          その瞬間まで想像しながら、一つの味を決めています。
        </p>

        {/* ===========================
            SP版（改行を最適化）
        =========================== */}
        <p
          className="
            md:hidden
            text-[0.94rem]
            text-[#1a1a1a]/80
            leading-[2.35]
            tracking-[0.03em]
          "
          style={{
            fontFamily:
              '"Cormorant Garamond","Shippori Mincho B1",serif',
          }}
        >
          私たちは、形よりも<br />
          “伝わる理由”を大切にしています。<br /><br />

          どんな人が手に取り、<br />
          どんな時間に食べるのか。<br /><br />

          その瞬間まで想像しながら、<br />
          一つの味を決めています。
        </p>

        <div className="h-[12vh] max-md:h-[8vh]" />

        {/* ===========================
            PC版（そのまま）
        =========================== */}
        <p
          className="
            hidden md:block
            text-[1.02rem]
            text-[#1a1a1a]/82
            leading-[2.92]
            tracking-[0.05em]
          "
          style={{
            fontFamily:
              '"Cormorant Garamond","Shippori Mincho B1",serif',
          }}
        >
          包装は“見せるため”ではなく、気持ちを届けるためのもの。<br />
          贈られた人がふと笑顔になる、その小さな瞬間をつくるために、<br />
          紙の質感や色まで細かく選んでいます。
        </p>

        {/* ===========================
            SP版（読みやすい改行）
        =========================== */}
        <p
          className="
            md:hidden
            text-[0.93rem]
            text-[#1a1a1a]/82
            leading-[2.4]
            tracking-[0.03em]
          "
          style={{
            fontFamily:
              '"Cormorant Garamond","Shippori Mincho B1",serif',
          }}
        >
          包装は“見せるため”ではなく、<br />
          気持ちを届けるためのもの。<br /><br />

          贈られた人がふと笑顔になる、<br />
          その小さな瞬間をつくるために、<br /><br />

          紙の質感や色まで<br />
          丁寧に選んでいます。
        </p>

      </div>
    </section>
  );
}
