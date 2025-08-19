import Image from 'next/image'
import Link from 'next/link'
export default function ({ children, index }) {
    return (
        <div className="card bg-base-100 image-full shadow-sm my-1.5 overflow-hidden group">
            <figure className="transition-transform duration-500 transform group-hover:scale-110">
                <Image
                    fill
                    src={children.image}
                    alt={children.alt} />
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