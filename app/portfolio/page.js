import ExperienceList from "@/components/ExperienceList";
import PageIntro from "@/components/PageIntro";
import ProjectList from "@/components/ProjectList";

export const metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      <PageIntro label="Portfolio" title="My Work & Experience">
        The roles I&apos;ve held and the projects I&apos;ve designed and built. Hover a button to
        preview a project.
      </PageIntro>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="experience-container">
          <h2 className="section-title">Job Experience</h2>
          <ExperienceList />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-container">
          <h2 className="section-title">Project List</h2>
          <h3 className="category-title">SIDE PROJECTS</h3>
          <ProjectList />
        </div>
      </section>
    </>
  );
}
