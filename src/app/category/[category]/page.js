import dbConnect from "@/lib/mongoConect";
import Post from "@/models/Post";
import Section from "@/components/Section";
import H2 from "@/components/elements/H2";
import Bar from "@/components/elements/Bar";

async function getPublicaciones(category) {
    let result
    try {
        await dbConnect()
        result = await Post.find({ visibility: 'Public', category: category }).select({
            visibility: 1,
            title: 1,
            postPath: 1,
            author: 1,
            date: 1,
            category: 1,
            summary: 1,
            urlImage: 1,
            imageDescription: 1
        }).populate('author', 'userName firstName lastName userTwitter urlImage').exec()
    } catch (error) {
        console.log('A ocurrido un error', error)
        return []
    }

    return result.map((doc) => {
        const post = doc.toObject()
        post._id = post._id.toString()
        post.author._id = post.author._id.toString()
        post.date = post.date
        return post
    }).reverse()
}

export default async function PublicationPage({ params }) {
    const { category } = await params;
    const decoder = decodeURIComponent(category)
    const publicaciones = await getPublicaciones(decoder)

    if (!publicaciones || publicaciones.length === 0) {
        return (
            <div className='my-20'>
                <Section publicaciones={publicaciones} />
                <H2>No hay publicaciones en esta categoria </H2>
            </div>
        )
    }

    return (
        <>
            <H2>
                Categoría: <span className="text-info">
                    {decoder}
                </span>
            </H2>

            <Section publicaciones={publicaciones} />
        </>
    )
}
