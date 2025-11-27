import type { TimelineEntry } from "@/data/profileLegacy";

type TimelineProps = {
  entries: TimelineEntry[];
};

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="timeline">
      {entries.map((entry) => (
        <article key={`${entry.title}-${entry.period}`} className="timeline-item">
          <div>
            <p className="eyebrow">{entry.period}</p>
            <h3>{entry.title}</h3>
            <span style={{ whiteSpace: "pre-line" }}>{entry.organization}</span>
          </div>
          <div className="timeline-card">
            <ul>
              {entry.bullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

