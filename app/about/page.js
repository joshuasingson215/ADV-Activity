import CertificateGrid from "@/components/CertificateGrid";
import PageIntro from "@/components/PageIntro";
import { site, skills } from "@/lib/content";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageIntro label="About Me" title="Hi, I'm Joshua">
        Designer, developer, and automation enthusiast. Here&apos;s who I am, the tools I use, and
        how to reach me.
      </PageIntro>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-image">
            <img src={site.photo} alt={site.name} />
          </div>
          <div className="about-content">
            <p className="about-text">
              I am a designer who is deeply focused on creating{" "}
              <span className="highlight">clean, intuitive, and user centered visuals</span>, with
              a strong emphasis on blending creativity and functionality to produce meaningful
              digital experiences.
            </p>
            <p className="about-text">
              I take the time to understand the purpose behind each project, the needs of the
              users, and the goals of the client, allowing me to design solutions that are not only{" "}
              <span className="highlight">visually appealing but also practical</span>, accessible,
              and easy to use.
            </p>
            <p className="about-text">
              Through <span className="highlight">careful attention to detail</span>, consistency,
              and usability, I aim to create designs that communicate clearly, enhance user
              engagement, and leave a lasting impression, while continuously improving my skills
              and adapting to new design trends and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="skills-container">
          <h2 className="section-title">Skills</h2>
          <p className="skills-description">
            These are the tools I use to make my workflow faster, more efficient, and organized
            across different tasks. I use productivity, automation, AI-assisted, and technical tools
            that help simplify repetitive work, improve design and development processes, and
            increase overall output quality. By integrating different tools into my workflow, I can
            work more effectively while maintaining accuracy and delivering polished results.
          </p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-icon" title={skill.name}>
                <img src={skill.icon} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates">
        <div className="certificates-container">
          <h2 className="section-title">My Certificates</h2>
          <CertificateGrid />
        </div>
      </section>

      {/* Contact & Socials Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <h2 className="section-title">Contacts and Socials</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let&apos;s Connect</h3>
              <p className="contact-email">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p className="contact-phone">
                <a href={site.phoneLink}>{site.phoneDisplay}</a>
              </p>
            </div>
            <div className="socials">
              <h3>Follow me on</h3>
              <div className="social-links">
                <a
                  href={site.linkedin}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
