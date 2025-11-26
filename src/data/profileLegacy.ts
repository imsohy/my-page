export type TimelineEntry = {
  title: string;
  organization: string;
  period: string;
  bullets: string[];
};

export const profileLegacy = {
  name: "Jang HyunWoong",
  pronouns: "He/Him",
  headline: "About Me",
  summary:
    "광운대학교 컴퓨터정보공학부에서 3D Face Reconstruction, Unity 게임, 오디오 툴링을 파고듭니다.\n힙합 공연과 연구실 작업을 오가며 두 가지 삶을 살고 있습니다.",
  location: "서울, 대한민국",
  contact: {
    email: "legacytachyon@gmail.com"
  },
  researchFocus: [
    "Action Unit 기반 3D 얼굴 복원",
    "Transformer 기반 모델"
  ],
  learningStack: [
    "Unity5 & C# 게임 제작",
    "오디오 미들웨어 · VSTi 시스템",
    "힙합 공연"
  ],
  collaborations: [
    "VSTi 플러그인 제작 멘토",
    "3D 얼굴 복원을 통한 아바타 제작"
  ],
  funFacts: [
    "3개의 교내 힙합 동아리에서 활동",
    "연구실과 무대 사이를 오가며 에너지를 충전",
    "놀이 같은 실험이 연구를 신선하게 만든다고 믿음"
  ],
  timeline: [
    {
      title: "통합과정 연구자",
      organization: "광운대 CV · Graphics Lab",
      period: "2024 — 현재",
      bullets: [
        "조건부 GAN 파이프라인으로 AU 기반 3D 얼굴 복원 프로토타입을 구축합니다.",
        "실험실 및 실사용 데이터셋으로 복원 품질을 검증하고 지표를 만든다."
      ]
    },
    {
      title: "Unity 게임 플레이 탐색자",
      organization: "개인 실험실",
      period: "2023 — 현재",
      bullets: [
        "촉각적 UI, 스타일라이즈드 셰이더, 서사 실험을 중심으로 Unity5 프로토타입을 제작합니다.",
        "C#로 게임을 시작하는 동료들을 위한 짧은 학습 노트를 정리합니다."
      ]
    },
    {
      title: "힙합 컬렉티브 리드",
      organization: "광운대 동아리 연합",
      period: "2021 — 현재",
      bullets: [
        "라이브 비주얼과 비트 메이킹 실험을 엮은 사이퍼, 미니 쇼케이스를 기획합니다.",
        "공연을 돕기 위한 소규모 VJ · 오디오 리액티브 툴을 직접 제작합니다."
      ]
    }
  ] as TimelineEntry[]
};


