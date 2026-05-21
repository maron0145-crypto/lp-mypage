"use client";

import { useState } from "react";

// Hero.tsx の solutions から抽出したカテゴリ＋その他
const topics = [
  "業務自動化（VBA / Python）",
  "データ連携・一元管理",
  "現場目線の改善提案",
  "フロントエンド開発・Webサイト制作",
  "その他",
];

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-6 bg-gray-50">
      <div className="max-w-xl mx-auto">
        <p className="text-xs font-[family-name:var(--font-dm-sans)] tracking-widest text-[#2563eb] uppercase mb-3">
          Contact
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          お仕事のご相談
        </h2>
        <p className="text-sm text-gray-500 leading-6 mb-8 md:mb-12">
          業務改善・自動化・Web制作など、お気軽にご相談ください。
        </p>

        {submitted ? (
          // 送信完了メッセージ
          <div className="text-center py-16">
            <p className="text-lg font-semibold text-gray-900 mb-3">送信されました。</p>
            <p className="text-sm text-gray-500">
              お問い合わせありがとうございます。3営業日以内にご連絡いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お名前 <span className="text-[#2563eb]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="山田 太郎"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス <span className="text-[#2563eb]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="example@email.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                相談内容 <span className="text-[#2563eb]">*</span>
              </label>
              <select required className={`${inputClass} bg-white`}>
                <option value="">選択してください</option>
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                詳細・ご要望
              </label>
              <textarea
                rows={5}
                placeholder="具体的な内容をご記入ください"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#2563eb] text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              送信する
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
