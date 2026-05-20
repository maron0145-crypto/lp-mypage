type Skill = {
  name: string;
  level: number;
  description: string;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

const skillData: SkillCategory[] = [
  {
    category: "業務改善・自動化",
    skills: [
      {
        name: "VBA（Excel / Access）",
        level: 4,
        description: "業務フロー自動化、帳票作成、データ集計マクロ開発",
      },
      {
        name: "Python",
        level: 3,
        description: "スクレイピング、データ処理、業務スクリプト作成",
      },
    ],
  },
  {
    category: "フロントエンド",
    skills: [
      {
        name: "HTML / CSS",
        level: 4,
        description: "セマンティックな構造設計、レスポンシブ対応",
      },
      {
        name: "JavaScript",
        level: 3,
        description: "DOM操作、非同期処理、フォーム制御",
      },
    ],
  },
];

function SkillBar({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 w-6 rounded-full ${
            i < level ? "bg-[#2563eb]" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-[family-name:var(--font-dm-sans)] tracking-widest text-[#2563eb] uppercase mb-3">
          Skills
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 md:mb-12">
          スキル・技術スタック
        </h2>
        <div className="space-y-10 md:space-y-12">
          {skillData.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">
                {cat.category}
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl bg-gray-50 p-4 sm:bg-transparent sm:p-0 sm:flex sm:items-center sm:gap-6"
                  >
                    <div className="flex items-center justify-between sm:block sm:w-44 sm:shrink-0 mb-3 sm:mb-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base">
                        {skill.name}
                      </p>
                        {/* モバイルは名前行の右端に、sm+ では名前の下に表示するため同じバーを2箇所に置く */}
                      <div className="sm:hidden">
                        <SkillBar level={skill.level} />
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <SkillBar level={skill.level} />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 leading-5 sm:leading-6">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
