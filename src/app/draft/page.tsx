import Link from "next/link";
import { profileLegacy } from "@/data/profileLegacy";
import { Badge } from "@/components/Badge";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";

export default function DraftPage() {
  const profile = profileLegacy;

  return (
    <main className="page-grid">
      <section className="panel">
        <p className="eyebrow">Legacy Tachyon · {profile.pronouns}</p>
        <h1 className="title-xl">{profile.headline}</h1>
        <p className="muted">{profile.summary}</p>
        <div className="chip-row" style={{ marginTop: "1.25rem" }}>
          <Badge variant="accent">광운대학교</Badge>
          <Badge>3D 얼굴 복원</Badge>
          <Badge>Action Units · cGAN</Badge>
          <Badge>Unity5 &amp; C#</Badge>
          <Badge>힙합 동아리 3곳</Badge>
        </div>
        <div className="hero-grid" style={{ marginTop: "2rem" }}>
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
          title="컴퓨터비전, 실시간 도구, 무대 경험을 한데 엮습니다."
        />
        <Timeline entries={profile.timeline} />
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

