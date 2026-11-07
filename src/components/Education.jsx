import { degree, courses } from "../data/education.js";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <header className="section-head">
        <p className="section-label">Education</p>
        <h2 className="section-heading">
          Where I <span className="dim">learned</span>
        </h2>
        <p className="section-sub">
          // the degree and the courses behind the code
        </p>
      </header>

      <div className="edu-grid">
        <article className="edu-card">
          <p className="edu-label">Degree</p>
          <div className="edu-top">
            <h3 className="edu-school">{degree.school}</h3>
            <span className="edu-period">{degree.period}</span>
          </div>
          <p className="edu-place">{degree.place}</p>
          <p className="edu-program">{degree.program}</p>
          <p className="edu-focus">{degree.focus}</p>
          <p className="edu-grade">{degree.grade}</p>
        </article>

        <article className="edu-card">
          <p className="edu-label">Courses</p>
          <ul className="edu-courses">
            {courses.map(({ title, provider, meta }) => (
              <li key={title}>
                <h3 className="edu-course-title">{title}</h3>
                <p className="edu-course-provider">{provider}</p>
                {meta && <p className="edu-course-meta">{meta}</p>}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
