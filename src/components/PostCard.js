import React from "react";
import Link from "next/link";

function PostCard(props) {
  return (
    <div class="card">
      <Link href={`/post/${props.id}`}>
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={props.imagen} alt="Placeholder image" />
          </figure>
        </div>
      </Link>
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <Link href={`/post/${props.id}`}>
              <p class="title is-5">{props.titulo}</p>
            </Link>
            <p class="subtitle is-6">@{props.autor}</p>
          </div>
        </div>

        <div class="content">
          {props.resumen}
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer">
      <Link href={`/post/${props.id}`}>
	<a  class="card-footer-item button is-link">Leer mas</a>
        </Link>
      </footer>
    </div>
  );
}

export default PostCard;
