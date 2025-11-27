import Link from "next/link";
import { profile } from "@/data/profile";
import { Badge } from "@/components/Badge";
import { SectionHeading } from "@/components/SectionHeading";

export default function LegacyPage() {
  return (
    <main className="page-grid page-grid--wide">
      <section className="panel hero-section">
        <p className="eyebrow">Legacy Tachyon · {profile.pronouns}</p>
        <h1 className="title-xl">{profile.headline}</h1>
        <p className="muted">{profile.summary}</p>
        <div className="hero-meta">
          <Link href={`mailto:${profile.contact.email}`} className="chip accent">
            {profile.contact.email}
          </Link>
          <span className="chip">{profile.location}</span>
        </div>
      </section>

      <section className="panel highlight-grid">
        <article className="hero-card accent">
          <p className="eyebrow">연구 키워드</p>
          <div className="stacked">
            {profile.researchFocus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article className="hero-card">
          <p className="eyebrow">요즘 파고드는 것</p>
          <div className="stacked">
            {profile.learningStack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article className="hero-card">
          <p className="eyebrow">함께할 협업</p>
          <div className="stacked">
            {profile.collaborations.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="panel">
        <SectionHeading
          eyebrow="News"
          title="최근 소식"
          description="연구, Unity 실험, 힙합 활동의 하이라이트를 정리합니다."
        />
        <div className="news-list">
          {profile.news.map((item) => (
            <article key={item.date} className="news-item">
              <p className="eyebrow">{item.date}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel info-columns">
        <div>
          <SectionHeading
            eyebrow="Education"
            title="학력"
            description="Action Unit 기반 3D 얼굴 복원 연구"
          />
          <div className="info-list">
            {profile.education.map((edu) => (
              <article key={edu.school} className="info-card">
                <h3>{edu.degree}</h3>
                <p className="muted">{edu.school}</p>
                <p className="eyebrow">{edu.period}</p>
                {edu.advisor ? <p className="muted">Advisor · {edu.advisor}</p> : null}
                {edu.note ? <p className="muted">{edu.note}</p> : null}
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Experience"
            title="연구 & 활동"
            description="랩, 개인 실험실, 힙합 크루에서 쌓은 경험."
          />
          <div className="info-list">
            {profile.experience.map((exp) => (
              <article key={exp.title} className="info-card">
                <div className="info-card-head">
                  <h3>{exp.title}</h3>
                  <span>{exp.period}</span>
                </div>
                <p className="muted" style={{ whiteSpace: "pre-line" }}>{exp.organization}</p>
                <ul>
                  {exp.bullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <SectionHeading
          eyebrow="Works"
          title="프로젝트 · 리포트"
          description="연구 노트와 Unity 실험 일부를 기록합니다."
        />
        <div className="grid-2">
          {profile.publications.map((pub) => (
            <article key={pub.title} className="publication-card">
              <p className="eyebrow">{pub.venue}</p>
              <h3>{pub.title}</h3>
              <p className="muted">{pub.summary}</p>
              <div className="chip-row">
                {pub.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel info-columns">
        <div>
          <SectionHeading
            eyebrow="Honors"
            title="수상 & 선정"
            description="연구와 실험을 인정받은 순간들."
          />
          <div className="list-card">
            <ul>
              {profile.awards.map((award) => (
                <li key={award.title}>
                  <div className="list-row">
                    <span>{award.year}</span>
                    <div>
                      <strong>{award.title}</strong>
                      <p className="muted">{award.organization}</p>
                      {award.note ? <p className="muted">{award.note}</p> : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Personal"
            title="무대 밖 이야기"
            description="연구 실험을 단단하게 만드는 취향과 루틴."
          />
          <div className="list-card">
            <ul>
              {profile.personalNotes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
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


