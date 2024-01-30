import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Rugby']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    //TODO: Implementar funcion para eliminar elemento
    const onDelete = (category) => {
        setCategories(categories.filter((element) => element !== category));
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid
                    onDelete={onDelete}
                    category={category}
                    key={category}
                />
            ))}
        </>
    );
};
