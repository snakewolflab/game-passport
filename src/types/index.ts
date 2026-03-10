// ユーザーの基本情報（パスポート上部）
export interface UserProfile {
  id: string;               // @UserID
  name: string;             // 氏名
  registrationDate: string; // 登録日
  imageUrl?: string | null; // プロフィール画像
}

// 予約・進行中の試験（英検マイページ風）
export interface Reservation {
  id: string;               // 受験番号（Serial）
  examName: string;         // 検定名（G検）
  category: string;         // 部門
  grade: number;            // 級
  status: 'pending' | 'confirmed' | 'scoring' | 'result_released'; 
  examDate: string;         // 試験日
  venue: string;            // 会場
}

// 取得済みの実績（Visa/合格証）
export interface Certification {
  id: string;               // 合格証番号
  year: number;             // 年度
  term: number;             // 実施回（第n回）
  category: string;         // 部門
  grade: number;            // 級
  certifiedDate: string;    // 合格日
}