import { useContext, useState, useEffect, useMemo } from "react";
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const displayCategories = useMemo(() => {
        if (windowWidth <= 393) return categoryButtons.slice(0, 4);
        if (windowWidth <= 483) return categoryButtons.slice(0, 5);
        if (windowWidth <= 635) return categoryButtons.slice(0, 6);
        if (windowWidth <= 821) return categoryButtons.slice(0, 7);
        if (windowWidth <= 930) return categoryButtons.slice(0, 8);
        if (windowWidth <= 976) return categoryButtons.slice(0, 9);
        if (windowWidth <= 1015) return categoryButtons.slice(0, 10);
        return categoryButtons;
    }, [windowWidth, categoryButtons]);

    function searchCategory(id: string) {
        setCategoryId(id)
    }


    return (

        <Container openMenu={openMenu}>
            <SliderContent>
                {displayCategories.map((button, index) => (
                    <Button openMenu={openMenu} onClick={() => searchCategory(button.id)} key={index}>{button.name}</Button>
                ))}
            </SliderContent>
        </Container>
    )


}