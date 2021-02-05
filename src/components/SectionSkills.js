import React from "react";
import loadable from '@loadable/component'

const TecnologiaIcono = loadable (() => import ('./TecnologiaIcono.js'))
const H2 = loadable(() => import('./elements/H2'))

export default function SectionSkills() {
  const tecnologiasLinks = {
    html: "https://i.ibb.co/BNRv1Ph/file-type-html-icon-130541-min.png",
    css: "https://i.ibb.co/4j97cVV/file-type-css-icon-130661-min.png",
    java: "https://i.ibb.co/VBRmdfR/java-22523-min.png",
    javascript: "https://i.ibb.co/Bqb3SQV/javascript-icon-130900-min.png",
    react: "https://i.ibb.co/bzrsR0H/react-original-wordmark-logo-icon-146375-min.png",
    mysql: "https://i.ibb.co/hdvQwBZ/mysql-original-wordmark-logo-icon-146417-min.png",
    git: "https://i.ibb.co/D1K6nzK/git-original-wordmark-logo-icon-146510-min.png"
  }
  return (
    <article>
      <br />
      <div>
        <H2 texto="Habilidades"/>

      </div>
      <div className="
      grid 
      grid-cols-1 
      sm:mx-4 
      sm:grid-cols-2 
      md:grid-cols-3 
      md:mx-4 
      lg:grid-cols-4 
      xl:grid-cols-5 
      2xl:grid-cols-5
      gap-3 
      mx-1"
      >
        <TecnologiaIcono fuente={tecnologiasLinks.html} titulo="HTML" />
        <TecnologiaIcono fuente={tecnologiasLinks.css} titulo="CSS" />
        <TecnologiaIcono fuente={tecnologiasLinks.java} titulo="JAVA" />
        <TecnologiaIcono fuente={tecnologiasLinks.javascript} titulo="JAVASCRIPT" />
        <TecnologiaIcono fuente={tecnologiasLinks.react} titulo="REACT" />
        <TecnologiaIcono fuente={tecnologiasLinks.mysql} titulo="MYSQL" />
        <TecnologiaIcono fuente={tecnologiasLinks.git} titulo="GIT" />

      </div>

    </article>
  );
}
