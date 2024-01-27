import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
    test('Debemostrar título de la aplicación', () => {
        render(<GifExpertApp />);
        // screen.debug();
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
    });

    test('Debe de activarse la funcion onAddCategory y agregarse una categoria nueva al buscar un nuevo item', () => {
        const inputValue = 'Naruto';

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        // screen.debug();

        expect(screen.getByText(inputValue)).toBeTruthy();
    });

    test('No debe agregarse una categoria que ya se ha agregado anteriormente', () => {
        const inputValue = 'Naruto';

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form); // Se envía el valor la primera vez
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form); // Se envía el mismo valor por segunda vez

        // screen.debug();

        expect(screen.getAllByText(inputValue).length).not.toBeGreaterThan(1);
    });
});
