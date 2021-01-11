import React from "react";
import Link from "next/link";

function PostCard(props) {
  return (
    <div className="card">
      <Link href={`/post/${props.id}`}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.imagen} alt="Placeholder image" />
          </figure>
        </div>
      </Link>
      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <Link href={`/post/${props.id}`}>
              <p className="title is-5">{props.titulo}</p>
            </Link>
            <p className="subtitle is-6">@{props.autor}</p>
          </div>
        </div>

        <div className="content">
          {props.resumen}
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer className="card-footer">
        <Link href="/post/[id]" as={`/post/${props.id}`}>
          <a className="card-footer-item button is-link">Leer mas</a>
        </Link>
      </footer>
    </div>
  );
}

export default PostCard;
