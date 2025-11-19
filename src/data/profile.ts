export type NewsItem = {
  date: string;
  detail: string;
};

export type EducationEntry = {
  degree: string;
  school: string;
  period: string;
  advisor?: string;
  note?: string;
};

export type ExperienceEntry = {
  title: string;
  organization: string;
  period: string;
  bullets: string[];
};

export type PublicationEntry = {
  title: string;
  venue: string;
  summary: string;
  tags: string[];
};

export type AwardEntry = {
  title: string;
  organization: string;
  year: string;
  note?: string;
};

export const profile = {
  name: "Legacy Tachyon",
  pronouns: "그 / 그",
  headline: "Action Unit 기반 3D 얼굴 복원과 힙합을 잇는 연구자",
  summary:
    "광운대학교 컴퓨터정보공학부에서 3D 얼굴 복원, Unity 게임 실험, 오디오 툴링을 파고듭니다. 실험적인 힙합 공연과 연구실 작업을 오가며 인터랙티브한 경험을 설계합니다.",
  location: "서울, 대한민국",
  contact: {
    email: "legacytachyon@gmail.com"
  },
  researchFocus: [
    "Action Unit 조건부 3D 얼굴 복원",
    "조건부 GAN · 디퓨전 하이브리드 파이프라인",
    "실시간 인터랙티브 콘텐츠"
  ],
  learningStack: [
    "Unity5 & C# 게임 루프",
    "오디오 미들웨어 · VSTi",
    "라이브 퍼포먼스를 위한 크리에이티브 코딩"
  ],
  collaborations: [
    "게임 오디오 / VSTi 멘토링",
    "실시간 퍼포먼스 도구 공동 제작",
    "힙합 × 테크 크루 콜라보"
  ],
  news: [
    {
      date: "2025.06",
      detail: "Action Unit 기반 3D 얼굴 복원 파이프라인으로 학부 연구생 우수 과제를 수상하고 데모 공개 준비 중."
    },
    {
      date: "2025.03",
      detail: "Unity 게임 오디오 툴링 실험을 교내 게임제작 동아리에 공유해 채택."
    },
    {
      date: "2024.11",
      detail: "조건부 GAN을 활용한 표정 복원 포스터를 광운대 캡스톤 리서치 페어에서 발표."
    }
  ] as NewsItem[],
  education: [
    {
      degree: "통합과정 (M.S./Ph.D.)",
      school: "광운대학교 컴퓨터정보공학부",
      period: "2024 — 재학",
      advisor: "Computational Vision & Graphics Lab",
      note: "Action Unit 기반 3D 얼굴 복원 및 인터랙티브 생성 모델 연구"
    }
  ] as EducationEntry[],
  experience: [
    {
      title: "CV · Graphics Lab 연구원",
      organization: "광운대학교",
      period: "2024 — 현재",
      bullets: [
        "조건부 GAN과 Action Unit 라벨을 조합한 얼굴 복원 모델 프로토타입 개발",
        "Unity 기반 리얼타임 뷰어를 제작해 실험과 공연에 활용"
      ]
    },
    {
      title: "Unity 게임 플레이 탐색자",
      organization: "개인 실험실",
      period: "2023 — 현재",
      bullets: [
        "마이크로 게임을 통해 씬 매니지먼트, 셰이더, 오디오 리액티브 시스템을 학습",
        "C# 입문자용 문서를 제작해 커뮤니티에 공유"
      ]
    },
    {
      title: "힙합 컬렉티브 리드",
      organization: "교내 동아리 연합",
      period: "2021 — 현재",
      bullets: [
        "3개 힙합 동아리를 잇는 사이퍼 · 쇼케이스를 기획",
        "VJ 및 오디오 리액티브 툴을 직접 제작해 무대에 적용"
      ]
    }
  ] as ExperienceEntry[],
  publications: [
    {
      title: "AU-GAN: Action Unit 조건부 3D Face Fitting",
      venue: "Lab Report · 2025",
      summary:
        "AU 시퀀스를 조건으로 사용하는 GAN 기반 3D 얼굴 복원 파이프라인. 실시간 미리보기와 힙합 공연 연동을 목표로 함.",
      tags: ["GAN", "3D Face", "Realtime"]
    },
    {
      title: "Unity5 Audio Playground",
      venue: "Workshop · 2024",
      summary:
        "Unity5와 C#으로 제작한 오디오 리액티브 샘플 게임 묶음. 힙합 쇼케이스에서 시연하며 피드백 수집.",
      tags: ["Unity", "Audio", "Prototype"]
    }
  ] as PublicationEntry[],
  awards: [
    {
      title: "학부 연구생 우수 과제",
      organization: "광운대학교",
      year: "2025",
      note: "Action Unit 기반 3D 얼굴 복원 프로젝트"
    },
    {
      title: "크리에이티브 메이커상",
      organization: "교내 게임 제작 동아리",
      year: "2024",
      note: "Unity 오디오 실험 공유"
    }
  ] as AwardEntry[],
  personalNotes: [
    "세 개의 힙합 동아리에서 보컬·프로듀싱·비주얼을 모두 경험",
    "반려견과 산책하며 실험 아이디어를 정리",
    "게임 사운드와 랩을 결합하는 VSTi를 만드는 것이 장기 목표"
  ]
};

