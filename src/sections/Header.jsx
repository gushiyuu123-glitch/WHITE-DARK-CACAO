// src/sections/Header.jsx
import { useEffect, useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 140);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // メニュー開いてる時はスクロール停止
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header className={`main-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-split-bg" aria-hidden="true" />

        <div className="header-inner">
          {/* ロゴ */}
          <a href="#top" className="header-logo">
            <span className="logo-top">WHITE</span>
            <span className="logo-mark">×</span>
            <span className="logo-bottom">DARK CACAO</span>
          </a>

          {/* PC NAV */}
          <nav className="header-nav">
            <a href="#concept">ABOUT</a>
            <a href="#products">FLAVORS</a>
            <a href="#gift">GIFT</a>
            <a href="#contact">CONTACT</a>
          </nav>

          {/* SP Chocolate Button */}
          <button
            className="choco-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <img
              src={open ? "/ui/choco-dark.png" : "/ui/choco-white.png"}
              alt=""
              draggable={false}
            />
          </button>
        </div>
      </header>

   {/* ===== SP MENU ===== */}
<div className={`sp-menu ${open ? "is-open" : ""}`}>

  {/* CLOSE BUTTON（同じ位置） */}
  <button
    className="choco-toggle choco-toggle--sp"
    onClick={() => setOpen(false)}
    aria-label="Close menu"
  >
    <img
      src="/ui/choco-dark.png"
      alt=""
      draggable={false}
    />
  </button>

  <nav className="sp-nav">
    <a onClick={() => setOpen(false)} href="#concept">ABOUT</a>
    <a onClick={() => setOpen(false)} href="#products">FLAVORS</a>
    <a onClick={() => setOpen(false)} href="#gift">GIFT</a>
    <a onClick={() => setOpen(false)} href="#contact">CONTACT</a>
  </nav>
</div>

    </>
  );
}
