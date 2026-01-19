/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"], // 高級系タイポ
        sans: ["'Inter'", "sans-serif"],          // シャープで現代的
      },

      letterSpacing: {
        wide2: "0.18em",   // CTA / サブタイトル
        wide3: "0.25em",   // 見出し
        wide4: "0.32em",   // ブランド名など
      },

      colors: {
        // --- ブランド基準カラー ---
        noir: "#0b0b0b",   // 深い黒（Dark側のテーマ）
        dark: "#131313",   // 少し柔らかい黒
        cacao: "#2a1f1a",  // カカオの深い茶（アクセント）

        milk: "#f7f4ef",   // White側の基調
        cream: "#f3ede6",  // 柔らかく温かいニュアンス

        ash: "#d9d5cf",    // 暗側の薄明かり
        smoke: "#bcb8b2",  // 白側の影
        goldsoft: "#d6c7a7", // 高級感の“金すぎない金”

        // UI用
        ink: "#222",
        mute: "#666",
      },

      spacing: {
        hero: "100vh",
      },

      opacity: {
        15: "0.15",
        20: "0.20",
        85: "0.85",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },

      boxShadow: {
        subtle: "0 6px 14px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
