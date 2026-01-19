// src/sections/ThanksFooter.jsx
import { useEffect, useRef } from "react";
import "../styles/thanks-footer.css";

export default function ThanksFooter() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
<footer ref={ref} className="thanks-footer">
  <div className="thanks-layout">
    
    {/* 左：ECの稼働情報 */}
    <div className="thanks-runtime">
      <p>現在ご注文を受け付けています。</p>
      <p>通常2〜3営業日以内に発送しております。</p>
      <p>配送：ヤマト運輸 ／<br></br> 決済：クレジットカード・Apple Pay</p>
    </div>

    {/* 中央：締め＋あなたのリンク */}
    <div className="thanks-inner">
      <p className="thanks-eyebrow">THANK YOU</p>
      <p className="thanks-text">最後までご覧いただき、ありがとうございます。</p>

      <a 
        href="https://gushikendesign.com"
        className="thanks-author"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed by GUSHIKEN DESIGN
      </a>
    </div>

  </div>
</footer>

  );
}
