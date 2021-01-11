import React from "react";

export default function PostFooter(props) {
  return (
    <div className="media footer">
      <div className="media-left">
        <figure className="image is-64x64">
          <img
            className="is-rounded"
            src="https://i.ibb.co/5xYgpr7/perfil.jpg"
            alt="Imagen de perfil del Autor"
          />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{props.autor}</p>
        <p className="subtitle is-6">@{props.autor}</p>
      </div>
    </div>
  );
}
