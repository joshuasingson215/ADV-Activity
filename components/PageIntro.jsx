// Dotted banner at the top of each inner page
export default function PageIntro({ label, title, children }) {
  return (
    <section className="page-intro">
      <div className="page-intro-content">
        <span className="page-intro-label">{label}</span>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
