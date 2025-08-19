import Image from 'next/image'
import Link from 'next/link'

export default function CardCategory({ children, index }) {
    return (
        <div className="card bg-base-100 image-full shadow-sm my-1.5 overflow-hidden group w-full md:w-2/5 mx-3 lg:w-3/12">
            <figure className="relative transition-transform duration-500 transform group-hover:scale-110">
                <Image
                    fill
                    src={children.image}
                    alt={children.alt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{children.name}</h2>
                <p>{children.description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/category/${children.name}`}>
                        <li key={index} className="btn btn-soft btn-info rounded">
                            Ver más
                        </li>
                    </Link>
                </div>
            </div>
        </div>

    )
}