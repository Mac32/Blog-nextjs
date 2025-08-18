import dbConnect from "@/lib/mongoConect";
import Post from "@/models/Post";
import ClientPostPage from "./ClientPostPage";

export default async function PublicationPage({ params }) {
  const { postPath } = await params;
  await dbConnect();
  const post = await Post.findOne({ postPath })
    .populate("author", "userName firstName lastName urlImage")
    .lean();

  if (!post) {
    return <div>Publicación no encontrada</div>;
  }

  return <ClientPostPage post={JSON.parse(JSON.stringify(post))} />;
}

export async function generateStaticParams() {
  await dbConnect();
  const posts = await Post.find({});
  return posts.map((post) => ({
    postPath: post.postPath,
  }));
}
