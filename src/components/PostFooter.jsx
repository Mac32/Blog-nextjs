import React from 'react';

export default function PostFooter(props) {
    return(
        <div class="media footer">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{props.autor}</p>
          <p class="subtitle is-6">@{props.autor}</p>
        </div>
      </div>
    );
}