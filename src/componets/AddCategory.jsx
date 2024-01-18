import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        /* Aca lo que se hace es convertir el string a un string sin espacios en blanco
        si la longitud de dicho string es menor o igual a 1 no continua ejecutando el
        resto de la funcion para no agregar elemntos sin contenido, en este caso minimo con
        dos letras
        */
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());

        // Para vaciar la caja de texto
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder="Buscar gifs"
                onChange={onInputChange}
            />
            <button>Agregar</button>
        </form>
    );
};
