import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" class="section section__projects">
      <div class="container container__projects">
        <h2 class="projects__title">Проекты</h2>
        <div class="project">
          <p class="project__title">Логистическая компания</p>
          <a
            href="https://github.com/Bulbash93/Logistic"
            className="project__link-btn button"
          >
            Сылка на проект
          </a>
        </div>
        <div class="project project__aniclot">
          <p class="project__title">Aniclot</p>
          <a
            href="https://github.com/Bulbash93/Aniclot"
            className="project__link-btn button"
          >
            Сылка на проект
          </a>
        </div>
      </div>
    </section>
  );
}
