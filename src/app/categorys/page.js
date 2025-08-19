import CardCategory from "@/components/CardCategory"
import Bar from "@/components/elements/Bar"
import H2 from "@/components/elements/H2"
import Li from "@/components/elements/Li"
import category from "@/templates/categories"

export default function Categorys() {
    return (
        <div className='md:mt-12 md:m-3.5 md:flex md:flex-col md:w-full md:flex-wrap justify-center'>
            <H2>Categorias:</H2>

            <Bar />
            <ul className="flex flex-wrap aligement-center justify-center">
                {category.map((categoria, index) => (
                    <CardCategory key={index}>{categoria}</CardCategory>
                ))}
            </ul>
        </div>
    )
}