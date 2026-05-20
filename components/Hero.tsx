"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  {
    icon: "⏱",
    title: "毎日の繰り返し作業に追われている",
    body: "同じフォーマットへの転記、定型レポートの手作成——その時間、本当に必要ですか？",
  },
  {
    icon: "⚠️",
    title: "Excelの転記・集計ミスが後を絶たない",
    body: "人が手を動かすかぎり必ずミスは起きます。仕組みで入力をゼロにしましょう。",
  },
  {
    icon: "📂",
    title: "データが各所にバラバラで一元管理できていない",
    body: "現場・設計・管理部門でデータがバラバラ。確認のたびに問い合わせが発生していませんか？",
  },
  {
    icon: "💡",
    title: "改善アイデアはあるが実装できるエンジニアがいない",
    body: "「こうなればいいのに」を形にできる人が身近にいない——そこに入ります。",
  },
];

const solutions = [
  {
    step: "01",
    title: "業務自動化（VBA / Python）",
    body: "繰り返し作業をスクリプトで自動化。数時間かかっていた処理を数分に短縮します。",
  },
  {
    step: "02",
    title: "データ連携・一元管理",
    body: "測定機・CAD・Excelをつなぎ、手入力をなくしてデータを一か所に集約します。",
  },
  {
    step: "03",
    title: "現場目線の改善提案と実装",
    body: "製造現場で7年間働いた経験から、机上論でなく使える仕組みを提案・実装します。",
  },
];

type Problem = (typeof problems)[number];

function ProblemCard({ p }: { p: Problem }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl h-full flex flex-col">
      <span className="text-3xl mb-5 sm:mb-6 block">{p.icon}</span>
      <p className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-snug">
        {p.title}
      </p>
      <p className="text-sm text-gray-500 leading-7 flex-1">{p.body}</p>
    </div>
  );
}

function circularOffset(i: number, current: number, n: number): number {
  const mod = ((i - current) % n + n) % n;
  return mod > n / 2 ? mod - n : mod;
}

function getCoverflowStyle(offset: number, cardWidth: number): React.CSSProperties {
  const base: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    top: 0,
    height: "100%",
    width: cardWidth,
    marginLeft: -cardWidth / 2,
    transition: "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 500ms ease",
    transformOrigin: "center center",
  };

  const abs = Math.abs(offset);
  const sign = offset === 0 ? 0 : offset > 0 ? 1 : -1;
  const near = Math.round(cardWidth * 0.75);
  const far = Math.round(cardWidth * 1.35);

  if (abs === 0) {
    return {
      ...base,
      transform: "translate3d(0, 0, 0) rotateY(0deg) scale(1)",
      opacity: 1,
      zIndex: 30,
    };
  }

  if (abs === 1) {
    return {
      ...base,
      transform: `translate3d(${sign * near}px, 0, 0) rotateY(${-sign * 40}deg) scale(0.78)`,
      opacity: 0.7,
      zIndex: 20,
      cursor: "pointer",
    };
  }

  return {
    ...base,
    transform: `translate3d(${sign * far}px, 0, 0) rotateY(${-sign * 65}deg) scale(0.4)`,
    opacity: 0,
    zIndex: 0,
    pointerEvents: "none",
  };
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const touchStartX = useRef(0);
  const n = problems.length;

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setCardWidth(w < 640 ? Math.min(300, w - 40) : 320);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const goTo = (index: number) => setCurrent(((index % n) + n) % n);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) goTo(current + 1);
    else if (diff < -50) goTo(current - 1);
  };

  const coverflowHeight = cardWidth < 300 ? 300 : 320;

  return (
    <>
      {/* ── キービジュアル ── */}
      <section
        id="top"
        className="flex flex-col justify-center bg-[#111827] text-white px-6 py-12 sm:py-16 md:py-24"
      >
        <div className="max-w-3xl mx-auto w-full">
          <p className="text-[10px] sm:text-xs font-[family-name:var(--font-dm-sans)] tracking-widest text-[#2563eb] uppercase mb-5 sm:mb-6">
            Business Improvement Engineer
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug md:leading-tight mb-6 sm:mb-8">
            現場を知るエンジニアが、
            <br className="sm:hidden" />
            仕組みで課題を解決する。
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-8 max-w-xl tracking-tighter text-pretty">
            製造現場での実務経験とエンジニアリングを掛け合わせ、「現場が本当に使える」自動化・改善ツールを届けます。
          </p>
          <a
            href="#problems"
            className="mt-10 sm:mt-12 inline-block text-sm text-gray-500 hover:text-white transition-colors"
          >
            ↓ こんなお悩みありませんか？
          </a>
        </div>
      </section>

      {/* ── Problems Coverflow ── */}
      <section id="problems" className="bg-[#111827] text-white py-12 sm:py-16">
        {/* ヘッダー */}
        <div className="max-w-3xl mx-auto px-6 w-full mb-8 md:mb-10 text-center">
          <p className="text-xs font-[family-name:var(--font-dm-sans)] tracking-widest text-[#2563eb] uppercase mb-3">
            Problems
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            こんなお悩みありませんか？
          </h2>
        </div>

        {/* Coverflow 本体 */}
        <div
          className="relative w-full isolate"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            height: coverflowHeight,
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {problems.map((p, i) => {
            const offset = circularOffset(i, current, n);
            return (
              <div
                key={p.title}
                style={getCoverflowStyle(offset, cardWidth)}
                onClick={() => offset !== 0 && goTo(i)}
              >
                <ProblemCard p={p} />
              </div>
            );
          })}
        </div>

        {/* 矢印 + ドット */}
        <div className="relative z-10 flex items-center justify-center gap-6 mt-8 sm:mt-10">
          <button
            onClick={() => goTo(current - 1)}
            aria-label="前へ"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white active:scale-90 transition-all duration-150"
          >
            ←
          </button>

          <div className="flex gap-2">
            {problems.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`${i + 1}枚目`}
                className={`h-2 rounded-full transition-all duration-300 ease-out ${
                  i === current
                    ? "w-5 bg-[#2563eb]"
                    : "w-2 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            aria-label="次へ"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white active:scale-90 transition-all duration-150"
          >
            →
          </button>
        </div>
      </section>

      {/* ── 解決策セクション ── */}
      <section className="py-12 sm:py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-[family-name:var(--font-dm-sans)] tracking-widest text-[#2563eb] uppercase mb-3">
            Solutions
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            仕組みで解決します
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {solutions.map((s) => (
              <div key={s.step} className="flex gap-4 sm:gap-6 items-start">
                <span className="font-[family-name:var(--font-dm-sans)] text-2xl sm:text-3xl font-bold text-gray-100 shrink-0 leading-none">
                  {s.step}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    {s.title}
                  </p>
                  <p className="text-sm text-gray-500 leading-6 sm:leading-7">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
