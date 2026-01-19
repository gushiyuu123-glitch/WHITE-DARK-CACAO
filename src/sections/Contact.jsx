// src/sections/Contact.jsx
import { useEffect, useRef } from "react";
import "../styles/contact.css";

export default function Contact() {
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
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="contact-inner">

        {/* =====================
            HEAD
        ===================== */}
        <div className="contact-head">
          <p className="contact-eyebrow">CONTACT</p>

          <h2 className="contact-title">
            ご相談・ご依頼
          </h2>

          <p className="contact-lead">
            商品導入・ギフト利用・法人注文など、<br />
            内容が固まっていなくても問題ありません。<br />
            まずはお気軽にご相談ください。
          </p>
        </div>

        {/* =====================
            CTA
        ===================== */}
        <div className="contact-cta">
          <a href="#contact-form" className="contact-btn">
            お問い合わせフォームへ
          </a>
        </div>

      </div>
    </section>
  );
}
