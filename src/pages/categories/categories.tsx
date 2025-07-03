import { useContext, useState } from "react";
import { ComponentContext } from "../../context/componentContext";
import { useCategoryContext } from "../../context/searchCategories";

import {
    Container,
    Button,
    SliderContent
} from "./categories-style";


export default function Categories() {

    const { openMenu } = useContext(ComponentContext);
    const { setCategoryId } = useCategoryContext();

    const [sliderPosition, setSliderPosition] = useState(0);

    const categoryButtons = [
        { name: 'Tudo', id: '0' },
        { name: 'Games', id: '20' },
        { name: 'Futebol', id: '17' },
        { name: 'Entretenimento', id: '24' },
        { name: 'Música', id: '10' },
        { name: 'Automóveis e veículos', id: '2' },
        { name: 'Animais e pets', id: '15' },
        { name: 'Notícias e política', id: '25' },
        { name: 'Comédia', id: '23' },
        { name: 'Shorts', id: '26' },
        { name: 'Infantil', id: '1' },
        { name: 'Vida a dois', id: '22' },
        { name: 'Documentários', id: '26' }
    ];

    function searchCategory(id: string) {
        setCategoryId(id)
    }


    return (

        <Container openMenu={openMenu}>
            <SliderContent>
                {categoryButtons.map((button, index) => (
                    <Button onClick={() => searchCategory(button.id)} key={index}>{button.name}</Button>
                ))}
            </SliderContent>
        </Container>
    )


}