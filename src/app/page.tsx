import Link from "next/link";
import Image from "next/image";
import { profileLegacy } from "@/data/profileLegacy";
import { Badge } from "@/components/Badge";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";

export default function HomePage() {
  const profile = profileLegacy;

  return (
    <main className="page-grid">
      <section className="panel hero-section hero-two-column">
        <div className="hero-copy">
          <p className="eyebrow">
            {profile.name} · {profile.pronouns}
          </p>
          <h1 className="title-xl">{profile.headline}</h1>
          <p className="muted" style={{ whiteSpace: "pre-line" }}>
            {profile.summary}
          </p>
          <div className="chip-row" style={{ marginTop: "1.25rem" }}>
            <Badge variant="accent">광운대학교</Badge>
            <Badge>3D Face Reconstruction</Badge>
            <Badge>Unity5 &amp; C#</Badge>
            <Badge>Audio Tooling</Badge>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="hero-avatar__ring">
            <Image
              src="/profile.jpg"
              alt="Portrait of Jang HyunWoong"
              fill
              sizes="230px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="hero-grid">
          <article className="hero-card accent">
            <p className="eyebrow">연구 키워드</p>
            {profile.researchFocus.map((item) => (
              <span key={item} className="muted">
                • {item}
              </span>
            ))}
          </article>
          <article className="hero-card">
            <p className="eyebrow">요즘 파고드는 것</p>
            {profile.learningStack.map((item) => (
              <span key={item} className="muted">
                • {item}
              </span>
            ))}
          </article>
          <article className="hero-card">
            <p className="eyebrow">함께 찾는 협업</p>
            {profile.collaborations.map((item) => (
              <span key={item} className="muted">
                • {item}
              </span>
            ))}
          </article>
        </div>
      </section>

      <section className="panel">
        <SectionHeading
          eyebrow="연구 여정"
          title="연구와 창작, 무대를 넘나들며 배움을 쌓아갑니다."
          description="프로토타입과 클럽 무대, 연구실 결과를 꾸준히 공개하며 실험 속도를 유지합니다."
        />
        <Timeline entries={profile.timeline} />
      </section>

      <section className="panel">
        <SectionHeading
          eyebrow="크리에이티브 랩"
          title="실험이 경험으로 연결되는 공간."
          description="ML 연구와 Unity 빌드, 힙합 문화를 잇는 사이드 프로젝트를 진행합니다."
        />
        <div className="grid-2">
          <article className="hero-card accent">
            <p className="eyebrow">3D Face Lab 노트</p>
            <p className="muted">
              AU 조건부 지오메트리 피팅, 미세 표정 캡처, GAN·디퓨전 하이브리드 디코더를 반복 실험합니다.
            </p>
            <div className="chip-row">
              <Badge>Pytorch</Badge>
              <Badge>커스텀 데이터셋</Badge>
              <Badge variant="accent">실시간 프리뷰</Badge>
            </div>
          </article>
          <article className="hero-card">
            <p className="eyebrow">Unity Playground</p>
            <p className="muted">
              C#, 씬 매니지먼트, 오디오 리액티브 셰이더를 익히기 위해 마이크로 게임을 제작합니다.
            </p>
            <div className="chip-row">
              <Badge>Unity5</Badge>
              <Badge>C#</Badge>
              <Badge>오디오 툴링</Badge>
            </div>
          </article>
        </div>
      </section>

      <section className="panel">
        <SectionHeading
          eyebrow="Fun Facts"
          title="재미를 잃지 않는 방법."
          description="문화와 호기심이 연구를 움직입니다."
        />
        <div className="grid-2">
          {profile.funFacts.map((fact) => (
            <div key={fact} className="callout">
              {fact}
            </div>
          ))}
        </div>
      </section>

      <section className="panel contact-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 style={{ margin: "0.25rem 0" }}>대담한 아이디어를 함께 만들어요.</h2>
          <p className="muted">
            Action Unit 연구, Unity 실험, 힙합 × 테크 크로스오버 이야기라면 언제든 환영입니다.
          </p>
        </div>
        <div className="chip-row">
          <Link href={`mailto:${profile.contact.email}`}>{profile.contact.email}</Link>
          <Badge>{profile.location}</Badge>
        </div>
      </section>
    </main>
  );
}

