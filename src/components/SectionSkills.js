import React from "react";

export default function SectionSkills(props) {
  const tecnologiasLinks = {
    html: "https://i.ibb.co/BNRv1Ph/file-type-html-icon-130541-min.png",
    css: "https://i.ibb.co/4j97cVV/file-type-css-icon-130661-min.png",
    java: "https://i.ibb.co/VBRmdfR/java-22523-min.png",
    javascript: "https://i.ibb.co/Bqb3SQV/javascript-icon-130900-min.png",
    reactjs: "https://i.ibb.co/bzrsR0H/react-original-wordmark-logo-icon-146375-min.png",
    mysql: "https://i.ibb.co/hdvQwBZ/mysql-original-wordmark-logo-icon-146417-min.png",
    git: "https://i.ibb.co/D1K6nzK/git-original-wordmark-logo-icon-146510-min.png"
  }
  return (
    <article>
      <br />
      <div className="titulo">
        <h2>Habilidades</h2>
        <hr />
      </div>
      <div className="columns">
        {
          (props.tecnologias && props.tecnologias.lenght !== 0) ?
          (props.tecnologias.map(tecnologia => {
            <div className="column" sm={4} >
              <figure className="image is-128x128"  >
                <img src={tecnologiasLinks[tecnologia]} />
              </figure>
            </div>
  
          })): null
        }
        <br />

      </div>
    </article>
  );
}