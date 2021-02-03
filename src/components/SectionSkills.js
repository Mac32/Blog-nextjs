import React from "react";
import loadable from '@loadable/component'

const TecnologiaIcono = loadable (() => import ('./TecnologiaIcono.js'))

export default function SectionSkills(props) {
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
        <h2 className="title has-text-centered">Habilidades</h2>
        <hr />

      </div>
      <div className="columns is-mobile is-multiline is-centered is-4">
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
