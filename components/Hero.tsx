"use client";

import { useRef, useState } from "react";

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
    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm h-full">
      <span className="text-3xl mb-6 block">{p.icon}</span>
      <p className="text-lg font-semibold text-gray-900 mb-4 leading-snug">{p.title}</p>
      <p className="text-sm text-gray-500 leading-7">{p.body}</p>
    </div>
  );
}

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const isByButton = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    if (!card) return;

    isByButton.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);

    el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setCurrent(index);

    timerRef.current = setTimeout(() => {
      isByButton.current = false;
    }, 500);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isByButton.current) return;
    const el = e.currentTarget;
    const cards = Array.from(el.children).slice(0, problems.length) as HTMLElement[];
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - el.scrollLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setCurrent(closest);
  };

  return (
    <>
      {/* ── キービジュアル ── */}
      <section
        id="top"
        className="min-h-screen flex flex-col justify-center bg-[#111827] text-white px-6 py-16 md:py-24"
      >
        <div className="max-w-3xl mx-auto w-full">
          <p className="text-[10px] sm:text-xs font-[family-name:var(--font-dm-sans)] tracking-widest text-[#2563eb] uppercase mb-6">
            Business Improvement Engineer
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug md:leading-tight mb-8">
            現場を知るエンジニアが、
            <br />
            仕組みで課題を解決する。
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-8 max-w-xl">
            製造現場での実務経験とエンジニアリングを掛け合わせ、
            「現場が本当に使える」自動化・改善ツールを届けます。
          </p>
          <a
            href="#problems"
            className="mt-12 inline-block text-sm text-gray-500 hover:text-white transition-colors"
          >
            ↓ こんなお悩みありませんか？
          </a>
        </div>
      </section>

      {/* ── お悩みセクション ── */}
      <section id="problems" className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">

          {/* ヘッダー */}
          <div className="mb-8 md:mb-10">
            <p className="text-xs font-[family-name:var(--font-dm-sans)] tracking-widest text-[#2563eb] uppercase mb-3">
              Problems
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              こんなお悩みありませんか？
            </h2>
          </div>

          {/* モバイル: カルーセル */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="md:hidden relative flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {problems.map((p) => (
              <div
                key={p.title}
                className="w-[calc(100%-3rem)] shrink-0 snap-start mr-3"
              >
                <ProblemCard p={p} />
              </div>
            ))}
            {/* 最終カードを flush-left にするためのスクロール領域延長 */}
            <div className="w-9 shrink-0" aria-hidden="true" />
          </div>

          {/* ドット（モバイルのみ） */}
          <div className="md:hidden flex justify-center gap-2 mt-6">
            {problems.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`${i + 1}枚目`}
                className={`h-2 rounded-full transition-all duration-300 ease-out ${
                  i === current
                    ? "w-5 bg-[#2563eb]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* デスクトップ: 2列グリッド */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-5">
            {problems.map((p) => (
              <ProblemCard key={p.title} p={p} />
            ))}
          </div>

        </div>
      </section>

      {/* ── 解決策セクション ── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-[family-name:var(--font-dm-sans)] tracking-widest text-[#2563eb] uppercase mb-3">
            Solutions
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 md:mb-12">
            仕組みで解決します
          </h2>
          <div className="space-y-8">
            {solutions.map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <span className="font-[family-name:var(--font-dm-sans)] text-3xl font-bold text-gray-100 shrink-0 leading-none">
                  {s.step}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{s.title}</p>
                  <p className="text-sm text-gray-500 leading-6">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
