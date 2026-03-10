// types/exam.ts (例)
interface Exam {
  id: string;
  name: string;        // 例: 「RPG攻略検定」「FPSエイム検定」
  category: string;    // ジャンル
  description: string;
}

// 各検定の中には 10段階の Grade が自動的に紐付く設計
const grades = Array.from({ length: 10 }, (_, i) => ({
  level: i + 1,
  title: `${i + 1}級`,
  status: '受付中'
}));