import H3 from "./elements/H3";
import category from '@/templates/categories';
import Li from "./elements/Li";
import Bar from "./elements/Bar";


export default function PanelCategory() {
    return (
        <div className='mt-12 m-3.5 flex flex-col md:w-2/5'>
            <H3>Categorias:</H3>

            <Bar />
            <ul>
                {category.map((categoria, index) => (
                    <Li key={index}>{categoria}</Li>
                ))}
            </ul>
        </div>
    )
}