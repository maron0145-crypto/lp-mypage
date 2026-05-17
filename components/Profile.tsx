const achievements = [
  "CAMデータを自動処理し、工程表を自動生成するシステムを構築",
  "単独動作の測定機を改造・連携させ、CADへの一括データ取得を自動化",
  "現場課題に応じた各種業務自動化ツールを自作・導入",
];

const tags = ["業務改善エンジニア", "フロントエンドエンジニア", "元・技能五輪選手"];

// 写真を用意したら、この PlaceholderPhoto コンポーネントを
// <Image src="/photo.jpg" alt="外山 綾一" fill className="object-cover rounded-2xl" />
// に置き換えてください（親 div の className はそのまま使えます）。
function PhotoPlaceholder() {
  return (
    <div className="aspect-[3/4] w-full max-w-xs rounded-2xl bg-gray-100 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4Z" />
      </svg>
      <span className="text-xs text-gray-400 font-[family-name:var(--font-dm-sans)]">
        Photo
      </span>
    </div>
  );
}

export default function Profile() {
  return (
    <section id="profile" className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        {/* ── 名刺ブロック: 写真 + 情報の2カラム ── */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start mb-16 md:mb-20">

          {/* 写真: mobile は中央寄せ、md+ は左固定 */}
          <div className="w-48 sm:w-56 md:w-56 mx-auto md:mx-0 shrink-0">
            <PhotoPlaceholder />
          </div>

          {/* 名刺情報 */}
          <div className="flex flex-col justify-center w-full">
            <p className="text-xs font-[family-name:var(--font-dm-sans)] tracking-widest text-[#2563eb] uppercase mb-4">
              Profile
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
              外山 綾一
            </h2>
            <p className="text-sm text-gray-400 font-[family-name:var(--font-dm-sans)] mb-6">
              Toyama Ryoichi
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((label) => (
                <span
                  key={label}
                  className="border border-[#2563eb] text-[#2563eb] text-xs px-3 py-1 rounded-full"
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="text-base text-gray-600 leading-7">
              現場を知るエンジニアが、仕組みで課題を解決する。
            </p>
          </div>
        </div>

        {/* ── 自己紹介ブロック ── */}
        <div className="border-t border-gray-200 pt-10 md:pt-14">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8">自己紹介</h3>
          <div className="space-y-5 text-gray-700 leading-8">
            <p>
              自動車系製造業の開発部門で7年間、CAD・CAM・工作機械・測定技能を活かし、
              製造準備から試加工・連続加工まで一貫して担当してきました。
            </p>
            <p>
              現場での経験の中で「繰り返し作業は仕組みで解決できる」と気づき、
              VBA・Pythonを使った業務自動化に取り組んできました。
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold text-gray-900 mb-4">主な取り組み</p>
            <ul className="space-y-3">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-gray-700 leading-8">
            現在はフロントエンド技術（HTML / CSS / JavaScript）も習得し、
            現場目線を持つエンジニアとして業務改善・Web開発の両面で活動しています。
          </p>
        </div>

      </div>
    </section>
  );
}
