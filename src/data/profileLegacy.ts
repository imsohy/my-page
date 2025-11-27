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
    "교내 힙합 동아리, 게임 개발 동아리, 학술동아리에서 활동",
    "연구실과 무대 사이를 오가며 에너지를 충전",
    "놀이 같은 실험이 연구를 신선하게 만든다고 믿음"
  ],
  timeline: [
    {
      title: "3D Face Reconstruction 졸업연구",
      organization: "광운대 Cine Lab",
      period: "2025.01-현재",
      bullets: [
        "트랜스포머를 활용한 AU 기반 3D 얼굴 재구성 파이프라인을 구축",
        "제 9회 KW-ACE 졸업작품 전시회 참가"
      ]
    },
    {
      title: "게임 프로그래밍",
      organization: "광운대 Level-UP!\n동아리",
      period: "2024 — 현재",
      bullets: [
        "광운대학교 게임개발 동아리 Level-UP! 동아리원",
        "Unity 5 라이트노벨 / SRPG \"White Star Way\" 에 음향 프로그래밍 및 테스터,디버거로 참여, 2025 Beaver-Rocks 전시회 참여",
        "열렬한 오버워치 게이머"
      ]
    },
    {
      title: "힙합 리드",
      organization: "광운대 C-SPOT\n동아리",
      period: "2024 — 현재",
      bullets: [
        "광운대학교 힙합동아리 C-SPOT 동아리원",
        "밤을 새서 비트를 듣고 가사를 쓰고, 힙합 공연들을 찾아다닙니다.",
        "크루원들이 제안한 작업물을 같이 작업하고, 녹음하고, 믹싱합니다.",
        "동아리 공연에 참여합니다."
      ]
    }
  ] as TimelineEntry[]
};


