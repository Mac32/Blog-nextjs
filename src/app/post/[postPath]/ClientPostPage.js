'use client';

import PostContent from "@/components/PostContent";
import SectionShare from "@/components/SectionShare";
import FechaPost from "@/components/FechaPost";
import PostFooter from "@/components/PostFooter";
import H2 from "@/components/elements/H2";
import Comentarios from "@/components/Comentarios";
import CodeHighlight from "@/components/elements/CodeHighlighter";

export default function ClientPostPage({ post }) {
  const postUrl = `https://elblogdemalbo.com/post/${post.postPath}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': postUrl,
            headline: post.title,
            description: post.summary,
            image: [post.urlImage]
          })
        }}
      />

      <div className="container mx-auto shadow-md m-6">
        <article className="prose mx-auto">
          <div
            className="h-48 bg-center bg-cover rounded-t-md"
            style={{ backgroundImage: `url(${post.urlImage})` }}
          >
            <img className="hidden" src={post.urlImage} alt={post.descriptionImage} />
          </div>
          <H2>{post.title}</H2>
          <FechaPost>{post.date}</FechaPost>
          <PostContent>{post.content}</PostContent>
        </article>

        <SectionShare url={postUrl} />
        <hr />

        <CodeHighlight content={post.content} />
        <PostFooter category={post.category} autor={post.author} tags={post.tags} />
      </div>

      <Comentarios postPath={post.postPath} postTitle={post.title} />
    </>
  );
}
